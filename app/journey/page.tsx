import Image from "next/image";
import styles from "./index.module.css";
import Path from "@/components/Path";

export default function Home() {
  return (
    <div className={styles.page}>
      <Path direction="right" />
    </div>
  );
}
