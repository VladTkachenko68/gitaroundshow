import * as THREE from 'three'
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useScroll } from '@react-three/drei'
import RightText from "./rightText";
import LeftText from "./leftText";
function Model(props) {
  const scroll = useScroll()
  useFrame((state, delta) => {
    state.camera.position.set(Math.sin((props.dataParentToChild/1000)  * 4) * 10, Math.atan((props.dataParentToChild/1000)  * Math.PI * 2) * 4, Math.cos((props.dataParentToChild/1000)  * Math.PI) * -10)
    state.camera.lookAt(0, 1, 0)
  })

  const { nodes, animations, materials } = useGLTF("/1.gltf");
  const { ref, actions, names } = useAnimations(animations);
  console.log(actions, names);
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
    return () => actions[names[0]].fadeOut(0.5);
  }, [actions, names]);
  console.log(nodes);
  console.log(animations);
  console.log(materials);
  return (
    <>
      <group ref={ref} dispose={null} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.CC_Base_Body.geometry}
          skeleton={nodes.CC_Base_Body.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <meshPhongMaterial color="#242424" emissive="#000000" specular="#4c4343" shininess={90} fog={true} reflectivity="1" refractionRatio={1} combine={THREE.MultiplyOperation} />
        </skinnedMesh>
      </group>
    </>
  );
}

export default Model;



