import Image from 'next/image'
import React from 'react'

import Banner from '../assets/studio (2).jpg'

function Bannerstudio() {
  return (
    <div className='banner-amenities'>
        <Image className="banner-image" src={Banner} alt='Banner Amenities'/>

        <div className="text">
            <h1>Studios</h1>
        </div>
    </div>
  )
}

export default Bannerstudio