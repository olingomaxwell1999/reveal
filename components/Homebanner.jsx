import Image from "next/image"
import banner from '../assets/bannerone.jpg'


function Homebanner() {
  return (
    <div className="main-banner">
      <Image className="banner-image" src={banner} alt='banner'/>

      <div className="text">
        <h3>The</h3>
        <h1>Reveal</h1>
      </div>
    </div>
  )
}

export default Homebanner