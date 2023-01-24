import React from 'react'
import Image from "next/image"
import cover from '../assets/One bed (8).jpg'

function Onebedroomcovertwo() {
  return (
    <div>
        <Image className='coverimage' src={cover} width='auto' height='auto' alt='cover'/>
    </div>
  )
}

export default Onebedroomcovertwo