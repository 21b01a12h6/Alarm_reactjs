import React from 'react'
import './Matter.css'

const Matter = ({heading,mat1,mat2}) => {
  return (
    <div className='head'>
      <h1 >{heading}</h1><br/>
    <div className='para'>
      <p>{mat1}</p>
      <p>{mat2}</p>
    </div>
    </div>
  )
}

export default Matter
