import Image from 'next/image'
import SliderImage from '../assets/studio (4).jpg'

function Studioitem() {
  return (
    <div className='listItem'>
      <Image src={SliderImage} alt='slider item' className='img'/>
    </div>
  )
}

export default Studioitem