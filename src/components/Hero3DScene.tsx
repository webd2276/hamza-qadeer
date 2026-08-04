import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function RotatingObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const elapsedTimeRef = useRef(0);

  useFrame((_, delta) => {
    elapsedTimeRef.current += delta;
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x -= delta * 0.15;
      coreRef.current.rotation.z += delta * 0.2;
      const scale = 1 + Math.sin(elapsedTimeRef.current * 2) * 0.08;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group>
        {/* Outer Wireframe Icosahedron */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.8, 1]} />
          <meshBasicMaterial
            color="#00FF41"
            wireframe
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* Inner Glowing Torus Knot */}
        <mesh ref={coreRef}>
          <torusKnotGeometry args={[0.7, 0.2, 64, 16]} />
          <meshStandardMaterial
            color="#00FF41"
            emissive="#00FF41"
            emissiveIntensity={0.6}
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

function ParticleField({ count = 300 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorGreen = new THREE.Color("#00FF41");
    const colorWhite = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;

      const mixedColor = Math.random() > 0.4 ? colorGreen : colorWhite;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export const Hero3DScene: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] relative rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 group hover:border-[#00FF41]/40 transition-colors duration-500">
      {/* Matrix Overlay Scanline */}
      <div className="absolute inset-0 pointer-events-none matrix-scanline z-10 opacity-30" />

      {/* Terminal Hud Label */}
      <div className="absolute top-3 left-4 z-20 font-mono text-xs text-[#00FF41] flex items-center gap-2 bg-[#050505]/80 px-2.5 py-1 rounded border border-[#00FF41]/20">
        <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-ping" />
        <span>[3D_HERO_SCENE_LIVE]</span>
      </div>

      <div className="absolute bottom-3 right-4 z-20 font-mono text-xs text-white/40">
        [ROTATION: AUTO]
      </div>

      <Suspense
        fallback={
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#0A0A0A] text-[#00FF41] font-mono text-sm gap-3">
            <div className="w-8 h-8 border-2 border-[#00FF41] border-t-transparent rounded-full animate-spin" />
            <span>[LOADING_3D_CORE...]</span>
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00FF41" />
          <directionalLight position={[-5, 5, 5]} intensity={0.8} color="#00FF41" />

          <RotatingObject />
          <ParticleField count={isMobile ? 150 : 350} />

          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.2}
            enableDamping
            dampingFactor={0.05}
            enablePan={false}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};
