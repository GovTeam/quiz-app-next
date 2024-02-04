"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import balloon from "./../../../public/assets/balloon.png";
import Link from "next/link";

function page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      router.push("/");
    } catch (error) {
      alert("login failed");
      console.error("Login failed", error.response.data);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <Image src={balloon} alt="img" className={styles.img1} />
      </div>
      <div className={styles.col2}>
        <div className={styles.card}>
          <div className={styles.head1}>Login to your account</div>
          <form onSubmit={handleSubmit}>
            <label className={styles.input}>Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className={styles.inpEmail}
              value={email}
              onChange={handleEmailChange}
              required
            />
            <br />
            <label type="password" className={styles.input}>
              Password
            </label>
            <br />
            <input
              placeholder="Enter your Password"
              className={styles.inpEmail}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <center>
              {/* <Link href="/"> */}
              <button className={styles.loginBtn} type="submit">
                Login
              </button>
              {/* </Link> */}
            </center>
          </form>

          <div className={styles.txt}>
            Don't have a account?{" "}
            <Link href="/signup">
              <span className={styles.txt2}>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
