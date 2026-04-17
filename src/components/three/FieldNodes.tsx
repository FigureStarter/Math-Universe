import React, { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { FieldNode, FIELD_COLORS, SIZE_MAP } from '@/types';
import { useFieldStore } from '@/stores/fieldStore';
import {
  MinimalSphere,
  PhysicalSphere,
  WireframeSphere,
  GridSphere,
  GlowingSphere,
  FullSphere,
  SphereParams,
  defaultSphereParams,
  SphereVariantId,
  SPHERE_CONFIG_KEY,
  SphereConfig,
} from './SphereVariants';

interface FieldNodesProps {
  nodes?: FieldNode[];
  selectedNode?: FieldNode | null;
  onNodeClick?: (node: FieldNode) => void;
}

// 变体组件映射
const VARIANT_COMPONENTS: Record<SphereVariantId, React.FC<{ params: SphereParams }>> = {
  minimal: MinimalSphere,
  physical: PhysicalSphere,
  wireframe: WireframeSphere,
  grid: GridSphere,
  glowing: GlowingSphere,
  full: FullSphere,
};

// 从 localStorage 读取全局球体配置
function loadSphereConfig(): SphereConfig {
  try {
    const saved = localStorage.getItem(SPHERE_CONFIG_KEY);
    if (saved) {
      const config = JSON.parse(saved);
      if (config.variantId && config.params) {
        return config as SphereConfig;
      }
      // 兼容旧格式：selectedVariant + params
      if (config.selectedVariant && config.params) {
        return { variantId: config.selectedVariant as SphereVariantId, params: config.params };
      }
    }
  } catch { /* ignore */ }
  return { variantId: 'wireframe', params: defaultSphereParams };
}

/**
 * 节点球体组件 - 使用 SphereVariants 系统的可点击节点
 */
const NodeSphere: React.FC<{
  node: FieldNode;
  onClick: (node: FieldNode) => void;
  isSelected: boolean;
  globalConfig: SphereConfig;
}> = ({ node, onClick, isSelected, globalConfig }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { setHoveredField, hoveredField } = useFieldStore();

  const colorStr = node.color || FIELD_COLORS['logic'] || '#94A3B8';
  const radius = node.size ? SIZE_MAP[node.size] : 1.5;
  const isHovered = hoveredField?.id === node.id;

  // 将全局配置与节点颜色合并（颜色由各节点自己的领域色决定）
  const sphereParams: SphereParams = useMemo(() => ({
    ...globalConfig.params,
    color: colorStr,
  }), [globalConfig.params, colorStr]);

  const VariantComponent = VARIANT_COMPONENTS[globalConfig.variantId];

  useFrame(() => {
    if (groupRef.current) {
      const scale = isSelected ? 1.3 : (isHovered ? 1.15 : 1);
      groupRef.current.scale.setScalar(scale);
    }
  });

  const handlePointerOver = (e: THREE.Event) => {
    (e as unknown as { stopPropagation: () => void }).stopPropagation();
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
        (e as unknown as { stopPropagation: () => void }).stopPropagation();
        onClick(node);
      }}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <VariantComponent params={sphereParams} />
    </group>
  );
};

/**
 * 节点展示组件
 */
export const FieldNodes: React.FC<FieldNodesProps> = ({ nodes = [], selectedNode, onNodeClick }) => {
  const [globalConfig, setGlobalConfig] = useState<SphereConfig>(loadSphereConfig);

  // 监听 localStorage 变化（当用户在测试页修改配置时实时更新）
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === SPHERE_CONFIG_KEY && e.newValue) {
        try {
          setGlobalConfig(JSON.parse(e.newValue));
        } catch { /* ignore */ }
      }
    };

    // 同 tab 内的 localStorage 变化需要通过自定义事件或轮询检测
    // 使用轮询方案：每秒检查一次
    let lastValue = localStorage.getItem(SPHERE_CONFIG_KEY);
    const interval = setInterval(() => {
      const current = localStorage.getItem(SPHERE_CONFIG_KEY);
      if (current !== lastValue) {
        lastValue = current;
        if (current) {
          try {
            setGlobalConfig(JSON.parse(current));
          } catch { /* ignore */ }
        }
      }
    }, 1000);

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[15, 15, 15]} intensity={1} color="#6366f1" />
      <pointLight position={[-15, -15, -15]} intensity={0.5} color="#22d3ee" />

      {/* 节点球体 - 使用 SphereVariants 系统 */}
      {nodes && nodes.length > 0 && nodes.map((node, index) => (
        <NodeSphere
          key={node.id || index}
          node={node}
          onClick={onNodeClick || (() => {})}
          isSelected={selectedNode?.id === node.id}
          globalConfig={globalConfig}
        />
      ))}

      {/* 星空背景 */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
};
