import styles from "@/styles/entry.module.css";
import Link from "next/link";
import Image from "next/image";

type EntryProps = {
  image: string;
  title: string;
  date: string;
  link: string;
};

export default function Entry({ image, title, date, link }: EntryProps) {
  return (
    <Link href={link} className={styles.entry}>
      <Image
        src={image}
        className={styles.image}
        width="200"
        height="200"
        alt={title}
      ></Image>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.date}>{date}</h4>
      </div>
    </Link>
  );
}
