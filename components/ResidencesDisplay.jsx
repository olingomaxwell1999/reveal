import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ResidencesDisplay() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    
    <div data-aos='fade-up' className='amenities-second'>
        <div className="amenities-first-heading">
            <h3>WELCOME TO</h3>
            <h2>THE REVEAL ESTATE</h2>
        </div>
        <div className="amenities-first-text">
            <p>An Investment that will enable you to achieve consistent and above market Rental Returns. The Reveal, Sets the standard for revolutionary architectural innovation and premier living experience in the heart of Kilimani, Nairobi County. 
</p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button className="btn">register interests</button>
        </div>

    </div>
  )
}

export default ResidencesDisplay