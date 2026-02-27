import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styles from "@/styles/components.module.css";

type EntrySectionProps = {
  number: number;
  title: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  paragraphs: React.ReactNode[];
};

export default function EntrySection({
  number,
  title,
  date,
  imageUrl,
  imageAlt,
  paragraphs,
}: EntrySectionProps) {
  return (
    <section className={styles.entry}>
      <div className={styles.numbered}>
        <div className={styles.number}>{number}</div>
      </div>
      <h1>
        {title} • {date}
      </h1>
      <Image
        src={imageUrl}
        className={styles.hero}
        width={600}
        height={400}
        alt={imageAlt}
      />
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel-content"
        >
          <Typography component="span">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <hr className={styles.readmore} />
          {paragraphs.map((content, idx) => (
            <Typography key={idx} className={styles.typography}>
              {content}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

// [
//   "PluckySquire.png",
//   "AstrosPlayroom.png",
//   "Portal.png",
//   "Brothership.png",
//   "MarioParty.png",
//   "ShovelKnight.png",
//   "Cocoon.png",
//   "AnimalWell.png",
//   "Neva.png",
//   "Remake.png",
//   "BaldursGate.png",
//   "RhythmHeaven.png",
//   "Portal2.png",
//   "PizzaTower.png",
//   "BlackMyth.png",
//   "PaperMario.png",
//   "Yakuza.png",
//   "Balala.png",
//   "Bloodborne.png",
//   "AstroBot.png",
//   "Rebirth.png"
// ]
