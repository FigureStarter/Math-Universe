import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useFieldStore } from '@/stores/fieldStore';

export default function CameraController() {
  const { camera } = useThree();
  const { cameraTarget } = useFieldStore();
  const targetPosition = useRef(new THREE.Vector3(25, 0, 0));
  const isAnimating = useRef(false);
  
  useEffect(() => {
    if (cameraTarget) {
      // 计算相机位置（在目标球体前方一定距离）
      const direction = new THREE.Vector3(...cameraTarget).normalize();
      targetPosition.current = new THREE.Vector3(...cameraTarget).add(direction.multiplyScalar(10));
      isAnimating.current = true;
    }
  }, [cameraTarget]);
  
  useFrame(() => {
    if (isAnimating.current && cameraTarget) {
      // 平滑过渡到目标位置
      camera.position.lerp(targetPosition.current, 0.02);
      
      // 检查是否接近目标
      if (camera.position.distanceTo(targetPosition.current) < 0.1) {
        isAnimating.current = false;
      }
      
      // 让相机朝向目标
      camera.lookAt(new THREE.Vector3(...cameraTarget));
    }
  });
  
  return null;
}
