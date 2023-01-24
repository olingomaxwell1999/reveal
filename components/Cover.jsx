import React from 'react'
import Image from "next/image"
import cover from '../assets/Reveal building (2).jpg'

function Cover() {
  return (
    <div>
        <Image className='coverimage' src={cover} height={500} alt='cover'/>
    </div>
  )
}

export default Cover