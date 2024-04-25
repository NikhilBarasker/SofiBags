import React from 'react'
import "../App2.css"
import Client7 from "../Photoes/Client7.png";
import Client1 from "../Photoes/Client1.png";
import Client3 from "../Photoes/Client3.png";
import Client4 from "../Photoes/Client4.png";
import Client5 from "../Photoes/Client5.png";
import Client6 from "../Photoes/Client6.png";
import Client8 from "../Photoes/Client8.png";
import Client9 from "../Photoes/Client9.png";
import Client01 from "../Photoes/Client01.png";
import Client11 from "../Photoes/Client11.png";

export default function Client2() {
  return (
    <div>
      <h1 className="hd" id="clienthd">
        Our Clients
      </h1>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={Client1} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client01} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client3} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client4} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client5} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client6} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client7} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client8} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client9} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client7} height="150" width="150" alt="" />
          </div>
          <div className="slide">
            <img src={Client11} height="150" width="150" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
