import Image from 'next/image'
import React from 'react'

import Banner from '../assets/location.jpg'

function Locationbanner() {
  return (
    <div className='banner-amenities'>
        <Image className="banner-image" src={Banner} alt='Banner Amenities'/>

        <div className="text">
            <h1>Location</h1>
        </div>
    </div>
  )
}

export default Locationbanner