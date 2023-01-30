import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Amenitiessecond() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='amenities-second'>
        <div className="amenities-first-heading">
            <h3>ENIGMATIC</h3>
            <h2>ARCHITECTURE</h2>
            
        </div>
        <div className="amenities-first-text">
            <p>The Reveal, Sets the standard for revolutionary
architectural innovation and premier living
experience in the heart of Kilimani,
Nairobi County.
The architecture of these beautiful and artfully
designed units, meticulously set within Nairobi’s
most blue-chip location, offers unobstructed, scenic
views of the Ngong Hills and Nairobi CBD.
The Reveal offers exquisite 1 Bedrooms,
and Studios.</p>
        </div>
    </div>
  )
}

export default Amenitiessecond