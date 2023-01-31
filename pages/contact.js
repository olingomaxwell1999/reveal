import Contactarea from '@/components/Contactarea'
import Contactsbanner from '@/components/Contactsbanner'
import Locationcover from '@/components/Locationcover'
import Maparea from '@/components/Maparea'
import { useLoadScript } from '@react-google-maps/api'
import React from 'react'

function contact() {
  const {isLoaded} = useLoadScript(
    {
      googleMapsApiKey: 'AIzaSyCMwpAKVoehqh3_JNh9zbziwPmik3pcJKY'
    }
  )

  if (!isLoaded) return <div>Loading</div>

  return (
    <div>
      <Contactsbanner/>
      <Contactarea/>
      {/* <Maparea/> */}
      <Locationcover/>
    </div>
  )
}

export default contact