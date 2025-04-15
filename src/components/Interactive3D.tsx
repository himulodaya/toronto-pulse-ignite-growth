
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Animation loop for continuous rotation even without interaction
  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      if (meshRef.current && !hovered) {
        meshRef.current.rotation.x += 0.003;
        meshRef.current.rotation.y += 0.005;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup animation frame on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [hovered]);

  return (
    <mesh
      ref={meshRef}
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
      rotation={[rotation.x, rotation.y, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMove={(e) => {
        if (meshRef.current && hovered) {
          setRotation({
            x: e.clientY * 0.005,
            y: e.clientX * 0.005
          });
        }
      }}
    >
      <torusGeometry args={[1.5, 0.5, 32, 100]} />
      <meshPhongMaterial 
        color={new THREE.Color(hovered ? "#D946EF" : "#6366F1")} 
        shininess={100}
        specular={new THREE.Color("#FFFFFF")}
      />
    </mesh>
  );
}

export const Interactive3D = () => {
  return (
    <div className="w-full h-[400px] bg-gradient-to-b from-transparent to-black/10 rounded-xl overflow-hidden shadow-lg">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="w-full h-full"
        dpr={[1, 2]} // Optimize for retina displays
        gl={{ antialias: true }}
      >
        {/* Basic lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#38BDF8" />
        
        {/* 3D scene */}
        <Scene />
        
        {/* Environment and controls */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
        
        {/* Add a subtle fog for depth */}
        <fog attach="fog" color="#121212" near={8} far={15} />
      </Canvas>
    </div>
  );
};
