import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useFieldStore } from '@/stores/fieldStore';

export default function CameraController() {
  const { camera } = useThree();
  const { cameraTarget, setCameraTarget } = useFieldStore();
  const targetPosition = useRef(new THREE.Vector3(25, 0, 0));
  const isAnimating = useRef(false);
  
  useEffect(() => {
    if (cameraTarget) {
      const direction = new THREE.Vector3(...cameraTarget).normalize();
      targetPosition.current = new THREE.Vector3(...cameraTarget).add(direction.multiplyScalar(10));
      isAnimating.current = true;
    }
  }, [cameraTarget]);
  
  useFrame(() => {
    if (isAnimating.current && cameraTarget) {
      camera.position.lerp(targetPosition.current, 0.02);
      
      if (camera.position.distanceTo(targetPosition.current) < 0.1) {
        isAnimating.current = false;
        setCameraTarget(null);
      }
      
      camera.lookAt(new THREE.Vector3(...cameraTarget));
    }
  });
  
  return null;
}
