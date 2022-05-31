import React from 'react'
import { useTitle } from '../context/title'
const Name = () => {
  //aqui trae los valores que le dimos al estado
  console.log(useTitle())
  //destructu porque queremos el gray
  const { grayBg } = useTitle()
  return (
    <div className="w-full h-full">
      <h1
        className="text-[2rem] font-medium transition-all  duration-500 ease-in-out"
        style={{ color: `${grayBg ? '#b38f00' : '#F8C069'}` }}
      >
        Enrique Alvarado
      </h1>
      <h2
        className="text-[1.5rem] font-medium transition-all  duration-500 ease-in-out"
        style={{ color: `${grayBg ? '#000000' : '#ffffff'}` }}
      >
        Front-end developer
      </h2>
    </div>
  )
}

export default Name
