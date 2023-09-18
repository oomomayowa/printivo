import React from "react";
import { FaWhatsapp } from "react-icons/fa";
function Print() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgb(247,246,244)",
          paddingTop: "15px",
          height: "70px",
          paddingLeft: "5px",
        }}
      >
        <ul
          style={{
            display: "flex",
            color: "rgb(43,61,73)",
            fontSize: "15px",
            listStyle: "none",
            listStyleType: "none",
          }}
        >
          <li style={{ marginRight: "20px" }}>
            <a href="#" style={{ textDecorationLine: "none" }}>
              Cost Calculator
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="#" style={{ textDecorationLine: "none" }}>
              Discover Store
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecorationLine: "none" }}>
              Track Orders
            </a>
          </li>
        </ul>
        <p style={{ marginLeft: "100px", fontSize: "13px" }}>
          Need Help? Call:{" "}
          <span style={{ color: "blue", fontSize: "13px" }}>
            +2348091084333
          </span>
        </p>
        <div
          style={{
            padding: "10px 20px",
            borderRadius: "15px",
            cursor: "pointer",
            fontSize: "20px",
            marginLeft: "10px",
          }}
        >
          <FaWhatsapp className="text-success fs-1 mx-5 " />
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid black",
              borderRadius: "10px",
              color: "rgb(43,61,73)",
              fontSize: "12px",
              width: "95px",
              height: "30px",
            }}
          >
            {" "}
            <span>
              <img
                src="./src/assets/flag.svg"
                alt=""
                style={{ width: "30%", paddingRight: "10px" }}
              />
            </span>
            NIGERIA
          </button>
        </div>
      </nav>

      
    </>
  );
}

export default Print;
