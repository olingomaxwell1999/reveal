import Onebedroomcover from '@/components/Onebedroomcover'
import Onebedroomfirst from '@/components/Onebedroomfirst'
import Onebedroomslider from '@/components/Onebedroomslider'
import ResidenceBanner from '@/components/ResidenceBanner'
import ResidencesDisplay from '@/components/ResidencesDisplay'
import ResidenceSecond from '@/components/ResidenceSecond'
import ResidencesFirst from '@/components/ResidencesFirst'
import Studiofirst from '@/components/Studiofirst'
import Studiosecond from '@/components/Studiosecond'
import React from 'react'

function residences() {
  return (
    <div>
      <ResidenceBanner/>
      {/* <ResidencesFirst/> */}
      <Onebedroomfirst/>
      <Studiofirst/>
      <Onebedroomslider/>
      {/* <ResidencesDisplay/> */}
      {/* <ResidenceSecond/> */}
      <Onebedroomcover/>
      <Studiosecond/>
    </div>
  )
}

export default residences
