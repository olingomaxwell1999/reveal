import Image from 'next/image'
import SliderImage from '../assets/Reveal rooftop (2).jpg'

function ListItem() {
  return (
    <div className='listItem'>
      <Image src={SliderImage} alt='slider item' className='img'/>
    </div>
  )
}

export default ListItem