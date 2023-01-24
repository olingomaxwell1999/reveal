import React from 'react'
import Image from "next/image"
import cover from '../assets/One bed (9).jpg'

function Locationcover() {
  return (
    <div>
        <Image className='coverimage' src={cover} width='auto' height='auto' alt='cover'/>
    </div>
  )
}

export default Locationcover