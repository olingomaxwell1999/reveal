
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Locationcover() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div className="location-cover">
        
    </div>
  )
}

export default Locationcover