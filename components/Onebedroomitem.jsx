import Image from 'next/image'
import SliderImage from '../assets/One bed (4).jpg'

function Onebedroomitem() {
  return (
    <div className='listItem'>
      <Image src={SliderImage} alt='slider item' className='img'/>
    </div>
  )
}

export default Onebedroomitem