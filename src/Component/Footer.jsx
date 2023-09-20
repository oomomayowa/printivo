import React from 'react'
import image from '../assets/tchu.svg'
import image2 from '../assets/forb.svg'
import image3 from '../assets/tech.png'
import image4 from '../assets/bal.svg'
import image5 from '../assets/cnn.svg'
import image9 from '../assets/payment.png'
import image8 from '../assets/ship.png'

import { BiLogoInstagram,BiLogoTwitter } from "react-icons/bi";
import{FiFacebook,FiLinkedin}from "react-icons/fi"


function Footer() {
  return (
    <>
     <div
        style={{
          backgroundColor: "rgb(247,246,244)",
          paddingTop: "4%",
          paddingBottom: "4%",
        }}
      >
        <h3 style={{ margin: "3%", color: "rgb(68,121,164)" }}>
          Our amazing work got noticed by:
        </h3>
        <img src={image} alt="" style={{ marginLeft: "1%" }} />
        <img src={image2} alt="" style={{ marginLeft: "5%" }} />
        <img src={image3} alt="" style={{ marginLeft: "8%" }} />
        <img src={image4} alt="" style={{ marginLeft: "9%" }} />
        <img src={image5} alt="" style={{ marginLeft: "12%" }} />
        <div>
          <a href="" style={{ marginLeft: "3%" }}>
            Read the article here
          </a>
          <a href="" style={{ marginLeft: "8%" }}>
            Read the article here
          </a>
          <a href="" style={{ marginLeft: "6%" }}>
            Read the article here
          </a>
          <a href="" style={{ marginLeft: "6%" }}>
            Read the article here
          </a>
          <a href="" style={{ marginLeft: "6%" }}>
            Read the article here
          </a>
        </div>
      </div>

     
    <div style={{backgroundColor:'rgb(56,74,98)',paddingBottom:'14%',paddingTop:'2%',color:'white',paddingRight:'9%'}}>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col">
            <ul style={{listStyleType:'none'}}>
            <h5 class="py-3 fs-10 fw-bold">Printivo</h5>
              <li class="py-2 fs-10 fw-bold">About Us</li>
              <li class="py-2 fs-10 fw-bold">Contact</li>
              <li class="py-2 fs-10 fw-bold">Track Order</li>
              <li class="py-2 fs-10 fw-bold">Printivo Promise</li>
              <li class="py-2 fs-10 fw-bold">Printivo Blog</li>
              <li class="py-2 fs-10 fw-bold">Career</li>

            </ul>
          </div>
          <div class="col">
            <ul style={{listStyleType:'none'}}>
            <h5 class="py-3 fs-10 fw-bold">Help and Information</h5>
              <li class="py-2 fs-10 fw-bold" >Paper Quality</li>
              <li class="py-2 fs-10 fw-bold">Privacy Policy</li>
              <li class="py-2 fs-10 fw-bold">Terms and Conditions</li>
              <li class="py-2 fs-10 fw-bold">Font Licenses</li>
              <li class="py-3 fs-10 fw-bold">Shipping and Delivery</li>

            </ul>
          </div>
          <div class="col">
            <ul style={{listStyleType:'none'}}>
            <h5 class="py-3 fs-10 fw-bold">Make Money</h5>
              <li class="py-2 fs-10 fw-bold">Refer a friend & earn N1,000</li>
              <li class="py-2 fs-10 fw-bold">Become a Reseller</li>
              <li class="py-2 fs-10 fw-bold">Sell your Designs</li>
              <li class="py-2 fs-10 fw-bold">Merch Store</li>

            </ul>
          </div>
          <div class="col">
            <ul style={{listStyleType:'none'}}>
              <h5 class="py-3 fs-10 fw-bold">Follow Us</h5>
              <i class="fa-brands fa-facebook" style={{fontSize:'25px',margin:'1%'}}></i><i class="fa-brands fa-twitter" style={{fontSize:'25px',margin:'1%'}}></i><i class="fa-brands fa-linkedin" style={{fontSize:'25px',margin:'1%'}}></i> <i class="fa-brands fa-instagram"style={{fontSize:'25px',margin:'1%'}}></i>
              <li class="py-2"><FiFacebook style={{fontSize:'25px',margin:'1%'}}/>  <BiLogoTwitter style={{fontSize:'25px',margin:'1%'}}/>   <FiLinkedin style={{fontSize:'25px',margin:'1%'}}/>   <BiLogoInstagram style={{fontSize:'25px',margin:'1%'}}/></li>
              <li class="py-2 fs-10 fw-bold">Accepted Payments</li>
              <li class="py-2"><img src={image9} alt="" width={200}/></li>
              <li class="py-2 fs-10 fw-bold">Delivery</li>
              <li class="py-2"><img src={image8} alt="" width={200}/></li>

              
            </ul>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:'rgb(203,202,200)',textAlign:'center',padding:'2%'}}>
        <small>Copyright © 2023 Printivo. All rights reserved.</small>
      </div>
    </>
  )
}

export default Footer