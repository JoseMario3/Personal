"use client";
import Image from "next/image";
import GameEntry from "@/components/GameEntry";
import { games } from "@/data/content/2025/tlou.meta";
import TLOU from "@/data/content/2025/tlou.mdx";
import Despelote from "@/data/content/2025/despelote.mdx";
import Shorthike from "@/data/content/2025/shorthike.mdx";
import Limbo from "@/data/content/2025/limbo.mdx";
import Inside from "@/data/content/2025/inside.mdx";
import Resist from "@/data/content/2025/resist.mdx";
import Ballpit from "@/data/content/2025/ballpit.mdx";
import PicoPark from "@/data/content/2025/picopark.mdx";
import Sayonara from "@/data/content/2025/sayonara.mdx";
import DKC2 from "@/data/content/2025/dkc2.mdx";
import Returns from "@/data/content/2025/returns.mdx";
import Yoshi from "@/data/content/2025/Yoshi.mdx";
import Mariokart from "@/data/content/2025/mariokart.mdx";
import BluePrince from "@/data/content/2025/blueprince.mdx";
import SplitFiction from "@/data/content/2025/fiction.mdx";
import Inscryption from "@/data/content/2025/inscryption.mdx";
import Messenger from "@/data/content/2025/messenger.mdx";
import HotlineMiami from "@/data/content/2025/hotlinemiami.mdx";
import HadesII from "@/data/content/2025/hadesii.mdx";
import Yakuza from "@/data/content/2025/yakuza.mdx";
import Tsushima from "@/data/content/2025/tsushima.mdx";
import Persona4 from "@/data/content/2025/persona4.mdx";
import TLOU2 from "@/data/content/2025/tlou2.mdx";
import Nightreign from "@/data/content/2025/nightreign.mdx";
import Octopath2 from "@/data/content/2025/octopath2.mdx";
import Yotei from "@/data/content/2025/yotei.mdx";
import Lorelei from "@/data/content/2025/lorelei.mdx";
import Deltarune from "@/data/content/2025/deltarune.mdx";
import Bananza from "@/data/content/2025/bananza.mdx";
import Persona3 from "@/data/content/2025/persona3.mdx";
import ClairObscur from "@/data/content/2025/clairobscur.mdx";
import Silksong from "@/data/content/2025/silksong.mdx";

//import imageFiles from "@/data/2025.json";
import styles from "./index.module.css";
import ScrollToTop from "@/components/ScrollToTop";
//import { supabase } from "@/lib/supabase";
import BackButton from "@/components/BackButton";

export default function Rankings() {
  // const signedUrls = await Promise.all(
  //   imageFiles.map(async (filename) => {
  //     const { data, error } = await supabase.storage
  //       .from("Images")
  //       .createSignedUrl(`2025/${filename}`, 60 * 60);
  //     if (error) {
  //       console.error(`Error for ${filename}:`, error);
  //       return null;
  //     }
  //     return { filename, url: data.signedUrl };
  //   })
  // );
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <BackButton />
        <h1 style={{ fontSize: "3rem", color: "var(--BLUE)" }}>
          My 2025 Games Ranked
        </h1>
        <Image
          src={`/2025/MessengerScenic.png`}
          className={styles.br}
          width="800"
          height="400"
          alt="Sonic Superstars"
        ></Image>
        <p className={styles.p}>
          <del>
            It’s that time of year again! The temperatures are going down, the
            sun is setting sooner than it should, and I am forcing myself to sit
            down and reflect on the past year. While 2024 was a huge time of
            change for me, 2025 has been a time of relative calm and an
            opportunity for growth. I got to explore new places, learn more
            skills, and grow friendships new and old. I couldn’t be more blessed
            by everyone and everything that has made this year possible, and I’m
            excited for a stellar end to this year.
          </del>
        </p>
        <p className={styles.p}>
          <del>
            This has also been an incredible year for games! No one can deny
            that this has been a particularly strong year with so many fantastic
            games released in every genre. I’ve done my best to keep up with all
            the releases that I was personally interested in, alongside finally
            tackling games that have been sitting on my backlog for ages. Every
            game I played is wonderful in its own right; so much so, I have
            never struggled this much with ranking every game I played in a
            year. I truly had a great time playing each and every game, but I
            have to rank them (for my own sanity) nonetheless. Before getting
            into the list, I want to shout out a few games that I started this
            year but didn’t have the chance to complete.
          </del>
        </p>
        <p className={styles.p}>
          <b>Take 2!</b> I wrote that initial draft all the way back in early
          November, and I was relatively satisfied with how it came out. Since
          then, however, I’ve spent time reflecting on my vision for these
          journal entries. I reached a flow state ranking my 2024 games a year
          ago, but this year I hit a brick wall. I made it through about a third
          of the games I played in 2025 before I could no longer decide what I
          wanted to write, nor could I pinpoint exactly why I’d hit such a
          strong writer’s block.
        </p>
        <p className={styles.p}>
          I knew it wasn’t because I had an extra eleven games to write about
          this year – I’d been prepared for the challenge from the start. I also
          had a lot to say about nearly every game, so it wasn’t a lack of
          talking points either. In the middle of this impasse, I decided to
          write a separate journal entry detailing my experience with the most
          recent game I played, <i>Octopath Traveler 2</i> (you should check it
          out if you haven’t already). As I worked through my thoughts, it
          dawned on me: I wasn’t struggling with my game ranking because I
          didn’t have enough to say. Rather, I was struggling because I had
          <i> too much </i> to say.
        </p>
        <p className={styles.p}>
          Every time I imagined writing about a certain game, a million ideas
          came to mind. I wanted to dive into excruciating detail for each one –
          whether it was explaining why Jin Sakai is one of my favorite
          videogame protagonists ever, or why the Greenhouse is one the best
          rooms in Blue Prince. I was trying to condense discussions worthy of
          full journal entries, like my DKCR or OT2 write-ups, into just a few
          paragraphs for this ranking list.
        </p>
        <p className={styles.p}>
          With this realization, I now have a renewed vigor to complete my
          ranking, be it a few days later than planned. I’m limiting myself to
          <b> one paragraph</b> per game max, or two at most if absolutely
          necessary. I’m leaving the games I already wrote about untouched,
          since I still feel happy with how those turned out. With that preamble
          out of the way, let’s go over a few games I Did Not Finish (DNF).
        </p>
        <hr className="separator" />
        <h1 style={{ fontSize: "2.5rem" }}>Did Not Finish</h1>
        <h2 style={{ fontSize: "2rem" }}>Xenoblade Chronicles X</h2>
        <div className={styles.horz}>
          <Image
            src={`/2025/Xenobladex.png`}
            className={styles.br}
            border-radius="15"
            width="300"
            height="300"
            alt="Xenoblade Chronicles X"
          ></Image>
          <p>
            This one really hurts as a long-time fan of the <i>Xenoblade </i>
            series. The original Xenoblade Chronicles is my favorite game of all
            time, and X is the only entry in the franchise I haven’t fully
            completed. For years, my main reason for not playing it was that it
            was stuck on the Wii U, but my prayers were answered when Nintendo
            announced a Switch port. I preordered it well in advance and was
            there day one when it released.
          </p>
        </div>
        <p className={styles.p}>
          Sadly, it didn’t grab me the way the other games did.{" "}
          <i>Xenoblade Chronicles X</i> takes a very different approach to
          storytelling compared to the rest of the series. That initially threw
          me off, but I eventually managed to look past it and focus on the
          incredible planet of Mira. Mira has to be one of the largest, most
          involved open worlds I’ve ever explored in a game. The continent is
          massive, with hundreds of flora and fauna to investigate.
        </p>
        <p className={styles.p}>
          I spent around 17-18 hours with the game (roughly halfway through
          Chapter 4), but I ended up getting pulled into another RPG even more.
          It breaks my heart that I didn’t find my way back to it for the rest
          of the year, but know that Mira and New Los Angeles haven’t seen the
          last of me yet.
        </p>
        <h2 style={{ fontSize: "2rem" }}>Death Stranding</h2>
        <Image
          src={`/2025/deathstranding.png`}
          className={styles.br}
          width="533"
          height="300"
          alt="Death Stranding"
        ></Image>
        <p className={styles.p}>
          I never had any intention of playing Death Stranding. It always looked
          uninteresting to me, and I’d never heard any coverage that made it
          sound like something I’d enjoy. Despite that, Death Stranding 2: On
          the Beach released this year, and in an effort to play every Game of
          the Year contender, I decided on a whim that I would play the original
          so I could eventually move on to the sequel.
        </p>
        <p className={styles.p}>
          Unfortunately, I didn’t get far before bouncing off it. I wasn’t a fan
          of the walking mechanics or the constant need to balance myself every
          few seconds, and I never found myself particularly engaged in the
          story either. In the end, I felt there were other games I’d rather
          spend my time on than forcing myself through Death Stranding, so I set
          it aside. I don’t foresee myself returning to it anytime soon, but the
          probability is never zero.
        </p>
        <h2 style={{ fontSize: "2rem" }}>Sonic Superstars</h2>
        <div className={styles.horz}>
          <p>
            I don’t have a lot to say about Sonic Superstars. I love Sonic, and
            after watching Sonic the Hedgehog 3, I was craving another Sonic
            game to play, so I picked this up on sale. The first few levels were
            fun, the music was good as usual, and I love the art style they went
            for in this game. I had a good time with it, but I ultimately got
            distracted playing other games. There’s a strong chance I’ll finish
            this game in 2026.
          </p>
          <Image
            src={`/2025/Sonic.png`}
            className={styles.br}
            width="196"
            height="261"
            alt="Sonic Superstars"
          ></Image>
        </div>
        <hr className="separator" />
        <p className={styles.p}>
          There were a few other games where I tried a quick demo or played the
          first hour or so, but I don’t feel those are worth mentioning here.
          With that out of the way, we can finally move on to the core of this
          article.
        </p>
        <p className={styles.p}>
          In 2025 I played and beat <b>32 new games</b>. That’s <b>11 more </b>
          than I completed last year! To qualify for this list, I had to play
          each game all the way through to the credits. Anything beyond that,
          post-game content or PlayStation trophies, was entirely optional. Of
          the 32 games I beat, only 11 were released this year. I earned the
          platinum trophy in five of them, and honestly, it probably would’ve
          been six if Nintendo had a trophy system.
        </p>
        <p className={styles.p}>
          I want to emphasize once again:
          <b> I genuinely enjoyed every game on this list!</b> That said, this
          ranking is bound to be just as controversial as last year’s, even
          without Baldur’s Gate 3 in the mix. Without further ado, let’s get
          into it!
        </p>
        <hr className="separator" />
        <GameEntry meta={games[0]}>
          <Despelote />
        </GameEntry>
        <GameEntry meta={games[1]}>
          <Shorthike />
        </GameEntry>
        <GameEntry meta={games[2]}>
          <Limbo />
        </GameEntry>
        <GameEntry meta={games[3]}>
          <Inside />
        </GameEntry>
        <GameEntry meta={games[4]}>
          <Resist />
        </GameEntry>
        <GameEntry meta={games[5]}>
          <Ballpit />
        </GameEntry>
        <GameEntry meta={games[6]}>
          <PicoPark />
        </GameEntry>
        <GameEntry meta={games[7]}>
          <Sayonara />
        </GameEntry>
        <GameEntry meta={games[8]}>
          <DKC2 />
        </GameEntry>
        <GameEntry meta={games[9]}>
          <Returns />
        </GameEntry>
        <GameEntry meta={games[10]}>
          <Yoshi />
        </GameEntry>
        <GameEntry meta={games[11]}>
          <Mariokart />
        </GameEntry>
        <GameEntry meta={games[12]}>
          <BluePrince />
        </GameEntry>
        <GameEntry meta={games[13]}>
          <SplitFiction />
        </GameEntry>
        <GameEntry meta={games[14]}>
          <Inscryption />
        </GameEntry>
        <GameEntry meta={games[15]}>
          <Messenger />
        </GameEntry>
        <GameEntry meta={games[16]}>
          <HotlineMiami />
        </GameEntry>
        <GameEntry meta={games[17]}>
          <Yakuza />
        </GameEntry>
        <GameEntry meta={games[18]}>
          <HadesII />
        </GameEntry>
        <GameEntry meta={games[19]}>
          <Tsushima />
        </GameEntry>
        <GameEntry meta={games[20]}>
          <Persona4 />
        </GameEntry>
        <GameEntry meta={games[21]}>
          <TLOU />
        </GameEntry>
        <GameEntry meta={games[22]}>
          <TLOU2 />
        </GameEntry>
        <GameEntry meta={games[23]}>
          <Nightreign />
        </GameEntry>
        <GameEntry meta={games[24]}>
          <Octopath2 />
        </GameEntry>
        <GameEntry meta={games[25]}>
          <Yotei />
        </GameEntry>
        <GameEntry meta={games[26]}>
          <Lorelei />
        </GameEntry>
        <GameEntry meta={games[27]}>
          <Deltarune />
        </GameEntry>
        <GameEntry meta={games[28]}>
          <Bananza />
        </GameEntry>
        <GameEntry meta={games[29]}>
          <Persona3 />
        </GameEntry>
        <GameEntry meta={games[30]}>
          <ClairObscur />
        </GameEntry>
        <GameEntry meta={games[31]}>
          <Silksong />
        </GameEntry>
        <p className={styles.p}>
          At long last, every single game I played in 2025 has been ranked,
          discussed, and proofread. There was a stretch about a month ago when I
          genuinely wasn’t sure I would finish. I nearly released the list
          without any written commentary, simply because it would have saved so
          much time. However, I knew there was far too much I wanted to say
          about each game, and I wouldn’t have been able to live with myself if
          I’d left it unfinished. I find it fascinating how shifting my focus to
          writing the Octopath Traveler 2 retrospective gave me the energy I
          needed to return and power through the rest of my list. I went a bit
          over the 1-2 paragraphs I promised myself in the introduction, but
          that small change in perspective ended up being exactly what I needed
          to keep going. There are many games I wish I’d had more time to
          explore in greater depth, but I’ll save those thoughts for future
          journal entries. I missed my December goal by a couple weeks, but I’m
          proud that I finished this regardless.
        </p>
        <p className={styles.p}>
          2025 has been one of my strongest gaming years since 2020. Completing
          32 games in 12 months is no small feat, especially when a quarter of
          them were massive RPGs. I’m already looking forward to playing more
          games this year, with Outer Wilds, Sekiro, and Resident Evil VII at
          the top of my list. While I’m starting the year a few weeks later than
          planned, it was worth it to finally check this off my to-do list. I’m
          eager to see what changes this year brings, and I wish you all a
          wonderful 2026. :)
        </p>
        <p className={styles.sig}>Jose Folgar 1/15/2026</p>
        <ScrollToTop />
      </div>
    </div>
  );
}
