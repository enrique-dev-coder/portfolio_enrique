import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Name from '../Name'
import Sphere from './Sphere'
//componente de spring  para animaciones
import { animated } from '@react-spring/web'
import { useSpring } from '@react-spring/core'
import { useTitle } from '../../context/title'
const Scene = () => {
  //NOTE por alguna razon el estado global si esta definido en el index de la carpeta pero en componentes hijos no
  console.log(useTitle())
  //NOTE funciones del estado global
  const { grayBg, setGrayg } = useTitle()
  const titleBackground = () => {
    grayBg ? setGrayg(false) : setGrayg(true)
  }
  const [{ background, fill }, set] = useSpring(
    { background: '#f0f0f0', fill: '#202020' },
    []
  )
  return (
    <animated.div style={{ background }} className="full_container_height">
      <div className="name_container">
        <Name />
      </div>
      <Canvas className="canvas" dpr={[1, 2]}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/*pasar funcion como propiedad */}
        <Sphere setBg={set} setGrayg={titleBackground} />
      </Canvas>
    </animated.div>
  )
}

export default Scene
