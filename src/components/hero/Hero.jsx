import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations,PresentationControls } from '@react-three/drei'
import "./hero.css";
import "./heroSmSc.css";
import Model from "./Model";

const Hero = () => {
  return (
    <>
      <div className="vapor_hero_container">
        <div className="vapor_video" >
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
                  {/* <LittlestTokyo scale={0.02} position={[0, 2.5, 0]} /> */}
                  <PresentationControls
                  global
                  zoom={4}
                  config={{ mass: 2, tension: 500 }}
                  snap={{ mass: 4, tension: 1500 }}
                  rotation={[0, 10, 0]}
                  polar={[-Math.PI / 3, Math.PI / 3]}
                  azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                  {/* <Model scale={0.1} position={[0, 10, 0]} rotation={[0, 1, 0]}/> */}
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
        </div>

        {/* <div className="vapor_hero_content">
          <div className="vapor__header-content">
            <h3 style={{ marginBottom: 16 }}>
              VAPORXP: Where Vaporwave fashion meets the metaverse
            </h3>
            <p>
              VaporXP brings Vaporwave, Aesthetic, and Experimental fashion to
              the blockchain. Utilizing the VXP Token, VaporXP offers Digital
              Wearables and Generative NFT’s.
              <br />
              <br />
              Collect Unique NFT Clothing and Accessories and wear them in your
              favorite metaverse platform.
            </p>
            <br />
            <p>
              An NFT marketplace of Digital fashion pieces curated and inspired
              by Artists, Graphic Designers, Influencers and Celebrities.
              <br />
              <br />
              The VXP token is at the core of VaporXP’s crypto-based fashion
              ecosystem.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
