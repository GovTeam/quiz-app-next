"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "./../../../public/assets/logo.png";
import hamburger from "./../../../public/assets/hamburger.png";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [verified, setVerified] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    try {
      axios.get("@/api/auth/logout");
      router.push("/login");
      setVerified(false);
      alert("You were logged out!");
    } catch (err) {
      console.log("Some error occured!");
      alert("Unable to logout, try after a minute.");
    }
  };

  useEffect(() => {
    const verifyToken = () => {
      try {
        axios.get("@/api/auth/verify-token");
        setVerified(true);
        console.log("fetch successful");
      } catch (error) {
        setVerified(false);
        router.push("/login");
      }
    };
    verifyToken();
  }, []);

  console.log(verified);

  if (!verified) {
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
          {/* <Link className={styles.link} href="/about">
          How is works
        </Link> */}
          <Link href="/signup">
            <button className={styles.link3}>Sign Up</button>
          </Link>
          <Link href="/login">
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
              href="/login"
              onClick={() => setOpen(!open)}
            >
              Login
            </Link>
            <Link
              className={styles.link}
              href="/signup"
              onClick={() => setOpen(!open)}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    );
  }

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
        {/* <Link className={styles.link} href="/about">
          How is works
        </Link> */}
        <button onClick={handleLogout} className={styles.link3}>
          Signout
        </button>
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
          <button className={styles.link} onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
