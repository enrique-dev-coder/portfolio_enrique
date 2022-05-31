import * as THREE from 'three'
import {
  ContactShadows,
  Environment,
  PerspectiveCamera,
  MeshDistortMaterial,
} from '@react-three/drei'
import React, { Suspense, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
//animacion de elementos de react spring three??
import { animated, useSpring } from '@react-spring/three'
import { useTitle } from '../../context/title'
const Sphere = ({ setBg, setGrayg }) => {
  const sphere = useRef()
  const light = useRef()

  const [mode, setMode] = useState(false)
  const [down, setDown] = useState(false)
  const [hovered, setHovered] = useState(false)

  //animated material de drei
  const AnimatedMaterial = animated(MeshDistortMaterial)

  //uso del usespring para three js es como un useStatecombinado con un usespring
  const [{ wooble, coat, color, ambient, env }] = useSpring(
    {
      wooble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.4 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? '#E8B059' : mode ? '#202020' : 'white',
      config: (n) => n === 'wooble' && hovered && { mass: 2, tension: 1000 },
    },
    [mode, hovered, down]
  )
  //animacion de la luz con el cursor
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20
    light.current.position.y = state.mouse.y * 20
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2
      )
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y / 2 : 0),
        0.2
      )
    }
  })
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <animated.ambientLight intensity={ambient} />
        <animated.pointLight
          ref={light}
          //hereda el position desde la clase de Object3D
          position-z={-15}
          intensity={env}
          color="#F8C069"
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <animated.mesh
          ref={sphere}
          scale={wooble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false)
            setMode(!mode)
            setBg({
              background: !mode ? '#202020' : '#f0f0f0',
              fill: !mode ? '#f0f0f0' : '#202020',
            })
            setGrayg()
          }}
        >
          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            //el clear coat es lo que lo hace brilloso
            clearcoat={coat}
          />
        </animated.mesh>
        <Environment preset="warehouse" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={0.8}
          //queda mejor sin height y width
          //width={15}
          //height={15}
          blur={2.5}
          far={1.6}
          clearcoatRoughness={0}
          metalness={1}
        />
      </Suspense>
    </>
  )
}

export default Sphere
