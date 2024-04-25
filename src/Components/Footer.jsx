import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { GiFactory } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div>
          <div>
            <h3 className="footerhd">Contact Info</h3>
          </div>
          <ul>
            <li className="footerInfo">
              <div>
                <CiLocationOn />
              </div>
              <div>Ganijipeth, Ganesh Chowk, Nagpur-18</div>
            </li>
            <li className="footerInfo">
              <div>
                <GiFactory />
              </div>
              <div>Ganjipetth Road, Bhaldarpura, Nagpur-18</div>
            </li>
            <li className="footerInfo">
              <div>
                <MdEmail />
              </div>
              <div>info.sofibags@gmail.com <br /></div>
            </li>
          </ul>
        </div>
        <div className="footernav">
          <div>
            <h3 id="hdfooter" className="footerhd">
              Important Links
            </h3>
          </div>
          <div>
            <nav className="footerln">
              <div>
                <Link to="/">HOME</Link>
              </div>
              <div>
                <Link to="/about">ABOUT US</Link>
              </div>
              <div>
                <Link to="/contact">CONTACT US</Link>
              </div>
              <div>
                <Link to="/Products">PRODUCTS</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="end">
        <p id="end">Design and Developed By Royal's Webtech Pvt Ltd</p>
      </div>
    </div>
  );
}

