import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export interface SphereParams {
  color: string;
  radius: number;
  opacity: number;
  metalness: number;
  roughness: number;
  emissiveIntensity: number;
  clearcoat: number;
  latLines: number;
  lonLines: number;
  lineOpacity: number;
  particleCount: number;
  particleSize: number;
  particleOpacity: number;
  autoRotate: boolean;
}

export const defaultSphereParams: SphereParams = {
  color: '#00ffff',
  radius: 1,
  opacity: 0.4,
  metalness: 0.1,
  roughness: 0.3,
  emissiveIntensity: 0.3,
  clearcoat: 0.5,
  latLines: 10,
  lonLines: 16,
  lineOpacity: 0.35,
  particleCount: 40,
  particleSize: 0.04,
  particleOpacity: 0.3,
  autoRotate: true,
};

function hexToNumber(hex: string): number {
  return parseInt(hex.replace('#', ''), 16);
}

function useAutoRotate(autoRotate: boolean, speed = 0.08) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });
  return groupRef;
}

/** 1. Minimal — 纯色 MeshBasicMaterial 球体 */
export const MinimalSphere: React.FC<{ params: SphereParams }> = ({ params }) => {
  const groupRef = useAutoRotate(params.autoRotate);
  const colorNum = hexToNumber(params.color);
  const geometry = useMemo(() => new THREE.SphereGeometry(params.radius, 64, 64), [params.radius]);
  const material = useMemo(() => new THREE.MeshBasicMaterial({
    color: colorNum,
    transparent: true,
    opacity: params.opacity,
  }), [colorNum, params.opacity]);

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry} material={material} />
    </group>
  );
};

/** 2. Physical — MeshPhysicalMaterial 带清漆和金属质感 */
export const PhysicalSphere: React.FC<{ params: SphereParams }> = ({ params }) => {
  const groupRef = useAutoRotate(params.autoRotate);
  const colorNum = hexToNumber(params.color);
  const geometry = useMemo(() => new THREE.SphereGeometry(params.radius * 0.94, 64, 64), [params.radius]);
  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: colorNum,
    roughness: params.roughness,
    metalness: params.metalness,
    transparent: true,
    opacity: params.opacity,
    emissive: colorNum,
    emissiveIntensity: params.emissiveIntensity,
    clearcoat: params.clearcoat,
    clearcoatRoughness: 0.3,
  }), [colorNum, params.roughness, params.metalness, params.opacity, params.emissiveIntensity, params.clearcoat]);

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry} material={material} />
    </group>
  );
};

/** 3. Wireframe — 线框模式球体 */
export const WireframeSphere: React.FC<{ params: SphereParams }> = ({ params }) => {
  const groupRef = useAutoRotate(params.autoRotate);
  const colorNum = hexToNumber(params.color);
  const geometry = useMemo(() => new THREE.SphereGeometry(params.radius, 24, 24), [params.radius]);
  const material = useMemo(() => new THREE.MeshBasicMaterial({
    color: colorNum,
    wireframe: true,
    transparent: true,
    opacity: params.opacity,
  }), [colorNum, params.opacity]);

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry} material={material} />
    </group>
  );
};

/** 4. Grid — 仅经纬网格线，无核心球体填充 */
export const GridSphere: React.FC<{ params: SphereParams }> = ({ params }) => {
  const groupRef = useAutoRotate(params.autoRotate);
  const colorNum = hexToNumber(params.color);

  const lines = useMemo(() => {
    const elements: JSX.Element[] = [];
    const lineWidth = params.radius * 0.008;

    for (let i = -params.latLines; i <= params.latLines; i++) {
      const phi = (i * Math.PI) / (params.latLines + 1);
      const r = params.radius * Math.sin(phi);
      const y = params.radius * Math.cos(phi);
      if (r > 0.1) {
        const geometry = new THREE.TorusGeometry(r, lineWidth, 16, 64);
        const lineColor = new THREE.Color(colorNum).offsetHSL(0, 0, 0.3);
        const material = new THREE.MeshBasicMaterial({
          color: lineColor,
          transparent: true,
          opacity: params.lineOpacity,
          blending: THREE.AdditiveBlending,
        });
        elements.push(
          <mesh key={`lat-${i}`} geometry={geometry} material={material} position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]} />
        );
      }
    }

    for (let i = 0; i < params.lonLines; i++) {
      const theta = (i * Math.PI) / (params.lonLines / 2);
      const geometry = new THREE.TorusGeometry(params.radius, lineWidth, 16, 64);
      const lineColor = new THREE.Color(colorNum).offsetHSL(0, 0, 0.3);
      const material = new THREE.MeshBasicMaterial({
        color: lineColor,
        transparent: true,
        opacity: params.lineOpacity,
        blending: THREE.AdditiveBlending,
      });
      elements.push(
        <mesh key={`lon-${i}`} geometry={geometry} material={material} rotation={[Math.PI / 2, theta, 0]} />
      );
    }
    return elements;
  }, [params.radius, params.latLines, params.lonLines, params.lineOpacity, colorNum]);

  return <group ref={groupRef}>{lines}</group>;
};

/** 5. Glowing — 核心球体 + 内发光效果 */
export const GlowingSphere: React.FC<{ params: SphereParams }> = ({ params }) => {
  const groupRef = useAutoRotate(params.autoRotate);
  const colorNum = hexToNumber(params.color);

  const coreGeometry = useMemo(() => new THREE.SphereGeometry(params.radius * 0.94, 64, 64), [params.radius]);
  const coreMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: colorNum,
    roughness: params.roughness,
    metalness: params.metalness,
    transparent: true,
    opacity: params.opacity,
    emissive: colorNum,
    emissiveIntensity: params.emissiveIntensity,
    clearcoat: params.clearcoat,
    clearcoatRoughness: 0.3,
  }), [colorNum, params.roughness, params.metalness, params.opacity, params.emissiveIntensity, params.clearcoat]);

  const glowGeometry = useMemo(() => new THREE.SphereGeometry(params.radius * 0.98, 32, 32), [params.radius]);
  const glowMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: colorNum,
    transparent: true,
    opacity: params.emissiveIntensity * 0.5,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  }), [colorNum, params.emissiveIntensity]);

  return (
    <group ref={groupRef}>
      <mesh geometry={glowGeometry} material={glowMaterial} />
      <mesh geometry={coreGeometry} material={coreMaterial} />
    </group>
  );
};

/** 6. Full — 完整版（内发光 + 核心 + 纬线 + 经线 + 粒子） */
export const FullSphere: React.FC<{ params: SphereParams }> = ({ params }) => {
  const groupRef = useRef<THREE.Group>(null);
  const colorNum = hexToNumber(params.color);

  const coreGeometry = useMemo(() => new THREE.SphereGeometry(params.radius * 0.94, 64, 64), [params.radius]);
  const coreMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: colorNum,
    roughness: params.roughness,
    metalness: params.metalness,
    transparent: true,
    opacity: params.opacity,
    emissive: colorNum,
    emissiveIntensity: params.emissiveIntensity,
    clearcoat: params.clearcoat,
    clearcoatRoughness: 0.3,
  }), [colorNum, params.roughness, params.metalness, params.opacity, params.emissiveIntensity, params.clearcoat]);

  const glowGeometry = useMemo(() => new THREE.SphereGeometry(params.radius * 0.98, 32, 32), [params.radius]);
  const glowMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: colorNum,
    transparent: true,
    opacity: params.emissiveIntensity * 0.5,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  }), [colorNum, params.emissiveIntensity]);

  const latitudeLines = useMemo(() => {
    const lines: JSX.Element[] = [];
    const lineWidth = params.radius * 0.008;
    for (let i = -params.latLines; i <= params.latLines; i++) {
      const phi = (i * Math.PI) / (params.latLines + 1);
      const r = params.radius * Math.sin(phi);
      const y = params.radius * Math.cos(phi);
      if (r > 0.1) {
        const geometry = new THREE.TorusGeometry(r, lineWidth, 16, 64);
        const lineColor = new THREE.Color(colorNum).offsetHSL(0, 0, 0.3);
        const material = new THREE.MeshBasicMaterial({
          color: lineColor,
          transparent: true,
          opacity: params.lineOpacity,
          blending: THREE.AdditiveBlending,
        });
        lines.push(<mesh key={`lat-${i}`} geometry={geometry} material={material} position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]} />);
      }
    }
    return lines;
  }, [params.radius, params.latLines, params.lineOpacity, colorNum]);

  const longitudeLines = useMemo(() => {
    const lines: JSX.Element[] = [];
    const lineWidth = params.radius * 0.008;
    for (let i = 0; i < params.lonLines; i++) {
      const theta = (i * Math.PI) / (params.lonLines / 2);
      const geometry = new THREE.TorusGeometry(params.radius, lineWidth, 16, 64);
      const lineColor = new THREE.Color(colorNum).offsetHSL(0, 0, 0.3);
      const material = new THREE.MeshBasicMaterial({
        color: lineColor,
        transparent: true,
        opacity: params.lineOpacity,
        blending: THREE.AdditiveBlending,
      });
      lines.push(<mesh key={`lon-${i}`} geometry={geometry} material={material} rotation={[Math.PI / 2, theta, 0]} />);
    }
    return lines;
  }, [params.radius, params.lonLines, params.lineOpacity, colorNum]);

  const particlesGeometry = useMemo(() => {
    const count = params.particleCount;
    if (count === 0) return null;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = params.radius * (1.1 + Math.random() * 0.3);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [params.radius, params.particleCount]);

  const particlesMaterial = useMemo(() => new THREE.PointsMaterial({
    color: colorNum,
    size: params.radius * params.particleSize,
    transparent: true,
    opacity: params.particleOpacity,
    blending: THREE.AdditiveBlending,
  }), [colorNum, params.radius, params.particleSize, params.particleOpacity]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (groupRef.current) {
      if (params.autoRotate) {
        groupRef.current.rotation.y = time * 0.08;
      }
      const particles = groupRef.current.children.find(c => c instanceof THREE.Points);
      if (particles) {
        particles.rotation.y = -time * 0.12;
        particles.rotation.x = Math.sin(time * 0.2) * 0.2;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={glowGeometry} material={glowMaterial} />
      <mesh geometry={coreGeometry} material={coreMaterial} />
      {latitudeLines}
      {longitudeLines}
      {particlesGeometry && <points geometry={particlesGeometry} material={particlesMaterial} />}
    </group>
  );
};

export type SphereVariantId = 'minimal' | 'physical' | 'wireframe' | 'grid' | 'glowing' | 'full';

export const VARIANT_LABELS: Record<SphereVariantId, { zh: string; en: string }> = {
  minimal: { zh: '极简', en: 'Minimal' },
  physical: { zh: '物理材质', en: 'Physical' },
  wireframe: { zh: '线框', en: 'Wireframe' },
  grid: { zh: '经纬网格', en: 'Grid' },
  glowing: { zh: '发光', en: 'Glowing' },
  full: { zh: '完整', en: 'Full' },
};

// 每种变体可调的参数子集
export const VARIANT_RELEVANT_PARAMS: Record<SphereVariantId, (keyof SphereParams)[]> = {
  minimal: ['radius', 'opacity', 'autoRotate'],
  physical: ['radius', 'opacity', 'metalness', 'roughness', 'emissiveIntensity', 'clearcoat', 'autoRotate'],
  wireframe: ['radius', 'opacity', 'autoRotate'],
  grid: ['radius', 'latLines', 'lonLines', 'lineOpacity', 'autoRotate'],
  glowing: ['radius', 'opacity', 'metalness', 'roughness', 'emissiveIntensity', 'clearcoat', 'autoRotate'],
  full: ['radius', 'opacity', 'metalness', 'roughness', 'emissiveIntensity', 'clearcoat', 'latLines', 'lonLines', 'lineOpacity', 'particleCount', 'particleSize', 'particleOpacity', 'autoRotate'],
};

// 变体组件映射（供外部使用）
// MinimalSphere, PhysicalSphere, WireframeSphere, GridSphere, GlowingSphere, FullSphere 已在上方导出

// localStorage key
export const SPHERE_CONFIG_KEY = 'math-universe-sphere-config';

export interface SphereConfig {
  variantId: SphereVariantId;
  params: SphereParams;
}
