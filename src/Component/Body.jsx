import React from 'react'
import { BsCartCheckFill } from 'react-icons/Bs'
import { FaSearch } from 'react-icons/fa'


function Body() {
  return (
    <>
    <section
        style={{ backgroundColor: "rgb(236,232,217)", marginTop: "-50px" }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "50px",
            
          }}
        >
          <img style={{ width: "14%" }} src="./src/assets/print.svg" alt="" />
          <ul
            style={{
              color: "rgb(42,61,72)",
              display: "flex",
              fontSize: "14px",
              listStyle: "none",
              listStyleType: "none",
              marginLeft: "20%",
              marginTop: "5px",
            }}
          >
            <li style={{ marginRight: "20px" }}>
              <a href="#" style={{ textDecorationLine: "none" }}>
                All Product
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a href="#" style={{ textDecorationLine: "none" }}>
                Become A Reseller
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a href="#" style={{ textDecorationLine: "none" }}>
                Merch Store{" "}
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a href="#" style={{ textDecorationLine: "none" }}>
                Marketplace{" "}
              </a>
            </li>
          </ul>
          <div
            style={{
              borderRadius: "15px",
              fontSize: "15px",
              marginLeft: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "transparent",
                color: "red",
                border: "0",
              }}
            >
              Sign In
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "10px",
                color: "rgb(43,61,73)",
                marginLeft: "10px",
              }}
            >
              Create Account
            </button>
            <BsCartCheckFill />
          </div>
        </nav>
        <div style={{ marginTop: "50px" }}>
          <h1
            style={{
              fontSize: "3rem",
              color: "rgb(43,61,73)",
              marginBottom: "-20px",
            }}
          >
            Quality Prints
          </h1>
          <h3
            style={{
              fontSize: "1.3rem",
              paddingLeft: "10px",
              color: "rgb(43,61,73)",
              marginTop: "20px",
            }}
          >
            shipped to your doorstep
          </h3>
        </div>
        <div style={{ marginTop: "35px" }}>
          <p style={{ color: "rgb(112,156,191)", fontSize: "1.2rem" }}>
            what would you like to print today?
          </p>
          <input
            type="search"
            placeholder="search for business cards, t-shirts, mugs,etc "
            style={{
              width: "50%",
              height: "90px",
              fontSize: "large",
              color: "rgb(43,61,73)",
              border: "none",
            }}
          />
          <FaSearch
            style={{
              position: "absolute",
              left: "500px",
              bottom: "20%",
              width: "90px",
            }}
          />
          <br />
          <button
            style={{
              backgroundColor: "rgb(239, 22, 94)",
              fontSize: "13.5px",
              color: "white",
              height: "50px",
              border: "none",
              borderRadius: "15px",
              width: "100px",
            }}
          >
            send mes...
          </button>
          <img
            src="./src/assets/Card3_n9kqin (1).png"
            alt=""
            style={{
              position: "absolute",
              left: "782px",
              top: "230px",
              width: "32%",
            }}
          />
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{
            height: "100px",
            backgroundColor: "rgb(243,177,205)",
            paddingTop: "22px",
          }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h3 style={{ fontWeight: "bold" }}>
                stickers promo{" "}
                <span style={{ textDecoration: "underline", fontSize: "15px" }}>
                  {" "}
                  shop now
                </span>
              </h3>
            </div>
            <div className="carousel-item">
              <h3 style={{ fontWeight: "bold" }}>
                10% off brochure and flyer{" "}
                <span style={{ textDecoration: "underline", fontSize: "15px" }}>
                  shop now
                </span>
              </h3>
            </div>
            <div className="carousel-item">
              <h3 style={{ fontWeight: "bold" }}>
                stickers promo
                <span style={{ textDecoration: "underline", fontSize: "15px" }}>
                  {" "}
                  shop now
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Body