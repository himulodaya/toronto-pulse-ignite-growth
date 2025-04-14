
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      onPointerMove={(e) => {
        if (meshRef.current) {
          meshRef.current.rotation.x = e.clientY * 0.005;
          meshRef.current.rotation.y = e.clientX * 0.005;
        }
      }}
    >
      <torusGeometry args={[2, 0.5, 16, 32]} />
      <meshStandardMaterial color={new THREE.Color("#6366F1")} roughness={0.5} metalness={0.8} />
    </mesh>
  );
}

export const Interactive3D = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 8] }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Scene />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
