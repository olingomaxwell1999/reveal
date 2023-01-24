import React from 'react'
import {GrSwim} from 'react-icons/gr'

function City() {
  return (
    <div className='city'>
      <div className="top">
        <h2>Designed for</h2>
        <h2 className='uppercase two'>living</h2>
      </div>
      <div className="bottom-city">
        <div className='city-card'>
          <GrSwim className='icon' color={'#f8a428'}/>
          <h3>rooftop swimming pool</h3>
        </div>

        <div className='city-card'>
          <GrSwim className='icon' color={'#f8a428'}/>
          <h3>Two high speed trains</h3>
        </div>

        <div className='city-card'>
          <GrSwim className='icon' color={'#f8a428'}/>
          <h3>Business Center</h3>
        </div>

        <div className='city-card'>
          <GrSwim className='icon' color={'#f8a428'}/>
          <h3>Resident Lounge</h3>
        </div>

        <div className='city-card'>
          <GrSwim className='icon' color={'#f8a428'}/>
          <h3>Rooftop Fine Dine Restaurant</h3>
        </div>

        <div className='city-card'>
          <GrSwim className='icon' color={'#f8a428'}/>
          <h3>Coffee Shop</h3>
        </div>

        <div className='city-card'>
          <GrSwim className='icon' color={'#f8a428'}/>
          <h3>fully fitted gymnasium with</h3>
          <h3>indoor and outdoor spaces</h3>
        </div>
        
      </div>
    </div>
  )
}

export default City