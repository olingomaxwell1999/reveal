import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Revealarea() {

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
            <p>AN INVESTMENT THAT WILL ENABLE YOU TO ACHIEVE
CONSISTENT AND ABOVE MARKET RENTAL RETURNS. <br/><br/>
Imagine investing in the heart of Nairobi’s most exquisite
shopping, entertainment, fashion and business district..</p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button className="btn">Download brochure</button>
        </div>

    </div>
  )
}

export default Revealarea