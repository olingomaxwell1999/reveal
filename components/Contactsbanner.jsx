import Image from 'next/image'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Banner from '../assets/Reveal rooftop (3).jpg'

function Contactsbanner() {

  useEffect(() => {
    AOS.init({duration:1500})
  })
  
  return (
    <div data-aos="zoom-in" className='banner-contact'>
        <Image className="banner-image" src={Banner} alt='Banner Amenities'/>

        {/* <div className="text">
            <h1>contact us</h1>
        </div> */}
    </div>
  )
}

export default Contactsbanner