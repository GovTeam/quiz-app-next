import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import balloon from "./../../../public/assets/balloon.png";
import Link from "next/link";

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <Image src={balloon} alt="img" className={styles.img1} />
      </div>
      <div className={styles.col2}>
        <div className={styles.card}>
          <div className={styles.head1}>Login to your account</div>
          <label className={styles.input}>Email</label>
          <br />
          <input placeholder="Enter your Email" className={styles.inpEmail} />
          <br />
          <label className={styles.input}>Password</label>
          <br />
          <input
            placeholder="Enter your Password"
            className={styles.inpEmail}
          />
          <center>
            <Link href="/">
              <button className={styles.loginBtn}>Login</button>
            </Link>
          </center>

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
