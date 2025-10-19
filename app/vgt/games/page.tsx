import ScrollToTop from "@/components/ScrollToTop";
import BackButton from "@/components/BackButton";
import styles from "./index.module.css";
import Image from "next/image";

export default function games() {
  const gameArray = ["one", "two", "three"];

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <BackButton />
        <h1></h1>
        <Image alt={"hero"} src={"/monado.jpeg"} height={300} width={300} />
        {gameArray.map((game, i) => {
          return <h2 key={i}>{game}</h2>;
        })}
      </div>
    </div>
  );
}
