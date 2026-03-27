import Image from "next/image";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Good Morning!</h1>
      <div className={styles.intro}>
        <h2>Thanks for stopping by!</h2>
        <Image
          className={styles.hero}
          alt="something idk"
          src={`/jose.png`}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
