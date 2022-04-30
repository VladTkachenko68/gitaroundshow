import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { ScrollControls, PresentationControls, useScroll, Environment } from '@react-three/drei';
import Fade from 'react-reveal/Fade';
import Model from "./Model";
// import Overlay from "./Overlay";
import RightText from "./rightText";
import LeftText from "./leftText";

import "./hero.css";
import "./heroSmSc.css";
function Hero() {
  const myRef = useRef(null)
  const scroll = useRef(0)
  // const [effectRight, seteffectRight] = useState(texteffectRight);
  // const [effectLeft, seteffectLeft] = useState(texteffectLeft);
  const [scrollTop, setHeight] = useState(0)
  const onScroll = () => {
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    const scrollTop = myRef.current.scrollTop
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    setHeight(scrollTop)
  }

  return (
    <>
      <div className="vapors" ref={myRef} onScroll={onScroll}>
        <div className="vapor_hero_container">
          <div className="vapor_video" >
            <Canvas camera={{ position: [2, 2.5, 10.5], fov: 50 }}>
              <ambientLight intensity={1} />
              <directionalLight
                position={[-5, 5, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                color="white"
                intensity={2}
              />
              <group position={[0, -4.5, 0]}>
                <Suspense fallback={null}>
                  <PresentationControls
                    global
                    zoom={4}
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 10, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]} 
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                    <Model scale={0.1} position={[0, 10, -10]} rotation={[0, 1, 0]} scroll={scroll} dataParentToChild = {scrollTop/4000
                  
                  
                  }/>
                  </PresentationControls>
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
          </div>
          <div className="canvas-above">
            <div className="texteffectRight">
              <Fade
                when={scrollTop >= 1800 && scrollTop <= 2500}
                duration={2000}
                bottom>
                <RightText />
              </Fade>
            </div>
            <div className="texteffectLeft">
              <Fade
                when={scrollTop >= 300 && scrollTop <= 800}
                duration={2000}
                bottom>
                <LeftText />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
