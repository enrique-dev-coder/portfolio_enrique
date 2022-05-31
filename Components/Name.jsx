import React from 'react'
import { useTitle } from '../context/title'
const Name = () => {
  //aqui trae los valores que le dimos al estado
  console.log(useTitle())
  //destructu porque queremos el gray
  const { grayBg } = useTitle()
  return (
    <div className="full_container">
      <h1
        className="main_title"
        style={{ color: `${grayBg ? '#b38f00' : '#F8C069'}` }}
      >
        Enrique Alvarado
      </h1>
      <h2
        className="secondary_title"
        style={{ color: `${grayBg ? '#000000' : '#ffffff'}` }}
      >
        Front-end developer
      </h2>
    </div>
  )
}

export default Name
