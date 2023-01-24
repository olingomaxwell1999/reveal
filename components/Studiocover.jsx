import React from 'react'
import Image from "next/image"
import cover from '../assets/studio (3).jpg'

function Studiocover() {
  return (
    <div>
        <Image className='coverimage' src={cover} width='auto' height='auto' alt='cover'/>
    </div>
  )
}

export default Studiocover