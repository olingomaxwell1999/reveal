import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Link from 'next/link'
// import pdfFile from '../assets/THE REVEAL BROCHURE.pdf'

function Studiobedroom() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  // const downloadPdf = () => {

  //   //using javascript method to fetch the file

  //   fetch('../assets/THE REVEAL BROCHURE.pdf').then(response => {
  //     response.blob()
  //     .then(blob => {
  //       //creating the new object of pdf file
  //       const fileURL = window.URL.createObjectURL(blob)

  //       //setting various property values
  //       let alink = document.createElement('a')

  //       alink.href = fileURL

  //       alink.download = '../assets/THE REVEAL BROCHURE.pdf'

  //       alink.click()
  //     })
  //   })

  // }

  const brochure = 'https://www.thereveal.co.ke/cv.pdf'

  const handleClick = (url) => {
    console.log('This button has been clicked')

    //making the pdf a link
    const fileName = url.split("/").pop()

    //creating an anchor tag
    const aTag = document.createElement('a')

    //adding the href attribute
    aTag.href = url

    //adding the download attribute and the pdf link attribute
    aTag.setAttribute("download", fileName)

    //adding the newly created element to the body 
    document.body.appendChild(aTag)

    //activating the click functionality
    aTag.click()

    //removing the aTag after clicking
    aTag.remove()
  }

  const runHandleClick = () => {
    handleClick(brochure)
  }

  return (
    <div data-aos='fade-up' className='studiobedroom'>
        <div className="top-layer">
            <div className="side">
                <h2>one bedroom</h2>

                <p>The epitome of elegant and intuitive design,</p>

                <p>each 1 bedroom
offers an effortless blend of luxurious </p>

                <p>comfort, plenteous
space and architectural sophistication.</p>
                
            </div>
            <div className="middle-line"></div>
            <div className="side">
                <h2>studios</h2>

                <p>Nestled in nature yet connected to an</p>

                <p>inspired array of
world class amenities, The Reveal</p>

                <p>has an exquisite collection of Spacious
studios ranging from Junior Studios to Deluxe Studios</p>
            </div>
        </div>
        <div className="bottom-layer">
          <button className='btn-light' onClick={runHandleClick}>Download Brochure</button>
        </div>
    </div>
  )
}

export default Studiobedroom