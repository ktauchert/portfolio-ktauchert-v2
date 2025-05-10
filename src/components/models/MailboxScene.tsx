"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import { Mailbox } from "./Mailbox";

const MailboxScene = () => {
  return (
    <div className="w-full h-[200px]">
      <Canvas shadows>
        {/* <color attach="background" args={["#f0f0f000"]} /> */}

        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 1.7, 3]} fov={70} />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        /> */}

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-3, 7, -3]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {/* <SpotLight 
          position={[-5, 5, 2]} 
          angle={0.3} 
          penumbra={0.8} 
          intensity={1.5} 
          castShadow 
          color="#fff"
        /> */}

        {/* Environment and scene */}
        <Environment preset="city" />

        {/* Mailbox with loading suspense */}
        <Suspense fallback={null}>
          <group position={[0, 0.7, 0]}>
            <Mailbox position={[0, 0, 0]} />
          </group>
          {/* <ContactShadows
            position={[0, 0, 0]}
            opacity={0.4}
            scale={10}
            blur={1.5}
            far={4}
          /> */}
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
