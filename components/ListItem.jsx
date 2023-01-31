import Image from 'next/image'
import SliderImage from '../assets/Reveal rooftop (2).jpg'

function ListItem({src,alt}) {
  return (
    <div className='listItem'>
      <Image src={src} priority='true' alt={alt} className='img'/>
    </div>
  )
}

export default ListItem