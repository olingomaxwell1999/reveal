import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import Banner from '../assets/bannertwo.jpg'
import Logo from '../assets/logo.jpg'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Contactarea() {

    const [firstName,setFirstName] = useState('')
    const [secondName,setSecondName] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [message,setMessage] = useState('')

    //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        let isValidForm = handleValidation()

        const res = await fetch('/pages/api/sendgrid.js', {
            body: JSON.stringify(
                {
                    email : email,
                    firstName: firstName,
                    secondName : secondName,
                    phoneNumber : phoneNumber,
                    subject : subject,
                    message : message
                }
            ),
            headers : {
                'Content-Type': 'application/json',
            },
            method : 'POST',
        })

        const {error} = await res.json()

        if (error) {
            console.log(error)
            setShowSuccessMessage(false)
            setShowFailureMessage(true)
            setButtonText("Send")
            return
        }

        console.log(firstName, secondName, email, phoneNumber, subject, message)

        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send");
    }

    // handling validation of the form

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstName.length <= 0) {
      tempErrors["firstname"] = true;
      isValid = false;
    }
    if (secondName.length <= 0) {
      tempErrors["secondname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phoneNumber.length <= 0) {
      tempErrors["phonenumber"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

    // const handleChange = () => {
    //     console.log('I have been changed Successfully!!!!');
    // }

  return (
    <div className='contact-area'>
      <div className="contact-form-area">
        <div className="contact-form-heading">
            <h1>contact - us</h1>
        </div>

        <form className='contact-form' onSubmit={handleSubmit}>
            <div className="top-form">
                <div className="input-carrier">
                    <label htmlFor="first name" className="mb-2 italic">First Name</label>
                    <input className="mb-4 border-b-2" id="name" name="name" value={firstName} type="text" autoComplete="name" required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="last name" className="mb-2 italic">Last Name</label>
                    <input className="mb-4 border-b-2" id="name" name="name" value={secondName} type="text" autoComplete="name" required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="email" className="mb-2 italic">Email</label>
                    <input className="mb-4 border-b-2" id="name" name="name" value={email} type="email" autoComplete="name" required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="phone number" className="mb-2 italic">Phone Number</label>
                    <input className="mb-4 border-b-2" id="name" name="name" value={phoneNumber} type="tel" autoComplete="name" required />
                </div>
            </div>

            <div className="input-carrier">
                <label htmlFor="subject">Subject</label>
                <input className="mb-4 border-b-2" id="name" name="name" value={subject} type="tel" autoComplete="name" required />
            </div>

            <div className="input-carrier">
                <label htmlFor="phone number" className="mb-2 italic">Message</label>

                <textarea className='message' name="message" value={message} id="message"></textarea>
            </div>

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
