
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function InvestmentPlan() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos="fade-up" className='investment-plan'>
        investment plan
    </div>
  )
}

export default InvestmentPlan