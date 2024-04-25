import React, { useEffect } from "react";
import Client2 from "./Client2.jsx";
import Swiperx from "./Swiperx.jsx";
import { useNavigate } from "react-router-dom"; 

export default function Home() {
let navigate = useNavigate();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Swiperx />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
            zIndex: 2, // Ensure the content is above the Swiper
          }}
        >
          <div>
            <h1 className="hd" id="greet">
              <div>WELCOME TO </div>
              <div style={{ color: "white" }}>SOFI BAGS</div>
            </h1>
          </div>
        </div>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "40px",
          fontFamily: "sans-serif",
          fontSize: "20px",
          fontWeight: "bold",
          color: "gray",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <li
          style={{
            color: "blue",
          }}
          onClick={navigate("/schoolbags")}
        >
          School
        </li>
        <li onClick={navigate("/collageBags")}>Collage</li>
        <li onClick={navigate("/trolley")}>Trolley</li>
        <li onClick={navigate("/tiffin")}>Tiffin</li>
        <li onClick={navigate("/office")}>Office</li>
      </ul>
      <Client2 />
    </div>
  );
}

