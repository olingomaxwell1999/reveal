import React,{useState} from 'react'
import Studiomodal from './Studiomodal'

function Studiofirst() {

    const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <div className='amenities-first'>
        <div className="amenities-first-heading">
            <h3>BREATHTAKING VIEWS</h3>
            <h2>WELL DESIGNED STUDIO LAYOUTS</h2>
        </div>
        <div className="amenities-first-text">
            <p>Nestled in nature yet connected to an inspired array of
world class amenities,
The Reveal has an exquisite collection of Spacious
studios ranging from <br/> <br/>
            </p>

            <ul className='bedrooms'>
                <li>
                    Convertible Studio - 294 sqft,
                </li>

                <li>
                    Supreme Studio - 287 sqft 
                </li>

                <li>
                    Elite Studios - 281 sqft.
                </li>

                <li>
                    Urban Studios - 272 sqft.
                </li>

                <li>
                    Junior Studios - 260 sqft.
                </li>
            </ul>

            <p>Masterfully set, the Studios are balanced in both proportion
and feature. All the contemporary life enhancing design
elements expected in this class are blended seamlessly.</p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button className="btn-light" onClick={handleClick}>view floor plan</button>
        </div>

        {openModal ? (
      <Studiomodal closeModal={setOpenModal}/>
    ) : null}
    </div>
  )
}

export default Studiofirst