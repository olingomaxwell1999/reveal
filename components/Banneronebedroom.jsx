import Image from 'next/image'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Banner from '../assets/One bed (1).jpg'

function Banneronebedroom() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos="zoom-in" className='banner-amenities'>
        <Image priority='true' className="banner-image" src={Banner} alt='Banner Amenities'/>

        <div className="text">
            <h1>One Bedroom</h1>
        </div>
    </div>
  )
}

export default Banneronebedroom
