"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "./../../../public/assets/logo.png";
import hamburger from "./../../../public/assets/hamburger.png";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <Image
          src={logo}
          className={styles.img}
          width={150}
          style={{ height: "auto" }}
          placeholder="blur"
          alt="Logo"
        />
      </Link>
      <div className={styles.menu}>
        <Link className={styles.link} href="/about">
          How it works
        </Link>
        <Link href="/signup">
            <button  className={styles.link3}>Sign Up</button>
          
        </Link>
        <Link  href="/login">
          <button className={styles.link2}>Login</button>
        </Link>
      </div>
      <Image
        className={styles.hamburger}
        src={hamburger}
        width={20}
        style={{ height: "auto" }}
        alt="Hamburger"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className={styles.menu2}>
          <Link
            className={styles.link}
            href="/#about"
            onClick={() => setOpen(!open)}
          >
            About
          </Link>
          <Link
            className={styles.link}
            href="/#products"
            onClick={() => setOpen(!open)}
          >
            Products
          </Link>
          <Link
            className={styles.link}
            href="/#contact"
            onClick={() => setOpen(!open)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
