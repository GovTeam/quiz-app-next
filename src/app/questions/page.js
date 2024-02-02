'use client'
import { useAppDispatch, useAppSelector, useAppStore } from "@/Redux/hooks";
import Sidepane from "@/components/sidepane/Sidepane";
import styles from "./page.module.css";
import BottomPane from "@/components/bottomPane/BottomPane";

function page() {
    const store = useAppStore()

  return (
    <div className={styles.container}>
      <Sidepane />
      <BottomPane />
      page
    </div>
  );
}

export default page;
