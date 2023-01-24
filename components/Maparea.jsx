import Image from 'next/image'
import React from 'react'
import Banner from '../assets/One bed (6).jpg'

function Maparea() {
  return (
    <div className='map-area'>
      <Image src={Banner} alt='mapimage' className='map-image-area'/>
    </div>
  )
}

export default Maparea
