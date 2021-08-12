import React, { useState } from 'react'
import Logo from './img/foodwhat.png';
import { MdRestaurantMenu } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";

function Navigation() {
  const dropdownMenu = () => {
    const menu = document.querySelector('.nav-links');
    const wrap = document.querySelector('.menu-btn');
    const headerWrap = document.querySelector('.header-wrapper');

    wrap.classList.toggle('active');
    headerWrap.classList.toggle('active');
    menu.classList.toggle('show-menu');
  }

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className="wrapper">
        <div className="header-wrapper">
          <a href="#home">
            <img src={Logo} alt="foodwhat loho" className="logo" />
          </a>

          <button className="menu-btn" onClick={() => {
            dropdownMenu();
            setShowMenu(!showMenu);
          }}>
            {showMenu ? <MdRestaurantMenu /> : <FaHamburger />}
          </button>
        </div>


        <div className="nav-links">
          <ul>
            <li><a href="#landing" onClick={() => { dropdownMenu(); setShowMenu(!showMenu); }}>Home
              <div className="underline"></div>
            </a></li>
            <li><a href="#whoweare" onClick={() => { dropdownMenu(); setShowMenu(!showMenu); }}>Who We Are
              <div className="underline"></div>
            </a>
            </li>
            <li><a href="#ourmenu" onClick={() => { dropdownMenu(); setShowMenu(!showMenu); }}>Our Menu
              <div className="underline"></div>
            </a></li>
            <li><a href="#newsletter" onClick={() => { dropdownMenu(); setShowMenu(!showMenu); }}>Newsletter
              <div className="underline"></div>
            </a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;