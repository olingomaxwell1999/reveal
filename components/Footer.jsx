import Image from "next/image"
import Logo from '../assets/logo.jpg'

function Footer() {
  return (
    <div className='main-footer'>
      <div className="top">
        <div className="area">
          <Image src={Logo} height={200} alt='the reveal logo'/>
        </div>
        <div className="area">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores optio facilis nihil praesentium animi eos neque sit, nesciunt aut at vitae ea doloribus alias consequuntur quibusdam suscipit iusto odio.</p>
        </div>
        <div className="area">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur nobis ut fuga nostrum commodi velit natus quaerat delectus quis? Nesciunt facilis alias voluptatem quos ullam quod. Iste, voluptatem maiores!
        </div>
      </div>

      <div className="bottom">
        <p>The Reveal &copy; 2023</p>
      </div> 
    </div>
  )
}

export default Footer