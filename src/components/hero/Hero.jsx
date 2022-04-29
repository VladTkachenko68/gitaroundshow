import React, { Suspense,useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { ScrollControls,PresentationControls } from '@react-three/drei'
import Model from "./Model";
import Overlay from "./Overlay";
import "./hero.css";
import "./heroSmSc.css";
const Hero = () => {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  const mousemove = () => {
    console.log(window.scrollY);
  }
  return (
    <>
      <div className="vapor_hero_container" onWheel={mousemove}>
        <div className="vapor_video">
          <Canvas camera={{ position: [2, 2.5, 10.5], fov: 50 }}>
            <ambientLight />
            <directionalLight
              position={[-5, 5, 5]}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <group position={[0, -4.5, 0]}>
              <Suspense fallback={null}>
                <ScrollControls pages={5}>
                  <PresentationControls
                  global
                  zoom={4}
                  config={{ mass: 2, tension: 500 }}
                  snap={{ mass: 4, tension: 1500 }}
                  rotation={[0, 10, 0]}
                  polar={[-Math.PI / 3, Math.PI / 3]}
                  azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                  <Model scale={0.1} position={[0, 10, 0]} rotation={[0, 1, 0]}/>
                  </PresentationControls>
                </ScrollControls>
              </Suspense>
            </group>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -1.4, 0]}
              opacity={0.75}
              width={10}
              height={10}
              blur={2.6}
              far={2}
            />
          </Canvas>
          <Overlay ref={overlay} caption={caption} scroll={scroll}/>
        </div>
      </div>
    </>
  );
};

export default Hero;
