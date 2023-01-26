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
            <h3>BREATHTAKING VIEWS</h3>
            <h2>WELL DESIGNED LAYOUTS</h2>
            <h3>DISTINCTIVE</h3>
        </div>
        <div className="amenities-first-text">
            <p>Os dolupta ectore vellab ipsae. Ut ut eiur, is expel intis commodignati nobis qui
ulpa similignis il ipsandebis il inctur, autemperunt hici od quam exerum fugit iumquo
ilicium reratas eum eum quat quatio voluptat maximil ipsundem volorero.</p>
        </div>
    </div>
  )
}

export default Amenitiessecond