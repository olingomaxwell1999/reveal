import React from 'react'

function Studiofirst() {
  return (
    <div className='amenities-first'>
        <div className="amenities-first-heading">
            <h3>BREATHTAKING VIEWS</h3>
            <h2>WELL DESIGNED STUDIO LAYOUTS</h2>
            <h3>DISTINCTIVE</h3>
        </div>
        <div className="amenities-first-text">
            <p>Nestled in nature yet connected to an inspired array of
world class amenities,
The Reveal has an exquisite collection of Spacious
studios ranging from <br/> <br/>
            </p>

            <ul className='bedrooms'>
                <li>
                    Deluxe Studio - 285 sqft,
                </li>

                <li>
                    Superior Studio - 255 sqft
                </li>

                <li>
                    Junior Studio - 195 sqft.
                </li>
            </ul>

            <p>Masterfully set, the Studios are balanced in both proportion
and feature. All the contemporary life enhancing design
elements expected in this class are blended seamlessly.</p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button className="btn-light">Download brochure</button>
        </div>
    </div>
  )
}

export default Studiofirst