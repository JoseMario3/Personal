import JournalLayout from "@/components/JournalLayout";
import {
  TopTenEntry,
  CompilationEntry,
  TopTenMeta,
  CompilationMeta,
} from "@/components/FinalRankingEntry";
import finalRankingData from "@/data/json/TopTen.json";
import finalRankingCompilation from "@/data/json/Compilation.json";
import styles from "@/styles/journalEntry.module.css";

const topTen: TopTenMeta[] = finalRankingData;
const compilation: CompilationMeta[] = finalRankingCompilation;

export default function FinalRankingPage() {
  return (
    <JournalLayout
      title="Complete Game Ranking"
      heroSrc="/MoreGames/astro.png"
      heroAlt="Astro Bot but GOW"
      signature="— Jose Folgar 09/16/2026"
    >
      <hr className="separator" />
      <p className={styles.p}>
        When I first started ranking the games I play every year, the idea was
        that each year's list would eventually slot together into one giant,
        ongoing ranking of every game I've played. What you're looking at is
        that: two years' worth of games so far and more will be added every year
        going forward. It also only includes games I first played starting in
        2024; I'm not about to dig back through 24 years of memories trying to
        find a spot for every single game I've ever played. Though I did add my
        top ten games of all time in here, just for reference. This doesn’t
        include the full rundown on each game like you see in the yearly
        rankings; this is purely a compilation. This isn’t a final list; many of
        these were really hard to decide, and I reserve the right to shuffle
        things around if I change my mind later.
      </p>
      <hr className="separator" />
      <h1 className={styles.subTitle}>My Top Ten Games of All Time</h1>
      <div style={{ width: "100%", maxWidth: 800 }}>
        {topTen.map((e) => (
          <TopTenEntry key={e.rank} meta={e} />
        ))}
      </div>
      <h1 className={styles.subTitle}>The Rest of Them</h1>
      <div style={{ width: "100%", maxWidth: 800 }}>
        {compilation.map((e, idx) => (
          <CompilationEntry key={idx} meta={e} />
        ))}
      </div>
    </JournalLayout>
  );
}
