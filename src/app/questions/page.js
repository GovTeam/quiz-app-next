'use client'
import { useAppDispatch, useAppSelector, useAppStore } from "@/Redux/hooks";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import Link from "next/link";
import { startTest } from "@/Redux/features/statusSlice";


function page() {
  let types = "match";
  const dispatch = useAppDispatch();

  return (
    <div className="container py-6 px-10">
      <h1 className="text-4xl text-center">Instructions</h1>
      <div className="flex flex-row gap-10 justify-center py-10">
      <Card heading="9" description="Questions" />
      {/* <Card heading="15" description="Minutes" /> */}
      </div>
      <div className="flex flex-row justify-center">
      <Link onClick={()=>{dispatch(startTest())}} href="/questions/0">
       <button className={styles.saveBtn}> Start Quiz </button>
       </Link>
      </div>
    </div>
  );
}

export default page;
