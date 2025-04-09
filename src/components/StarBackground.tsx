"use client";

import React, { useState, useRef, Suspense, JSX } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: JSX.IntrinsicElements['points']) => {
  const ref = useRef<THREE.Points>(null);  
  const [sphere] = useState(() =>
    // random.inSphere(new Float32Array(5000), { radius: 1.2 })
    random.inSphere(new Float32Array(15000), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }    
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-20">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;