import Entry from "@/components/Entry";
import styles from "./index.module.css";

export default function VGT() {
  return (
    <div className={styles.body}>
      <div className={styles.layout}>
        <Entry
          className={`${styles.entry} ${styles.left}`}
          image={"/JF.png"}
          link={"/vgt/2024GR"}
          title={"2024 Games Ranked"}
          date={"12/31/2024"}
        />
        <div className={styles.hero}>
          <h1 className={styles.title}>Videogame Talk</h1>
        </div>
        <Entry
          className={`${styles.entry} ${styles.right}`}
          image={"/JF.png"}
          link={"/vgt/DKCReview"}
          title={"Donkey Kong Country Returns Review"}
          date={"3/16/2025"}
        />
        <Entry
          className={`${styles.entry} ${styles.bottom}`}
          image={"/JF.png"}
          link={"/vgt/2025GR"}
          title={"2025 Games Ranked"}
          date={"9/27/2025"}
        />
      </div>
    </div>
  );
}
