"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Mailbox } from "./Mailbox";

const MailboxScene = () => {
  return (
    <div className="w-full h-[200px]">
      <Canvas shadows>

        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 1.7, 3]} fov={70} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-3, 7, -3]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />


        {/* Environment and scene */}
        <Environment preset="city" />

        {/* Mailbox with loading suspense */}
        <Suspense fallback={null}>
          <group position={[0, 0.7, 0]}>
            <Mailbox position={[0, 0, 0]} />
          </group>

        </Suspense>

        {/* Floor */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.7, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default MailboxScene;
