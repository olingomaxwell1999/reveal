import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

function Revealarea() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    
    <div data-aos='fade-up' className='amenities-second'>
        <div className="amenities-first-heading">
            <h3>WELCOME TO</h3>
            <h2>THE REVEAL</h2>
        </div>
        <div className="amenities-first-text">
            <p>An Investment that will enable you to achieve consistent and above market Rental Returns. The Reveal, Sets the standard for revolutionary architectural innovation and premier living experience in the heart of Kilimani, Nairobi County. 
</p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          

          <Link href='https://share-eu1.hsforms.com/1LcZAa3CaT0-6ukDcxYncXgfblz8' target='_blank'>
            <button className="btn">register interest</button>
          </Link>
        </div>

    </div>
  )
}

export default Revealarea