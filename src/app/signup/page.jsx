'use client'
import React, {useState} from "react";
import styles from "./page.module.css";
import Image from "next/image";
import balloon from "./../../../public/assets/balloon.png";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function page() {
  const {push} = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post("/api/auth/signup", {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }).then((res) => {
      setLoading(false);
      toast.success('Sign Up successful! Kindly login', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        push('/login');
      console.log(res);
    }).catch((err) => {
      setLoading(false);
      toast.error('User with the email already exists', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log(err);
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <Image src={balloon} alt="img" className={styles.img1} />
      </div>
      <div className={styles.col2}>
        <form onSubmit={handleSubmit} className={styles.card}>
          <div className={styles.head1}>Create your free account</div>
          <label className={styles.input}>Name</label>
          <br />
          <input
            placeholder="Enter your full Name here"
            name = "name"
            className={styles.inpEmail}
          />
          <br />
          <label className={styles.input}>Email</label>
          <br />
          <input name="email" placeholder="Enter your Email" className={styles.inpEmail} />
          <br />
          <label className={styles.input}>Password</label>
          <br />
          <input
            name="password"
            placeholder="Enter your Password"
            className={styles.inpEmail}
          />
          <center>
              <input type="submit" disabled={loading} value={loading? "Loading...": "Sign Up"} className={styles.loginBtn} />
          </center>

          <div className={styles.txt}>
            Already have an account?{" "}
            <Link href="/login">
              <span className={styles.txt2}>Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
