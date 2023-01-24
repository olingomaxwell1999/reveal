import Image from 'next/image'
import React from 'react'

import Banner from '../assets/One bed (1).jpg'

function Banneronebedroom() {
  return (
    <div className='banner-amenities'>
        <Image className="banner-image" src={Banner} alt='Banner Amenities'/>

        <div className="text">
            <h3>One</h3>
            <h1>Bedroom</h1>
        </div>
    </div>
  )
}

export default Banneronebedroom
