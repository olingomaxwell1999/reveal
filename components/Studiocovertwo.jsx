import React from 'react'
import Image from "next/image"
import cover from '../assets/studio (5).jpg'

function Studiocovertwo() {
  return (
    <div>
        <Image className='coverimage' src={cover} width='auto' height='auto' alt='cover'/>
    </div>
  )
}

export default Studiocovertwo