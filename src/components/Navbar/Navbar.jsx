import React, {useState} from "react";
import {getImageUrl} from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar=() => {
    const[menuOpen, setMenuOpen] = React.useState(false);
    
    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Comet Busters</a>
        <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

    
        <ul  className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#mobiles">Mobiles</a></li>
            <li><a href="#projects">Beauty</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;