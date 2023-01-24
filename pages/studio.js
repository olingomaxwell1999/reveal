import Bannerstudio from '@/components/Bannerstudio'
import Studiocover from '@/components/Studiocover'
import Studiocovertwo from '@/components/Studiocovertwo'
import Studiofirst from '@/components/Studiofirst'
import Studiosecond from '@/components/Studiosecond'
import Studioslider from '@/components/Studioslider'
import React from 'react'

function studio() {
  return (
    <div>
      <Bannerstudio/>
      <Studiofirst/>
      <Studiocover/>
      <Studiosecond/>
      <Studioslider/>
      <Studiocovertwo/>
    </div>
  )
}

export default studio