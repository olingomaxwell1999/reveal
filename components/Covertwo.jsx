import React from 'react'
import Image from "next/image"
import cover from '../assets/One bed (9).jpg'

function Covertwo() {
  return (
    <div>
        <Image className='coverimage' src={cover} height={500} alt='cover'/>
    </div>
  )
}

export default Covertwo