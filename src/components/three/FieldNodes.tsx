import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import { FieldNode, FIELD_COLORS, SIZE_MAP } from '@/types';
import { useFieldStore } from '@/stores/fieldStore';

interface FieldNodesProps {
  nodes?: FieldNode[];
  selectedNode?: FieldNode | null;
  onNodeClick?: (node: FieldNode) => void;
}

/**
 * 经纬网格球组件 - 可复用的带网格线的球体
 */
interface LatLonSphereProps {
  color?: number;
  radius?: number;
  isSelected?: boolean;
  isHovered?: boolean;
}

const LatLonSphere: React.FC<LatLonSphereProps> = ({ 
  color = 0x00ffff, 
  radius = 1, 
  isSelected = false,
  isHovered = false
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // 核心球体 - 改进为更优雅的材质
  const coreGeometry = useMemo(() => new THREE.SphereGeometry(radius * 0.94, 64, 64), []);
  const coreMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: color,
        roughness: 0.3,
        metalness: 0.1,
        transparent: true,
        opacity: isSelected ? 0.8 : (isHovered ? 0.6 : 0.4),
        emissive: color,
        emissiveIntensity: isSelected ? 0.8 : (isHovered ? 0.5 : 0.3),
        clearcoat: 0.5,
        clearcoatRoughness: 0.3,
      }),
    [color, isSelected, isHovered]
  );

  // 内发光球体
  const glowGeometry = useMemo(() => new THREE.SphereGeometry(radius * 0.98, 32, 32), []);
  const glowMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: isSelected ? 0.3 : (isHovered ? 0.2 : 0.1),
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      }),
    [color, isSelected, isHovered]
  );

  // 生成纬线（水平圆环）- 改进样式
  const latitudeLines = useMemo(() => {
    const lines: JSX.Element[] = [];
    const lineCount = 10;
    const lineWidth = radius * 0.008;
    
    for (let i = -lineCount; i <= lineCount; i++) {
      const phi = (i * Math.PI) / (lineCount + 1);
      const r = radius * Math.sin(phi);
      const y = radius * Math.cos(phi);
      
      if (r > 0.1) {
        const geometry = new THREE.TorusGeometry(r, lineWidth, 16, 64);
        const lineColor = new THREE.Color(color).offsetHSL(0, 0, 0.3);
        const material = new THREE.MeshBasicMaterial({
          color: lineColor,
          transparent: true,
          opacity: isSelected ? 0.8 : (isHovered ? 0.6 : 0.35),
          blending: THREE.AdditiveBlending,
        });
        lines.push(
          <mesh 
            key={`lat-${i}`} 
            geometry={geometry} 
            material={material} 
            position={[0, y, 0]} 
            rotation={[0, 0, Math.PI / 2]} 
          />
        );
      }
    }
    return lines;
  }, [radius, isSelected, isHovered, color]);

  // 生成经线（垂直圆弧）- 改进样式
  const longitudeLines = useMemo(() => {
    const lines: JSX.Element[] = [];
    const lineCount = 16;
    const lineWidth = radius * 0.008;
    
    for (let i = 0; i < lineCount; i++) {
      const theta = (i * Math.PI) / (lineCount / 2);
      
      const geometry = new THREE.TorusGeometry(radius, lineWidth, 16, 64);
      const lineColor = new THREE.Color(color).offsetHSL(0, 0, 0.3);
      const material = new THREE.MeshBasicMaterial({
        color: lineColor,
        transparent: true,
        opacity: isSelected ? 0.8 : (isHovered ? 0.6 : 0.35),
        blending: THREE.AdditiveBlending,
      });
      
      lines.push(
        <mesh 
          key={`lon-${i}`} 
          geometry={geometry} 
          material={material} 
          rotation={[Math.PI / 2, theta, 0]} 
        />
      );
    }
    return lines;
  }, [radius, isSelected, isHovered, color]);

  // 粒子环绕效果
  const particlesGeometry = useMemo(() => {
    const particleCount = 40;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const theta = (i / particleCount) * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = radius * (1.1 + Math.random() * 0.3);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [radius]);

  const particlesMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: color,
        size: radius * 0.04,
        transparent: true,
        opacity: isSelected ? 0.9 : (isHovered ? 0.6 : 0.3),
        blending: THREE.AdditiveBlending,
      }),
    [color, radius, isSelected, isHovered]
  );

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // 整体缓慢旋转
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.08;
      
      // 粒子动画
      const particles = groupRef.current.children.find(c => c instanceof THREE.Points);
      if (particles) {
        particles.rotation.y = -time * 0.12;
        particles.rotation.x = Math.sin(time * 0.2) * 0.2;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* 内发光球体 */}
      <mesh geometry={glowGeometry} material={glowMaterial} />
      
      {/* 核心球体 */}
      <mesh geometry={coreGeometry} material={coreMaterial} />

      {/* 纬线 */}
      {latitudeLines}

      {/* 经线 */}
      {longitudeLines}
      
      {/* 粒子 */}
      <points geometry={particlesGeometry} material={particlesMaterial} />
    </group>
  );
};

/**
 * 节点球体组件 - 使用经纬网格球样式的可点击节点
 */
const NodeSphere: React.FC<{
  node: FieldNode;
  onClick: (node: FieldNode) => void;
  isSelected: boolean;
}> = ({ node, onClick, isSelected }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { setHoveredField, hoveredField } = useFieldStore();
  
  const color = node.color || FIELD_COLORS['logic'];
  const radius = node.size ? SIZE_MAP[node.size] : 1.5;
  const isHovered = hoveredField?.id === node.id;

  useFrame(() => {
    if (groupRef.current) {
      // 选中时放大效果，悬停时轻微放大
      const scale = isSelected ? 1.3 : (isHovered ? 1.15 : 1);
      groupRef.current.scale.setScalar(scale);
    }
  });

  const handlePointerOver = (e: THREE.Event) => {
    e.stopPropagation();
    setHoveredField(node);
  };

  const handlePointerOut = () => {
    setHoveredField(null);
  };

  return (
    <group
      ref={groupRef}
      position={node.position}
      onClick={(e) => {
        e.stopPropagation();
        onClick(node);
      }}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <LatLonSphere 
        color={color} 
        radius={radius} 
        isSelected={isSelected} 
        isHovered={isHovered}
      />
      
      {/* 悬停时显示的HTML提示 */}
      {isHovered && (
        <Html position={[0, radius + 0.5, 0]} center distanceFactor={8}>
          <div className="px-3 py-2 bg-slate-900/95 backdrop-blur-sm rounded-lg border border-slate-700 shadow-xl">
            <div className="text-sm font-bold text-white mb-1">{node.name}</div>
            <div className="text-xs text-slate-300">{node.description || node.category}</div>
          </div>
        </Html>
      )}
    </group>
  );
};

/**
 * 节点展示组件
 */
export const FieldNodes: React.FC<FieldNodesProps> = ({ nodes = [], selectedNode, onNodeClick }) => {
  return (
    <>
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={50}
        autoRotate={true}
        autoRotateSpeed={0.3}
      />

      <ambientLight intensity={0.5} />
      <pointLight position={[15, 15, 15]} intensity={1} color="#6366f1" />
      <pointLight position={[-15, -15, -15]} intensity={0.5} color="#22d3ee" />

      {/* 节点球体 - 每个都是经纬网格球 */}
      {nodes && nodes.length > 0 && nodes.map((node, index) => (
        <NodeSphere
          key={node.id || index}
          node={node}
          onClick={onNodeClick || (() => {})}
          isSelected={selectedNode?.id === node.id}
        />
      ))}

      {/* 星空背景 */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
};
