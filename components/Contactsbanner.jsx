import Image from 'next/image'
import React from 'react'

import Banner from '../assets/Reveal rooftop (3).jpg'

function Contactsbanner() {
  return (
    <div className='banner-contact'>
        <Image className="banner-image" src={Banner} alt='Banner Amenities'/>

        {/* <div className="text">
            <h1>contact us</h1>
        </div> */}
    </div>
  )
}

export default Contactsbanner