import Image from 'next/image'
import React from 'react'
import Banner from '../assets/bannerfive.jpg'

function Coveramenities() {
  return (
    <div>
        <Image className='cover-amenities' src={Banner} alt='cover amenities' height={500} />
    </div>
  )
}

export default Coveramenities