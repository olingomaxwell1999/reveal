import Image from "next/image"
import banner from '../assets/bannerone.jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Homebanner() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos="zoom-in" className="main-banner">
      <Image className="banner-image" src={banner} alt='banner'/>

      <div className="text">
        <h3>The</h3>
        <h1>Reveal</h1>
      </div>
    </div>
  )
}

export default Homebanner