import Entry from "@/components/Entry";
import styles from "./index.module.css";

export default function VGT() {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Videogame Talk</h1>
      <div className={styles.entries}>
        <Entry
          image={"/2024Games/AstrosPlayroom.png"}
          link={"/vgt/2024GR"}
          title={"2024 Games Ranked"}
          date={"12/31/2024"}
        />
        <Entry
          image={"/DKCReturns.png"}
          link={"/vgt/DKCReview"}
          title={"Donkey Kong Country Returns Review"}
          date={"3/16/2025"}
        />
        <Entry
          image={"/2024Games/Neva.png"}
          link={"vgt/2025GR"}
          title={"2025 Games Ranked"}
          date={"9/27/2025"}
        />
      </div>
    </div>
  );
}
