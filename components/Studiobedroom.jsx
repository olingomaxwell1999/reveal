import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Studiobedroom() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='studiobedroom'>
        <div className="top-layer">
            <div className="side">
                <h2>one bedroom</h2>

                <p>The epitome of elegant and intuitive design,</p>

                <p>each 1 bedroom
offers an effortless blend of luxurious </p>

                <p>comfort, plenteous
space and architectural sophistication.</p>
{/* <p> 
These units sits on a built up areas of approximately.
▪︎One Bedroom Deluxe - 510 sqft
▪︎One Bedroom - 365 sqft</p> */}
                
            </div>
            <div className="middle-line"></div>
            <div className="side">
                <h2>studios</h2>

                <p>Nestled in nature yet connected to an</p>

                <p>inspired array of
world class amenities, The Reveal</p>

                <p>has an exquisite collection of Spacious
studios ranging from Deluxe Studio</p>

                {/* <p> 
 
Superior Studio - 255 sqft
and Junior Studio - 195 sqft.
Masterfully set, the Studios are balanced in both proportion
and feature. All the contemporary life enhancing design
elements expected in this class are blended seamlessly.</p> */}
            </div>
        </div>
        <div className="bottom-layer">
            <button className='btn-light'>download brochure</button>
        </div>
    </div>
  )
}

export default Studiobedroom