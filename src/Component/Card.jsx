import React from 'react'
import image from `../assets/1440201227_two-sided-business-cards-by-printivo (2).png`
import image2 from `../assets/girl.png`
import image3 from `../assets/1656003107_social-media--15 (1).png`
import image4 from `../assets/1661456358_social-media--16.png`
import image5 from `../assets/1439790190_postcard.jpg`
import image6 from `../assets/banner1.png`
import image7 from `../assets/1572259118_product-5-(1).png `
import image8 from `../assets/1473167305_trifold-brochure-printing.png `
import image9 from `../assets/namme.png `
import image10 from `../assets/1485151940_White-tshirt (1).png `
import image11 from `../assets/1572258123_product-3-(1).png `
import image12 from `../assets/good.jpeg `
import image13 from `../assets/evelop.png `
import image14 from `../assets/tick.png `


function Card() {
  return (
    <>
     <section>
        <h1 style={{ fontSize: "30px", margin: "2%", color: "rgb(56,74,98)" }}>
          Popular Products{" "}
          <span
            style={{
              color: "rgb(243,177,205)",
              marginLeft: "60%",
              fontSize: "19px",
            }}
          >
            {" "}
            see all product
          </span>
        </h1>

        <div className="card-group">
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginLeft: "2%", marginBottom: "2%" }}
          >
            <img
              src={image}
              className="card-img-top "
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">TWO SIDED BUSINESS CARD</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #9,700<sub> per 100</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                browse two sided business card
              </button>
            </div>
          </div>
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image2}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">A5 FLYERS (ONE-SIDED)</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #16,500<sub> per 100</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse A5 flyers (one-sided)
              </button>
            </div>
          </div>
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image3}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">Round Stickers (3.5" Diameter)</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #10,900<sub> per 100</sub>
              </p>{" "}
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                browse Round Stickers (3.5" Diameter)
              </button>
            </div>
          </div>
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image4}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">SIMPLE MUGS</h6>
              <small>STATING AT</small>
              <p className="card-text">
                #3,000<sub> per 1</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse simple mugs
              </button>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginLeft: "2%", marginBottom: "2%" }}
          >
            <img
              src={image5}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">Postcards (A6)</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #14,600<sub> per 50</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse Postcards(A6)
              </button>
            </div>
          </div>
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image6}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">Roll Up Banners (Big Base)</h6>
              <small>STATING AT</small>
              <p className="card-text">
                #35,200<sub> per 1</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                browse roll up banners (big base)
              </button>
            </div>
          </div>
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image7}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">A2 Posters</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #45,500<sub> per 100</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse A2 Posters
              </button>
            </div>
          </div>
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image8}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">Trifold Brochures</h6>
              <small>STATING AT</small>
              <p className="card-text">
                #34,400<sub> per 100</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse trifold Brochures
              </button>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginLeft: "2%", marginBottom: "2%" }}
          >
            <img
              src={image9}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">Landscape ID Cards</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #2000<sub> per 1</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse landscape ID Cards
              </button>
            </div>
          </div>
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image10}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">Off White T-shirts</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #3800<sub> per 1</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse off white t-shirt
              </button>
            </div>
          </div>
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image11}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">A4 Branded Paper Bags</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #67000<sub> per 100</sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                browse a4 branded paper bags
              </button>
            </div>
          </div>
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image12}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "55%" }}
            />
            <div className="card-body">
              <h6 className="card-title">A4 Courier Bags</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #17,600<sub> per 100 </sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse A4 Courier Bags
              </button>
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: "23px", margin: "2%", color: "rgb(56,74,98)" }}>
          Popular Categories{" "}
          <a
            href="#"
            style={{
              color: "rgb(243,177,205)",
              marginLeft: "65%",
              fontSize: "19px",
              textDecorationLine: "none",
            }}
          >
            See All Categories{" "}
          </a>
        </h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image13}
              className="card-img-top"
              alt="..."
              style={{ width: "105%" }}
            />
            <div className="card-body">
              <h6 className="card-title">Greeting Cards</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #19,000<sub> per 50 </sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse Greeting Cards
              </button>
            </div>
          </div>

          <div
            className="card shadow overflow-hidden"
            style={{ marginRight: "2%", marginBottom: "2%" }}
          >
            <img
              src={image14}
              className="card-img-top"
              alt="..."
              style={{ width: "105%", height: "100%" }}
            />
            <div className="card-body">
              <h6 className="card-title">Stickers</h6>
              <small>STATING AT </small>
              <p className="card-text">
                #5,500<sub> per 75 </sub>
              </p>
              <button
                style={{
                  backgroundColor: "rgb(215,127,129)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  height: "30%",
                }}
              >
                browse Greeting Cards
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card 