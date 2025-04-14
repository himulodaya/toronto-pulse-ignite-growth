
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMove={(e) => {
        if (meshRef.current) {
          meshRef.current.rotation.x = e.clientY * 0.005;
          meshRef.current.rotation.y = e.clientX * 0.005;
        }
      }}
    >
      <torusGeometry args={[2, 0.5, 16, 32]} />
      <meshStandardMaterial 
        color={new THREE.Color(hovered ? "#D946EF" : "#6366F1")} 
        roughness={0.5} 
        metalness={0.8} 
      />
    </mesh>
  );
}

export const Interactive3D = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="w-full h-full"
        dpr={[1, 2]} // Optimize for retina displays
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38BDF8" />
        <Scene />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
