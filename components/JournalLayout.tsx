import Image from "next/image";
import BackButton from "@/components/BackButton";
import ScrollToTop from "@/components/ScrollToTop";
import Warning from "@/components/Warning";
import styles from "@/styles/journalEntry.module.css";
import { ReactNode } from "react";
import RankRail, { RailSection } from "./RankRail";

export interface JournalLayoutProps {
  title: string;
  heroSrc: string;
  heroAlt: string;
  warningText?: string;
  signature: string;
  railSections?: RailSection[];
  children: ReactNode;
}

export default function JournalLayout({
  title,
  heroSrc,
  heroAlt,
  warningText,
  signature,
  railSections,
  children,
}: JournalLayoutProps) {
  return (
    <div className={styles.main}>
      <div className={`${styles.inner} ${railSections ? styles.innerRow : ""}`}>
        {railSections && <RankRail sections={railSections} />}
        <div className={styles.content}>
          <BackButton />
          <h1 className={styles.title}>{title}</h1>
          <Image
            src={heroSrc}
            alt={heroAlt}
            width={800}
            height={500}
            className={styles.hero}
            priority
          />
          {warningText && <Warning text={warningText} />}
          {children}
          <p className={styles.sig}>{signature}</p>
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}
