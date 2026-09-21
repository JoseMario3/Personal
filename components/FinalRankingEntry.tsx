import Image from "next/image";
import styles from "@/styles/finalRankingEntry.module.css";

export interface TopTenMeta {
  rank: number;
  title: string;
  year: string | number;
  image: string;
  note: string;
}

export interface CompilationMeta {
  title: string;
  year: string | number;
  image: string;
}

type TopTenEntryProps = {
  meta: TopTenMeta;
};

type CompilationEntryProps = {
  meta: CompilationMeta;
};

export function TopTenEntry({ meta }: TopTenEntryProps) {
  return (
    <div id={`final-${meta.rank}`} className={styles.row}>
      <span className={styles.rank}>{meta.rank}</span>
      <Image
        src={meta.image}
        width={300}
        height={200}
        alt={meta.title}
        className={styles.thumb}
      />
      <div className={styles.info}>
        <div className={styles.titleLine}>
          <span className={styles.title}>{meta.title}</span>
          <span className={styles.year}>{meta.year}</span>
        </div>
        <p className={styles.note}>{meta.note}</p>
      </div>
    </div>
  );
}

export function CompilationEntry({ meta }: CompilationEntryProps) {
  return (
    <div id={`final-${meta.title}`} className={styles.row}>
      <Image
        src={meta.image}
        width={300}
        height={200}
        alt={meta.title}
        className={styles.thumb}
      />
      <div className={styles.info}>
        <div className={styles.titleLine}>
          <span className={styles.title}>{meta.title}</span>
          <span className={styles.year}>{meta.year}</span>
        </div>
      </div>
    </div>
  );
}
