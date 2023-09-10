import React from "react";

import Button from "components/button";

import style from "./navbar.module.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.titleDiv}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-65}
          duration={500}
        >
          Demo
        </Link>
      </div>
      <div className={style.flex}>
        <div className={style.navMenuWrapper}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact-us"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </div>
        <Button title={"Log in"} className={style.btnLogin} />
      </div>
    </nav>
  );
};

export default Navbar;
