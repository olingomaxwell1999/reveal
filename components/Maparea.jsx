import Image from 'next/image'
import Banner from '../assets/One bed (6).jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GoogleMap } from '@react-google-maps/api'

function Maparea() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up'>
      <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName='map-area'></GoogleMap>
    </div>
  )
}

export default Maparea
