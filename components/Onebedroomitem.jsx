import Image from 'next/image'
import SliderImage from '../assets/One bed (4).jpg'

function Onebedroomitem({src,alt}) {
  return (
    <div className='listItem'>
      <Image src={src} priority='true' alt={alt} className='img'/>
    </div>
  )
}

export default Onebedroomitem