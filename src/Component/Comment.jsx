import React from 'react'
import image25 from '../assets/AFFORD.svg'
import image26 from '../assets/HUND.svg'
import image27 from '../assets/fast.svg'


import { AiFillTwitterCircle } from "react-icons/ai";


function Comment() {
  return (
    <>
        <div
    style={{
      backgroundColor: "rgb(237,246,253)",
      marginTop: "10%",
      paddingTop: "5%",
      paddingBottom: "6%",
      paddingLeft: "2%",
    }}
  >
    <h1 style={{ fontSize: "30px", paddingBottom: "2%" }}>
      What Customers Say About Us 🙌🏾
    </h1>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <div className="card-body p-5">
            <h5 className="card-title" style={{ fontSize: "16px" }}>
            {/* <i class="fa-brands fa-twitter" style={{
                  color: "blue",
                  marginRight: "3%",
                  fontSize: "19px",
                }}></i> */}
              <AiFillTwitterCircle
                style={{
                  color: "blue",
                  marginRight: "3%",
                  fontSize: "19px",
                }}
              />
              {" "}
              Amina Ebele{" "}
              <span style={{ color: "blue" }}>@DeliciousAminae</span>
            </h5>
            <br />
            <p className="card-text" style={{ fontSize: "13px" }}>
              I am now the unofficial{" "}
              <span style={{ color: "blue" }}>@Printivo</span> ambassador.
              What these guys just pulled to ensure I got my menu cards
              today is stunning!
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body p-5">
            <h5 className="card-title" style={{ fontSize: "16px" }}>
            {/* <i class="fa-brands fa-twitter" style={{
                  color: "blue",
                  marginRight: "3%",
                  fontSize: "19px",
                }}></i> */}
              
              <AiFillTwitterCircle
                style={{
                  color: "blue",
                  marginRight: "3%",
                  fontSize: "19px",
                }}
              />
              Oluwatosin <span style={{ color: "blue" }}>@tosingirlfx</span>
            </h5>
            <br />
            <p className="card-text" style={{ fontSize: "13px" }}>
              <span style={{ color: "blue" }}>@Printivo</span> delivered my
              mugs in 24hrs. Thank you so much! It's nice doing business
              with you. More to come.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body p-5">
            <h5 className="card-title" style={{ fontSize: "16px" }}>
            {/* <i class="fa-brands fa-twitter" style={{
                  color: "blue",
                  marginRight: "3%",
                  fontSize: "19px",
                }}></i>
               */}
              <AiFillTwitterCircle
                style={{
                  color: "blue",
                  marginRight: "3%",
                  fontSize: "19px",
                }}
              />
              Oluwatosin <span style={{ color: "blue" }}>@olgablark</span>
            </h5>
            <br />
            <p className="card-text" style={{ fontSize: "13px" }}>
              These guys <span style={{ color: "blue" }}>@Printivo</span>{" "}
              are really awesome and affordable. Excellent customer service
              and delivery too. Thank you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style={{ padding: "5% 1% 5% 1%" }}>
    <h2>You can count on us for:</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div
          className="card h-100"
          style={{
            border: "none",
            padding: "6%",
            color: "rgb(103,127,161)",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <img src={image25} alt="" />
              Affordable Services
            </h5>
            <h6 className="card-text">
              Your order gets to you within 3-7 working days via DHL or our
              very own Printivo Direct.
            </h6>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card h-100"
          style={{
            border: "none",
            padding: "6%",
            color: "rgb(103,127,161)",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <img src={image26} alt="" />
              100% Top Quality
            </h5>
            <h6 className="card-text">
              Only the finest materials, machines and people will be
              involved in fulfilling your order.
            </h6>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card h-100"
          style={{
            border: "none",
            padding: "4%",
            color: "rgb(103,127,161)",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <img src={image27} alt="" /> Fast Turnaround
              Within Days
            </h5>
            <h6 className="card-text">
              All products are adequately priced to ensure you get value for
              your money at all times.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Comment