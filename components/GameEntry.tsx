"use client";
import Image from "next/image";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styles from "@/styles/gameEntry.module.css";
import { ReactNode } from "react";
import { GameMeta } from "@/lib/game";

type GameEntryProps = {
  meta: GameMeta;
  children: ReactNode;
};

export default function GameEntry({ meta, children }: GameEntryProps) {
  return (
    <section className={styles.entry}>
      <div className={styles.numbered}>
        <div className={styles.number}>{meta.rank}</div>
      </div>
      <h1>
        {meta.title} • {meta.date}
      </h1>
      <Image
        src={meta.image}
        className={styles.hero}
        width={600}
        height={400}
        alt={meta.title}
        priority
      />
      <Accordion className={styles.accordion}>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          <Typography component="span">Read More</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <hr className={styles.readmore} />
          <Typography component="div" className={styles.typography}>
            {children}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
