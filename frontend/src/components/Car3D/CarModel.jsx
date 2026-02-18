import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CarModel() {
  const group = useRef();
  // Używamy bezpiecznego, ogólnodostępnego linku do modelu
  const { scene } = useGLTF('https://raw.githubusercontent.com/pmndrs/drei-assets/master/models/porsche.glb');

  useFrame((state) => {
    if (group.current) {
      // Auto reaguje na myszkę
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.pointer.x * Math.PI) / 6 + Math.PI, 0.1);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.pointer.y * Math.PI) / 12, 0.1);
    }
  });

  return <primitive ref={group} object={scene} scale={0.6} position={[0, -0.6, 0]} />;
}

useGLTF.preload('https://raw.githubusercontent.com/pmndrs/drei-assets/master/models/porsche.glb');
