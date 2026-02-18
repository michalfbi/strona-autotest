import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function CarModel() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.6, 0]}>
      <boxGeometry args={[3, 1, 1.5]} />
      <meshStandardMaterial color="#FFD200" roughness={0.3} metalness={0.7} />
    </mesh>
  );
}
