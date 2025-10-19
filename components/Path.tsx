import styles from "@/styles/components.module.css";

type PathProps = {
  direction?: "left" | "right" | "center";
};

export default function Path({ direction = "center" }: PathProps) {
  return (
    <div className={`${styles.sqMain} ${styles[direction]}`}>
      <div className={styles.sq1}></div>
      <div className={styles.sq2}></div>
      <div className={styles.sq3}></div>
      <div className={styles.sq4}></div>
      <div className={styles.sq5}></div>
    </div>
  );
}
