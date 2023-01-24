import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from '../assets/bannertwo.jpg'
import Logo from '../assets/logo.jpg'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Contactarea() {
  return (
    <div className='contact-area'>
      <div className="contact-form-area">
        <div className="contact-form-heading">
            <h1>contact us</h1>
        </div>

        <form className='contact-form' action="submit">
            <div className="top-form">
                <div className="input-carrier">
                    <label htmlFor="first name" className="mb-2 italic">First Name</label>
                    <input className="mb-4 border-b-2" id="name" name="name" type="text" autocomplete="name" required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="last name" className="mb-2 italic">Last Name</label>
                    <input className="mb-4 border-b-2" id="name" name="name" type="text" autocomplete="name" required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="email" className="mb-2 italic">Email</label>
                    <input className="mb-4 border-b-2" id="name" name="name" type="email" autocomplete="name" required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="phone number" className="mb-2 italic">Phone Number</label>
                    <input className="mb-4 border-b-2" id="name" name="name" type="tel" autocomplete="name" required />
                </div>
            </div>

            <textarea className='message' name="message" id="message"></textarea>

            <div className="btn-area">
                <button className="btn-light">submit</button>
            </div>
        </form>

        <div className="more-text">
            <p style={{fontSize:'20px', color:'#fff'}}>The Reveal does not share or exchange this information with anyone. All information will be kept confidential.</p>
        </div>
      </div>
      <div className="contact-logo-area">
        <Image className='contact-image-logo-area' src={Banner} height={400} alt='contact image'/>

        <Image className='contact-logo-image-logo-area' src={Logo} alt='CONTACT PAGE logo'/>

        <div className="socials-container">
            <h3>Follow Us</h3>
            <Link href='www.facebook.com' target="_blank">
                <ImFacebook className='social-icon'/>
            </Link>

            <Link href='www.instagram.com' target="_blank">
                <AiOutlineInstagram className='social-icon'/>
            </Link>

            <Link href='www.twitter.com' target="_blank">
                <AiOutlineTwitter className='social-icon'/>
            </Link>

            <Link href='www.linkedin.com' target="_blank">
                <FaLinkedinIn className='social-icon'/>
            </Link>

            <Link href='www.youtube.com' target="_blank">
                <AiFillYoutube className='social-icon'/>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Contactarea
