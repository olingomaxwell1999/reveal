import Onebedroomslider from '@/components/Onebedroomslider'
import ResidenceBanner from '@/components/ResidenceBanner'
import ResidencesDisplay from '@/components/ResidencesDisplay'
import ResidenceSecond from '@/components/ResidenceSecond'
import ResidencesFirst from '@/components/ResidencesFirst'
import React from 'react'

function residences() {
  return (
    <div>
      <ResidenceBanner/>
      <ResidencesFirst/>
      <Onebedroomslider/>
      <ResidencesDisplay/>
      <ResidenceSecond/>
    </div>
  )
}

export default residences
