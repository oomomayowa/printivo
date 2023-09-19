import React from 'react'
import image17 from `../assets/logos.png `

function Logo() {
  return (
    <>
         <div>
        <h2
          style={{
            fontSize: "25px",
            paddingLeft: "2%",
            color: "rgb(80,102,163)",
          }}
        >
          Nigeria’s No. 1 online print shop 👑
        </h2>
        <h3
          style={{
            fontSize: "1.2rem",
            paddingRight: "30%",
            paddingLeft: "2%",
            color: "rgb(80,102,163)",
          }}
        >
          Our print services and solutions are trusted by these brands and over
          15,000 other businesses in Nigeria.
        </h3>
        <br />
        <img
          src={image17}
          alt=""
          style={{ width: "90%", paddingLeft: "2%" }}
        />
      </div>
     
    </>
  )
}

export default Logo