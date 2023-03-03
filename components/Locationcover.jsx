
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Locationcover() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div className="location-cover">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.787147242727!2d36.788776299999995!3d-1.3026754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1143c4d3d9f1%3A0xdf423987048693fd!2sThe%20Reveal!5e0!3m2!1sen!2ske!4v1677829358856!5m2!1sen!2ske" width="100%" height="600px" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Locationcover