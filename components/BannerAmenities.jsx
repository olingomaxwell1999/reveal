import Image from 'next/image'
import React from 'react'

import Banner from '../assets/Reveal rooftop (3).jpg'

function BannerAmenities() {
  return (
    <div className='banner-amenities'>
        <Image className="banner-image" src={Banner} alt='Banner Amenities'/>

        <div className="text">
          <h1>Amenities</h1>
        </div>
    </div>
  )
}

export default BannerAmenities