import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Locationfirst() {

    useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='amenities-first'>
        <div className="amenities-first-heading">
            <h2>LOCATION</h2>
        </div>
        <div className="amenities-first-text">
            <p>Within a prestigious spot alongside Ngong Road, The
Reveal is Located just minutes’ drive from Yaya Centre,
Junction Mall, Prestige Plaza Shopping Mall, Dayspring
University and Nairobi CBD.
<br/> <br/>
            </p>

            {/* <ul className='bedrooms'>
                <li>
                    Deluxe Studio - 285 sqft,
                </li>

                <li>
                    Superior Studio - 255 sqft
                </li>

                <li>
                    Junior Studio - 195 sqft.
                </li>
            </ul> */}

            <p>What’s more, you can reach Southern Bypass and the
Expressway within just 5mins.</p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button className="btn-light">Head to google maps</button>
        </div>
    </div>
  )
}

export default Locationfirst