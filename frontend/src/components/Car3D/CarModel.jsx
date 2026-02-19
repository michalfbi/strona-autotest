import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CarModel() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      // Płynne podążanie za kursorem
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.pointer.x * Math.PI) / 6 + Math.PI, 0.1);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.pointer.y * Math.PI) / 12, 0.1);
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]} scale={1.2}>
      {/* Karoseria */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[2.8, 0.5, 1.2]} />
        <meshStandardMaterial color="#FFD200" roughness={0.2} metalness={0.6} />
      </mesh>
      
      {/* Dach */}
      <mesh position={[-0.2, 0.7, 0]}>
        <boxGeometry args={[1.4, 0.35, 1.0]} />
        <meshStandardMaterial color="#222222" roughness={0.1} metalness={0.9} />
      </mesh>
      
      {/* Światła przód */}
      <mesh position={[1.41, 0.35, 0.4]}>
        <boxGeometry args={[0.05, 0.15, 0.25]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[1.41, 0.35, -0.4]}>
        <boxGeometry args={[0.05, 0.15, 0.25]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      
      {/* Światła tył */}
      <mesh position={[-1.41, 0.35, 0.4]}>
        <boxGeometry args={[0.05, 0.1, 0.3]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={1} />
      </mesh>
      <mesh position={[-1.41, 0.35, -0.4]}>
        <boxGeometry args={[0.05, 0.1, 0.3]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={1} />
      </mesh>
      
      {/* Koła */}
      {[
        [-0.9, 0.1, 0.65],
        [0.9, 0.1, 0.65],
        [-0.9, 0.1, -0.65],
        [0.9, 0.1, -0.65]
      ].map((pos, index) => (
        <mesh key={index} position={pos} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.15, 32]} />
          <meshStandardMaterial color="#111111" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}
