import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { FieldNodes } from './FieldNodes';
import Connections from './Connections';
import Particles from './Particles';
import CameraController from './CameraController';
import { useFieldStore, getFilteredFields } from '@/stores/fieldStore';

export default function Scene() {
  // 优化的背景色
  const backgroundColor = useMemo(() => new THREE.Color('#0a0a1a'), []);

  // 从 store 获取节点数据
  const filteredFields = useFieldStore(
    (state) => getFilteredFields(state.fields, state.filterMode)
  );
  const { selectedField, setSelectedField, isAutoRotating } = useFieldStore();

  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60, near: 0.1, far: 1000 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* 背景 */}
        <color attach="background" args={[backgroundColor]} />
        
        {/* 雾效果增加深度感 */}
        <fog attach="fog" args={['#0a0a1a', 50, 150]} />

        {/* 环境光 */}
        <ambientLight intensity={0.2} />
        
        {/* 点光源 */}
        <pointLight position={[20, 20, 20]} intensity={0.5} color="#6366f1" />
        <pointLight position={[-20, -20, -20]} intensity={0.3} color="#22d3ee" />

        {/* 星空背景 */}
        <Stars 
          radius={150}
          depth={60}
          count={4000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5}
        />

        {/* 主要内容 */}
        <Suspense fallback={null}>
          <FieldNodes 
            nodes={filteredFields}
            selectedNode={selectedField}
            onNodeClick={setSelectedField}
          />
          <Connections />
          <Particles />
        </Suspense>

        {/* 相机控制 */}
        <CameraController />
        
        {/* 轨道控制器（调试用） */}
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={15}
          maxDistance={80}
          autoRotate={isAutoRotating}
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />

        {/* 预加载资源 */}
        <Preload all />
      </Canvas>
    </div>
  );
}
