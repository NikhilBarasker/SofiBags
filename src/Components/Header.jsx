import React, { useState } from "react";
import { Link } from "react-router-dom";
import SofiLogo from "../SofiLogo.png";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import '../App.css'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => {
  setShowMenu(!showMenu);
}
  return (
    <div className="navlist">
      <Link to="/">
        <div>
          <img src={SofiLogo} alt="Sofi Logo" />
        </div>
      </Link>
      <div className="wraper">
        <div>
          <nav>
            <ul
              className={showMenu ? "nav-links mobile-nav-list" : "nav-links"}
            >
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
              {/* <li>
              <Link to="/about">ABOUT US</Link>
            </li> */}
              <li>
                <Link to="/Products">
                  PRODUCTS
                  <ul className="drop-menu">
                    <li>
                      <Link to="/schoolbags">School Bags</Link>
                    </li>
                    <li>
                      <Link to="/collagebags">College Bags</Link>
                    </li>
                    <li>
                      <Link to="/tifinbags">Tiffin Bags</Link>
                    </li>
                    <li>
                      <Link to="/trolleybags">Trolley Bags</Link>
                    </li>
                    <li>
                      <Link to="/walet">Men's Wallet</Link>
                    </li>
                  </ul>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="search">
          <input placeholder="Search..." type="text" />
          <button type="submit" onClick={() => handleClick()}>
            <FaSearch />
          </button>
        </div>
        <div>
          <Link>
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                class="cursor-pointer fill-[#333] inline"
                viewBox="0 0 64 64"
              >
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"
                />
              </svg>
              <span
              >
                1
              </span>
            </span>
          </Link>
        </div>
        <div>
          <Link>
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                class="cursor-pointer fill-[#333] inline"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"
                ></path>
              </svg><sup></sup>
              <span className="uper">1</span>
            </span>
          </Link>
        </div>
        <div className="mobile-menu-icon">
          <a href="#" onClick={() => toggle()}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </div>
  );
}
