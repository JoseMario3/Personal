"use client";
import Image from "next/image";
import GameEntry from "@/components/GameEntry";
import { games } from "@/data/content/2026/games.meta";
import Despelote from "@/data/content/2025/despelote.mdx";

import styles from "@/styles/journalEntry.module.css";
import JournalLayout from "@/components/JournalLayout";

export default function Rankings() {
  return (
    <JournalLayout
      title="My 2026 Games Ranked"
      heroSrc="/2025/MessengerScenic.png"
      heroAlt="Beautiful scene from The Messenger"
      warningText="This journal entry contains minor/major spoilers for various games. Be wary opening the 'Read More' section for games you don't want spoiled."
      signature="Jose Folgar 10/15/2026"
    >
      <GameEntry meta={games[0]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[1]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[2]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[3]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[4]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[5]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[6]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[7]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[8]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[9]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[10]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[11]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[12]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[13]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[14]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[15]}>
        <Despelote />
      </GameEntry>
      <GameEntry meta={games[16]}>
        <Despelote />
      </GameEntry>
    </JournalLayout>
  );
}
