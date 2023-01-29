import Image from "next/image"
import Logo from '../assets/logo.jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='main-footer'>
      <div className="top">
        <div className="area">
          <div className="right-area-side">
            <Image src={Logo} height={200} width={200} priority='true' alt='the reveal logo'/>
          </div>

          <div className="logo-line"></div>
        </div>
        <div className="area">
          <div className="right-area-side">
            <p>Copyright 2022</p>
            <p>THE REVEAL.</p>
            <p>All Rights Reserved</p>
          </div>

          <div className="area-line"></div>
        </div>
        <div className="right-area-side">
          <p>Copyright 2022</p>
          <p>THE REVEAL.</p>
          <p>All Rights Reserved</p>
        </div>
      </div>

      <div className="bottom">
        <p>The Reveal &copy; 2023</p>
      </div> 
    </div>
  )
}

export default Footer