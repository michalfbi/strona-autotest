import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CarModel() {
  const group = useRef();
  // Używamy stabilnego linku zewnętrznego, aby uniknąć problemów z 404 na Netlify
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/porsche-911-991/model.gltf');

  useFrame((state) => {
    if (!group.current) return;
    const targetRotationY = (state.mouse.x * Math.PI) / 6;
    const targetRotationX = (state.mouse.y * Math.PI) / 12;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY + Math.PI, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.1);
  });

  return (
    <primitive 
      ref={group} 
      object={scene} 
      scale={0.6} 
      position={[0, -0.8, 0]} 
      rotation={[0, Math.PI, 0]}
    />
  );
}
