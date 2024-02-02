'use client'
import { useAppDispatch, useAppSelector, useAppStore } from "@/Redux/hooks";
import Sidepane from "@/components/sidepane/Sidepane";
import styles from "./page.module.css";
import BottomPane from "@/components/bottomPane/BottomPane";

function page() {
  let types = "select";

  return (
    <div className={styles.container}>
      <Sidepane />
      <BottomPane />
      <div className={styles.cont2}>
        <div className={styles.head1}>Daily Quiz</div>

        {/* Type:Select */}
        {types === "select" && (
          <div>
            <div className={styles.qno}>Ques no:</div>
            <div className={styles.head2}>
              Select the smallest number from the given options.
            </div>
            <center>
              <form>
                <input
                  className={styles.inpRadio}
                  type="radio"
                  id="age1"
                  name="age"
                  value="25"
                />
                <label className={styles.label}>A. 25</label>
                <br />
                <input
                  className={styles.inpRadio}
                  type="radio"
                  id="age1"
                  name="age"
                  value="55"
                />
                <label className={styles.label}>B. 55</label>
                <br />
                <input
                  className={styles.inpRadio}
                  type="radio"
                  id="age1"
                  name="age"
                  value="15"
                />
                <label className={styles.label}>C. 15</label>
                <br />
                <input
                  className={styles.inpRadio}
                  type="radio"
                  id="age1"
                  name="age"
                  value="65"
                />
                <label className={styles.label}>D. 65</label>
                <br />
                <br />
                <input
                  className={styles.saveBtn}
                  type="submit"
                  value="Submit"
                />
              </form>
            </center>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
