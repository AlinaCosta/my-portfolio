import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import styles from "./Navbar.module.css";
import images from "../../utils/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={images.logo2} alt="logo" />
      </div>
      <ul className={styles.navbar__links}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.mobileMenu}>
        <HiOutlineMenu fontSize={30} onClick={() => setToggleMenu(true)} />
        {/* i am showing this div only if the toggleMenu in set to true */}
        {toggleMenu && (
          <div
            className={`${styles.mobileMenu__overlay} flex__center slide-bottom`}
          >
            <HiOutlineX
              className={styles.overlay__close}
              onClick={() => setToggleMenu(false)}
            />
            <ul className={styles.mobileMenu__links}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
