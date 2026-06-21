import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const HexagonMesh = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    // Subtle continuous rotation
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    
    // Parallax effect following mouse
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;
    
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.1;
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      {/* CylinderGeometry with 6 radial segments creates a perfect hexagon */}
      <cylinderGeometry args={[2.2, 2.2, 0.4, 6]} />
      <meshStandardMaterial 
        color="#e5c17a" 
        metalness={0.8} 
        roughness={0.2} 
        envMapIntensity={2}
      />
    </mesh>
  );
};

const Logo3D = () => {
  return (
    <div className="relative h-full min-h-[340px] md:min-h-[420px] rounded-[24px] overflow-hidden border border-[#8fd7ff1f] shadow-[inset_0_0_26px_rgba(143,215,255,0.05)]"
         style={{ background: 'linear-gradient(145deg, rgba(7, 10, 18, 0.95), rgba(5, 9, 15, 0.96))' }}>
      
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[60px]"></div>
      <div className="absolute bottom-[30%] right-[20%] w-[35%] h-[35%] rounded-full bg-accent-2/10 blur-[50px]"></div>

      <div className="absolute inset-0 w-full h-full p-4 cursor-move">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8fd7ff" />
          <pointLight position={[0, 0, 5]} intensity={1.5} color="#dcb464" distance={10} />
          
          <HexagonMesh />
        </Canvas>
      </div>
    </div>
  );
};

export default Logo3D;
