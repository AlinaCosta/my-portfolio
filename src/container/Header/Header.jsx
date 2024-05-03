import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaSass,
  FaGithub,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SlScreenDesktop, SlScreenSmartphone } from "react-icons/sl";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${styles.header} section__padding container`} id="home">
      <div className={styles.header__info}>
        <h1 className={styles.header__h1}>Costa Alina</h1>
        <h3>Developer and designer</h3>
        <p>
          Freelancer providing services for programming and design content
          needs.
        </p>
      </div>
      <div className={styles.header__img}>
        <div className={styles.palette}>
          <div className={`${styles.box} flex__center `}>
            <FaHtml5 fontSize={70} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <IoLogoJavascript fontSize={70} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <FaCss3Alt fontSize={70} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <FaNodeJs fontSize={70} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <SlScreenDesktop fontSize={60} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <FaReact fontSize={80} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <SlScreenSmartphone fontSize={60} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <FaGitAlt fontSize={70} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <FaSass fontSize={70} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <FaBootstrap fontSize={70} color="#fff" />
          </div>
          <div className={`${styles.box} flex__center `}>
            <FaFigma fontSize={60} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
