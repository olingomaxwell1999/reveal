import React,{useState} from 'react'
import Onebedroommodal from './Onebedroommodal'

function Onebedroomfirst() {

  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <div className='amenities-second pos'>
        <div className="amenities-first-heading">
            <h3>BREATHTAKING VIEWS</h3>
            <h2>WELL DESIGNED ONE BEDROOM LAYOUTS</h2>
        </div>
        <div className="amenities-first-text">
            <p>The epitome of elegant and intuitive design, each 1 bedroom offers an effortless blend of luxurious comfort, plenteous space and architectural sophistication. These units sits on a built up areas of approximately. <br/> <br/>
            </p>

            <ul className='bedrooms'>
                <li>
                    <span></span>
                    Deluxe 1 Bedroom - 541sqft
                </li>

                <li>
                    <span></span>
                     Executive 1 Bedroom - 460 sqft
                </li>
                <li>
                    <span></span>
                     Premium 1 Bedroom - 363 sqft
                </li>
            </ul>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button onClick={handleClick} className="btn">view floor plan</button>
        </div>

        {openModal ? (
      <Onebedroommodal closeModal={setOpenModal}/>
    ) : null}
    </div>
  )
}

export default Onebedroomfirst