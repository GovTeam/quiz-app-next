"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import StoreProvider from "./StoreProvider";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Auth App",
//   description: "A learning purpose app",
// };

export default function RootLayout({ children }) {
  const [verified, setVerified] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const verifyToken = () => {
      try {
        axios.get("/api/auth/verify-token");
        setVerified(true);
      } catch (error) {
        setVerified(false);
        router.push("/admin/login");
      }
    };
    verifyToken();
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
