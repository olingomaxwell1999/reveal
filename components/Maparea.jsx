import Image from 'next/image'
import Banner from '../assets/One bed (6).jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Maparea() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='map-area'>
      <Image src={Banner} alt='mapimage' className='map-image-area'/>
    </div>
  )
}

export default Maparea
