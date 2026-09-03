"use client";

import { Suspense, useRef, useMemo, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ─── Skill Node (Sphere) ─── */
function SkillNode({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.12 * scale, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.6}
      />
    </mesh>
  );
}

/* ─── Connection Lines ─── */
function ConnectionLines({
  nodes,
}: {
  nodes: [number, number, number][];
}) {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = new THREE.Vector3(...nodes[i]).distanceTo(
          new THREE.Vector3(...nodes[j])
        );
        if (dist < 2.5) {
          points.push(new THREE.Vector3(...nodes[i]));
          points.push(new THREE.Vector3(...nodes[j]));
        }
      }
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [nodes]);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#41C9E2" transparent opacity={0.15} />
    </lineSegments>
  );
}

/* ─── Orbiting Ring ─── */
function OrbitRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

/* ─── Central Core ─── */
function CentralCore() {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.35, 1]} />
        <meshStandardMaterial
          color="#088395"
          emissive="#41C9E2"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial
          color="#41C9E2"
          emissive="#41C9E2"
          emissiveIntensity={0.6}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

/* ─── Scene ─── */
function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes: [number, number, number][] = useMemo(
    () => [
      [1.5, 0.8, 0.3],
      [-1.2, 1.0, -0.5],
      [0.8, -0.9, 0.8],
      [-1.5, -0.5, 0.2],
      [0.3, 1.5, -0.8],
      [-0.8, -1.3, -0.6],
      [1.8, -0.2, -0.4],
      [-0.3, 0.5, 1.2],
      [1.0, 0.3, -1.0],
      [-1.0, 0.2, 0.9],
      [0.5, -1.5, -0.3],
      [-1.8, 0.7, -0.2],
    ],
    []
  );

  const colors = [
    "#088395", "#41C9E2", "#0A4D68", "#088395", "#F59E0B",
    "#41C9E2", "#0A4D68", "#088395", "#41C9E2", "#0A4D68",
    "#F59E0B", "#088395",
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralCore />
      {nodes.map((pos, i) => (
        <SkillNode
          key={i}
          position={pos}
          color={colors[i]}
          scale={i % 3 === 0 ? 1.3 : 1}
        />
      ))}
      <ConnectionLines nodes={nodes} />
      <OrbitRing radius={1.8} speed={0.15} color="#088395" />
      <OrbitRing radius={2.3} speed={-0.1} color="#41C9E2" />
    </group>
  );
}

/* ─── Loading Fallback ─── */
function HeroFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full border-2 border-brand-bright/20 animate-ping" />
        <div className="absolute inset-4 rounded-full border border-brand-core/30 animate-pulse" />
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-core/10 to-brand-bright/10 animate-pulse-soft" />
      </div>
    </div>
  );
}

/* ─── Static Fallback (reduced motion / SSR) ─── */
function StaticFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        {/* Concentric rings */}
        <div className="absolute inset-0 rounded-full border border-brand-bright/15" />
        <div className="absolute inset-6 rounded-full border border-brand-core/20" />
        <div className="absolute inset-12 rounded-full border border-brand-bright/25" />
        <div className="absolute inset-18 rounded-full border border-brand-core/30" />
        {/* Central glow */}
        <div className="absolute inset-24 rounded-full bg-gradient-to-br from-brand-core/20 to-brand-bright/20 backdrop-blur-sm" />
        {/* Nodes */}
        {[
          "top-4 left-1/2 -translate-x-1/2",
          "bottom-4 left-1/2 -translate-x-1/2",
          "left-4 top-1/2 -translate-y-1/2",
          "right-4 top-1/2 -translate-y-1/2",
          "top-12 right-12",
          "bottom-12 left-12",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full ${
              i % 3 === 0 ? "bg-brand-core" : i % 3 === 1 ? "bg-brand-bright" : "bg-accent-warm"
            } shadow-md ${pos}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export default function HeroScene() {
  const prefersReducedMotion = useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true // Server snapshot: assume reduced motion, show static fallback during SSR
  );

  if (prefersReducedMotion) {
    return <StaticFallback />;
  }

  return (
    <div className="absolute inset-0">
      <Suspense fallback={<HeroFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6.8], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#41C9E2" />
          <pointLight position={[-5, -3, 3]} intensity={0.4} color="#088395" />
          <Scene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
