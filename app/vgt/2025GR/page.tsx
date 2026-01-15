import React from "react";
import Image from "next/image";
//import imageFiles from "@/data/2025.json";
import styles from "./index.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ScrollToTop from "@/components/ScrollToTop";
//import { supabase } from "@/lib/supabase";
import BackButton from "@/components/BackButton";

export default async function Rankings() {
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
        <h1 style={{ fontSize: "3rem" }}>My 2025 Games Ranked</h1>
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
          recent game I played, Octopath Traveler 2 (you should check it out if
          you haven’t already). As I worked through my thoughts, it dawned on
          me: I wasn’t struggling with my game ranking because I didn’t have
          enough to say. Rather, I was struggling because I had <i>too much </i>
          to say.
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
          With this realization, I now have a renewed vigor to try to complete
          my ranking, be it a few days later than planned. I’m limiting myself
          to <b>one paragraph</b> per game max, or two at most if absolutely
          necessary. I’m leaving the games I already wrote about untouched,
          since I still feel happy with how those turned out. With that preamble
          out of the way, let’s go over a few games I Did Not Finish (DNF).
        </p>
        <hr className={styles.separator} />
        <h1>Did Not Finish</h1>
        <h2>Xenoblade Chronicles X</h2>
        <Image
          src={`/2025/Xenobladex.png`}
          className={styles.hero}
          border-radius="15"
          width="800"
          height="500"
          alt="Xenoblade Chronicles X"
        ></Image>
        <p className={styles.p}>
          This one really hurts as a long-time fan of the <i>Xenoblade </i>
          series. The original Xenoblade Chronicles is my favorite game of all
          time, and X is the only entry in the franchise I haven’t fully
          completed. For years, my main reason for not playing it was that it
          was stuck on the Wii U, but my prayers were answered when Nintendo
          announced a Switch port. I preordered it well in advance and was there
          day one when it released.
        </p>
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
        <h2>Death Stranding</h2>
        <Image
          src={`/2025/deathstranding.png`}
          className={styles.hero}
          border-radius="15"
          width="800"
          height="500"
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
        <h2>Sonic Superstars</h2>
        <Image
          src={`/2025/Sonic.png`}
          className={styles.hero}
          border-radius="15"
          width="800"
          height="500"
          alt="Sonic Superstars"
        ></Image>
        <p className={styles.p}>
          I don’t have a lot to say about Sonic Superstars. I love Sonic, and
          after watching Sonic the Hedgehog 3, I was craving another Sonic game
          to play, so I picked this up on sale. The first few levels were fun,
          the music was good as usual, and I love the art style they went for in
          this game. I had a good time with it, but I ultimately got distracted
          playing other games. There’s a strong chance I’ll finish this game in
          2026.
        </p>
        <hr className={styles.separator} />
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
        <hr className={styles.separator} />
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>32</div>
          </div>
          <h1>Despelote • May 2025</h1>
          <Image
            src={`/2025/Despelote.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Despelote"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                Soccer has been a part of my life for as long as I can remember.
                I still think back to first grade, when my mom decided to move
                me from baseball to soccer. I played on a travel team for nearly
                all of elementary and middle school, and in high school I was
                back on the field the moment cross country season ended. Growing
                up at home, I’d often walk into the living room to find a soccer
                match playing on the TV. Even now, I wear a Barcelona charm on
                my Crocs and play casual pickup games at the park. When I lace
                up my cleats and step onto a field, a switch flips in my brain,
                and all the skills and instincts I’ve picked up over the years
                come rushing back.
              </Typography>
              <Typography className={styles.typography}>
                Despelote transported me to Quito, Ecuador in 2001, letting me
                see the world through the eyes of a young boy who loves soccer.
                The entire city is on edge, as Ecuador teeters on the brink of
                qualifying for the 2002 FIFA World Cup. This is the first game
                I’ve played that was also an autobiography. Developer Julián
                Cordero narrates the experience, guiding us through the city’s
                shifting atmosphere month by month while offering glimpses into
                his childhood as he explored the world around him.
              </Typography>
              <Typography className={styles.typography}>
                I loved kicking the ball around with friends, running through
                the park, and overhearing fragments of family conversations.
                There’s a raw vulnerability to Julián and his family that makes
                the game feel deeply authentic. Many moments mirrored my own
                childhood – simple experiences like playing outside until my mom
                called for dinner, or wandering around a party trying to
                entertain myself while the adults talked. My lifelong connection
                to soccer kept me fully engaged and made the story resonate even
                more. Despelote serves as a beautiful window into a time long
                past, captured through an innocent and endearing lens. I only
                wish it were longer so I didn’t need to leave the world so soon.
                It stands as a perfect reminder that games can be an
                extraordinary medium for delivering meaningful, personal works
                of art.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>31</div>
          </div>
          <h1>A Short Hike • April 2019</h1>
          <Image
            src={`/2025/Shorthike.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="A Short Hike"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                A majority of the games I play are large-scale action and
                adventure experiences. From fighting Shadows in the TV World to
                cutting down hordes of Mongols with a katana, it can be a bit
                exhausting to jump from one high-intensity game to the next. A
                Short Hike was a welcome change of pace from my usual lineup.
                It’s a quaint, cozy game about a bird trying to reach the top of
                a mountain. Thankfully, this mountain is far less punishing to
                climb than Celeste.
              </Typography>
              <Typography className={styles.typography}>
                The game takes place on a small open-world island (tiny compared
                to Elden Ring or Breath of the Wild), but it’s packed with
                charm. There are plenty of characters to meet and help along the
                way: some are attempting to scale the mountain just like you,
                while others are content simply enjoying the park. As you assist
                fellow animals and collect golden feathers, you gradually gain
                the ability to climb higher and higher.
              </Typography>
              <Typography className={styles.typography}>
                A Short Hike is a genuinely pleasant experience, elevated by a
                peaceful, upbeat soundtrack. It’s the perfect game to sit down
                with and get lost in for a couple hours. The characters are all
                cute and expressive, and the journey culminates in a
                heartwarming conclusion once you finally reach the summit. This
                game has been on my radar for a long time, and I’m glad I
                finally took the hike.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>30</div>
          </div>
          <h1>Limbo • July 2010</h1>
          <Image
            src={`/2025/Limbo.jpg`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Limbo"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                In another all-too-normal impulsive decision, I bought and
                played Limbo in November. It’s a rather short game, but I
                enjoyed it nonetheless. The black-and-white art style makes an
                already spooky game feel even more ominous. The platforming
                puzzles strike a good balance: not too difficult, but still fun
                to solve. The story is heavily left up to interpretation, and I
                spent most of the game confused about what was happening. I
                still need to watch some videos explaining the narrative. In the
                end, Limbo was a nice little game, and I’m glad I finally got
                around to playing it.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>29</div>
          </div>
          <h1>Inside • June 2016</h1>
          <Image
            src={`/2025/Inside.jpg`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Inside"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                The fun didn’t stop with Limbo, because on the same day I also
                played through Inside, another short but intriguing
                puzzle-platformer. If Limbo’s story left me confused, Inside’s
                narrative downright baffled me. You start the game as a kid
                running from the police, and you end it as an amalgamation of
                human bodies rolling down a mountain after escaping a research
                facility. Along the way, the kid uses a mind-control helmet to
                gather humans, dives deep underwater in a submarine being chased
                by some phantom-like entity, and goes through countless other
                bizarre events for reasons I couldn’t explain. The sheer shock
                factor of Inside’s sequence of events put it above Limbo on this
                list. Experiencing both bewildering narratives in a single
                afternoon was a great time, and I’ll definitely be looking up
                more interpretations in the future.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>28</div>
          </div>
          <h1>1000xRESIST • May 2024</h1>
          <Image
            src={`/2025/RESIST.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="1000xRESIST"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                Hekki Grace! Every year, I have a tradition of buying a small
                game on New Year’s Day to carry with me into the year ahead. In
                2021, it was Hades; last year, it was Cocoon; and this year’s
                pick was 1000xRESIST. Going in, all I really knew was that the
                game had a “really engaging story”, and some striking character
                designs. As it turns out, “really engaging” is a massive
                understatement.
              </Typography>
              <Typography className={styles.typography}>
                In a year packed with story-driven games, 1000xRESIST stands out
                as one of the most unique and compelling narratives I
                experienced. You play as Watcher, the blue sister, and slowly
                uncover alongside her the story of how the world was destroyed
                and rebuilt into what it is today. Gameplay takes a clear
                backseat here, and the story is undeniably the main reason I saw
                this game through to the end.
              </Typography>
              <Typography className={styles.typography}>
                The narrative unfolds and reveals itself in an unconventional
                way, flipping through time like the pages of a storybook. Some
                moments have you exploring old classrooms or drifting through
                surreal, liminal spaces, soaring through the air. Outside of
                those sequences, however, the gameplay largely consists of
                walking and talking. While I was admittedly disappointed by how
                minimal the mechanics were, the strength of the story more than
                made up for it.
              </Typography>
              <Typography className={styles.typography}>
                I was especially satisfied with the ending; it doesn’t simply
                present a conclusion – it makes sure you understand the message
                it’s trying to convey. 1000xRESIST is an experience unique unto
                itself. I’m confident I made the right choice bringing this game
                with me into the new year, and I can only hope next year’s
                tradition lives up to the same standard.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>27</div>
          </div>
          <h1>Ball x Pit • October 2025</h1>
          <Image
            src={`/2025/Ballpit.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="1000xRESIST"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I picked up Ball x Pit after hearing all the buzz around its
                release. The developers take the classic brick-breaker formula
                and elevate it into a full roguelike experience. The game starts
                simply: you control a character who jumps into
                brick-breaker-style combat to fend off hordes of enemies and
                bosses. It also features a base-building component between runs
                – gathering resources and constructing buildings unlocks new
                abilities to help deal with the increasingly overwhelming enemy
                forces.
              </Typography>
              <Typography className={styles.typography}>
                The sixteen playable characters keep the gameplay fresh, and
                things become even more interesting once you unlock the ability
                to bring two characters into a single run. My favorite
                combination was The Repentant, whose balls deal 5% more damage
                each time they hit a wall, paired with The Cohabitants, which
                launch mirrored copies of every ball for even more chaos.
              </Typography>
              <Typography className={styles.typography}>
                After rolling credits, I didn’t have much desire to keep
                actively playing, though I was still interested in upgrading
                every building and completing more levels with different
                characters. Fortunately, the final unlockable character, The
                Radical, literally takes the reins and plays the game itself.
                About 20 of my roughly 33 in-game hours came from letting The
                Radical play so I could unlock every ability. Overall, Ball x
                Pit was a fun, brief experience, but it doesn’t come close to
                reaching Balatro’s level for me.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>26</div>
          </div>
          <h1>Pico Park 2 • August 2024</h1>
          <Image
            src={`/2025/Pico.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Pico Park 2"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I don’t even remember where I first learned about the original
                Pico Park. My earliest memory is giving it a shot on a random
                evening with friends in college, where we spent the entire night
                laughing, yelling, and having an absolute blast. When I found
                out the developers had made a sequel, I knew I had to be there
                on day one.
              </Typography>
              <Typography className={styles.typography}>
                Pico Park is simple in concept but expertly executed. Everyone
                plays as tiny cat-like critters called “Picos,” working together
                to complete a series of fun and wacky levels. These levels range
                from platforming challenges to Tetris-style puzzles and plenty
                of other silly minigames. The game supports up to eight players
                simultaneously, and it truly shines the more people you can
                gather.
              </Typography>
              <Typography className={styles.typography}>
                Organizing large groups with varying levels of gaming experience
                is surprisingly difficult, but that chaos is exactly what makes
                Pico Park 2 so entertaining. I played most of the game with
                around six to eight people, and I’m honestly impressed we
                managed to clear even half of the levels. The difficulty ramps
                up significantly toward the end, so to finish the final stages,
                I ended up pairing with a friend and tackling them as a duo. No
                friendships have been destroyed due to it (yet), and until then,
                Pico Park 2 is a must-play at all of my friends’ game nights.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>25</div>
          </div>
          <h1>Sayonara Wild Hearts • September 2019</h1>
          <Image
            src={`/2025/Sayonara.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Sayonara Wild Hearts"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                There has been an unfortunate lack of rhythm games on my list
                this year. Last year, I was introduced to the
                <i> Rhythm Heaven</i>
                franchise, and ever since, I’ve been searching for another game
                that could give me the same dopamine rush. While I wait for
                Rhythm Heaven Groove to release in 2026, Sayonara Wild Hearts
                has served as a perfect interim fix!
              </Typography>
              <Typography className={styles.typography}>
                It’s a relatively short experience (I beat it in one sitting
                before lunchtime), but there’s plenty of replayability if you
                want to perfect every level. The story follows a heartbroken
                girl journeying through a dreamlike world, battling cursed
                arcana in order to both heal herself and the world around her.
                It’s a simple but charming narrative that ultimately culminates
                in her confronting her ‘demons’ and restoring her heart.
              </Typography>
              <Typography className={styles.typography}>
                The real sauce of the game, however, lies in the game’s
                graphics, music, and gameplay. The bold color palette meshes
                beautifully with the surreal, polygonal environments, creating a
                striking visual identity. Each level has the protagonist chasing
                and confronting the cursed arcana in inventive ways – whether
                that’s chasing them down on a motorcycle or entering a VR
                headset to face them head-on, the variety keeps the experience
                consistently fresh and engaging.
              </Typography>
              <Typography className={styles.typography}>
                As with any rhythm game, the music is the star of the show.
                There’s an unmatched satisfaction when your inputs perfectly
                sync with the beat. Despite only playing through the game once
                over the course of a few hours, tracks like Dead of Night, Mine,
                and Begin Again have stayed in my frequent rotation on Spotify.
                Sayonara Wild Hearts is an easy game to jump back into whenever
                I feel like chasing a perfect run, and I’m sure it’ll live
                rent-free in my head for a long time.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>24</div>
          </div>
          <h1>Donkey Kong Country 2: Diddy Kongs Quest • December 1995</h1>
          <Image
            src={`/2025/DKC2.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Donkey Kong Country 2"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />

              <Typography className={styles.typography}>
                Donkey Kong has been one of my favorite platforming franchises
                ever since I played Tropical Freeze on my Wii U. I played the
                original Donkey Kong Country a few years later, but never
                ventured beyond that – until this year. While I didn’t love the
                original DKC and felt it had aged noticeably, I’d heard nothing
                but praise for its sequel, Donkey Kong Country 2, so I was
                excited to finally give it a shot.
              </Typography>
              <Typography className={styles.typography}>
                Despite its namesake, DKC2 has you playing as Diddy Kong and
                Dixie Kong on a journey to rescue Donkey Kong after he’s been
                kidnapped by King K. Rool. The game begins aboard K. Rool’s
                ship, where the first game left off, and takes you through a
                variety of areas on your way to save DK. While the level design
                in the first game was fine, very few stages stuck with me after
                I finished. In DKC2, however, nearly every area introduced
                memorable and creative ideas that kept things fresh throughout.
              </Typography>
              <Typography className={styles.typography}>
                Dixie Kong’s hair-glide ability is a fantastic evolution of the
                series’ movement, complementing Diddy’s agility while opening up
                new level design possibilities. There’s also a much greater
                emphasis on animal buddies this time around! While Winky and
                Expresso are sorely missed, the new additions – Rattly,
                Squitter, Clapper, Glimmer, and Squawks – are all implemented
                exceptionally well. Squawks quickly became my favorite; I loved
                the speed and freedom of his flying levels, with Squitter coming
                in as a close second once I got the hang of his web mechanics.
              </Typography>
              <Typography className={styles.typography}>
                Some standout levels include the minecart stage where you’re
                chased by a ghostly skeleton, the level where you ride Rambi
                through a honeycomb, and all the bramblebush sections. I also
                made the decision to collect every DK coin, which gave me a
                great excuse to revisit several stages. The music is another
                highlight, serving as a phenomenal follow-up to the original
                game’s already excellent soundtrack.
              </Typography>
              <Typography className={styles.typography}>
                Donkey Kong Country 2 perfectly scratched the 2D platforming
                itch I had after finishing Donkey Kong Bananza, and now I
                understand why it’s considered one of the most beloved entries
                in the franchise.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>23</div>
          </div>
          <h1>Donkey Kong Country Returns • November 2010</h1>
          <Image
            src={`/2025/Returns.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Donkey Kong Country Returns"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I’ve been a loyal Nintendo fan since I started gaming. I watched
                Let’s Plays of Paper Mario and Majora’s Mask before eventually
                getting a Wii for Christmas. A couple years later, I received a
                Wii U for Christmas; to this day I can still count on one hand
                the number of people I’ve met who also owned one. After that
                came a Switch in 2017 and a Switch OLED in 2022. It wasn’t until
                I graduated college that I finally branched out from Nintendo
                and bought my first PlayStation. As much as I love Nintendo
                games, I can’t keep up with the $60 releases every other month.
                I usually buy two or three $60+ games a year, but I can’t
                justify picking up every big release as much as I’d like to.
              </Typography>
              <Typography className={styles.typography}>
                Donkey Kong Country Returns is a game I’ve wanted to play since
                I was a kid, and when the remaster released this past January, I
                knew it was finally time. Instead of buying the overpriced $60
                Switch version, I tracked down the original Wii release online
                for $20 and played that instead! It was a great way to start the
                year and genuinely satisfying to finally fulfill a childhood
                wish. While the game shows its age in a few areas, it deserves
                credit for laying the groundwork that allowed Tropical Freeze to
                shine. I go into more detail in my review of Donkey Kong Country
                Returns, so be sure to check that out!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>22</div>
          </div>
          <h1>Yoshis Crafted World • March 2019</h1>
          <Image
            src={`/2025/Yoshi.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Yoshi's Crafted World"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                How do you follow up a game made entirely of yarn? You double
                down and handcraft the whole world. My sister and I played
                Yoshi’s Woolly World together on the Wii U, and this year we
                finally got to play its follow-up, Yoshi’s Crafted World. This
                is undoubtedly one of the cutest and most creative games I
                played all year. Cardboard floors, fabric Yoshis, clay enemies,
                origami platforms — every piece of the world looks lovingly
                handmade. Yoshi can now wear fun costumes in each level, from
                juice box cartons and cardboard mice to little tin cans and
                coffee creamer armor. Half the fun for me and my sister was
                picking out these silly costumes before every level. The game
                introduces a plethora of fun new level ideas while keeping the
                same amusing multiplayer mechanics as the previous game, like
                stealing each other’s eggs or launching one another to reach
                tricky spots. Some of our favorite levels included the safari
                level, the bakery world, and the Mega Cardboard Yoshi beatdowns.
              </Typography>
              <Typography className={styles.typography}>
                My sister and I had a great time running through the whole game
                once, but I wouldn’t recommend trying to 100% complete it. After
                beating a level, an NPC sends you back to the level on scavenger
                hunts to find various items in the background & foreground. At
                first, we tried to complete every task, but constantly replaying
                levels became exhausting – some required up to eight trips just
                to satisfy the NPC. A more enjoyable reason to revisit levels is
                the “flip side”, where you progress from Finish to Start
                searching for three Poochy pups. Unlike the monotonous scavenger
                hunts, the Poochy search stayed engaging, offering a fresh
                perspective on familiar stages. The soundtrack, unfortunately,
                isn’t quite as inspired as the previous game’s. The main level
                theme track repeats across most levels, and the overall score
                feels rather sleepy. Even so, despite the repetitive completion
                tasks and average soundtrack, playing through Yoshi’s Crafted
                World with my sister is a memory I’ll always treasure.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>21</div>
          </div>
          <h1>Mario Kart World • June 2025</h1>
          <Image
            src={`/2025/Mariokart.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Mario Kart World"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />

              <Typography className={styles.typography}>
                Mario Kart World had enormous pressure on it: Nintendo’s first
                truly new Mario Kart entry since 2014, the flagship launch title
                for the Switch 2, and the first AAA game to carry an $80 price
                tag. While I had a good time with it initially, there are
                several areas where it falls short due to some questionable half
                measures.
              </Typography>
              <Typography className={styles.typography}>
                Knockout Tour is an exciting addition to the racing modes, but
                it becomes repetitive quickly, with only eight routes and no way
                to customize your own path. I love the wide variety of costumes
                and new characters (shoutout Cow and Pianta), but randomly
                mixing costumes and characters instead of organizing outfits
                into folders makes the menu feel unnecessarily cluttered.
              </Typography>
              <Typography className={styles.typography}>
                The massive mix of new tunes and nostalgic remixes may be the
                most impressive soundtrack of the year, but without any volume
                settings, the music is often drowned out by rumbling engine
                noises and item sound effects. This is especially frustrating in
                free-roam mode – the most obvious place to add a radio for
                selecting music. As for free-roam itself, it’s an interesting
                concept, but I quickly lost interest due to the lack of
                meaningful incentives to collect all the P-Switches and Peach
                coins. I mostly used it as an efficient way to unlock character
                costumes.
              </Typography>
              <Typography className={styles.typography}>
                That said, a tremendous amount of love and care clearly went
                into this game. The character animations are the best in the
                series, the world is beautiful and densely detailed, and the new
                racing mechanics keep Mario Kart feeling fresh. I don’t think
                World will replace Mario Kart 8, but it stands toe-to-toe with
                it, offering a different kind of grand experience. I’m hopeful
                that some of my complaints will be addressed through DLC
                someday, but as it stands, Mario Kart World is a staple for game
                nights.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>20</div>
          </div>
          <h1>Blue Prince • April 2025</h1>
          <Image
            src={`/2025/Prince.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Blue Prince"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I saw a YouTube comment recently that read “I hated Blue Prince
                just as much as I loved it, which was such a bummer,” and that
                perfectly sums up my feelings about the game. I loved the
                opening stretch of attempting to reach the Antechamber and
                uncover Room 46. The game is shockingly addictive; I spent hours
                opening rooms and collecting items. The sheer variety of rooms
                and endless mansion layouts kept pulling me back as I chased the
                perfect run. I was extremely satisfied when I reached Room 46
                after about fourteen hours and watched the credits roll. As any
                Blue Prince veteran knows, though, the game is packed with
                secrets around every corner, and reaching Room 46 is only the
                tip of the iceberg.{" "}
              </Typography>
              <Typography className={styles.typography}>
                The next major challenge is finding the eight sanctum keys that
                unlock the underground rooms, and this is where the game began
                to lose steam for me. Many keys are locked behind extremely
                unlikely conditions, such as reaching the Mechanarium only after
                unlocking seven other mechanical rooms, or finding a very
                specific vault key and reaching the vault in a single run. These
                challenges wouldn’t be as frustrating if not for the heavy
                reliance on room RNG. I became more and more discouraged every
                run where I wouldn’t get any pieces needed to find the keys. On
                top of that, I wasn’t particularly impressed by the game’s
                soundtrack, and several puzzles actively annoyed me,
                <i> especially </i>the Gallery puzzles.
              </Typography>
              <Typography className={styles.typography}>
                I’ll admit I got plenty of help from a friend and looked up
                multiple puzzle solutions. I didn’t want to waste time solving
                something and giving up since I had no idea when I’d see some
                rooms again. My frustration isn’t entirely the game’s fault,
                though – I frequently heard I should keep a notebook to track
                clues, but I was too lazy to commit to it.
              </Typography>
              <Typography className={styles.typography}>
                That said, there were many puzzles I genuinely enjoyed, like the
                Clocktower and the Pipe Room. As an engineer at heart, I loved
                the Billiards Room’s math puzzles, and I had fun with the Parlor
                room riddles, at least until they became absurdly long. My
                friend and I completed all the classrooms and passed the final
                exam (yes, we looked up the answers), and I eventually earned
                the Full House trophy. My final achievement was collecting all
                eight sanctum keys and completing the sigil puzzles (also with
                assistance). There were plenty of challenges left, but by then I
                was ready to step away.
              </Typography>
              <Typography className={styles.typography}>
                Despite all my complaints about RNG, I can’t deny that Blue
                Prince had me in a chokehold for months. I loved the art style
                of this game, and it’s truly astounding how the developers
                turned door-opening into such a compelling roguelike. I loved
                Blue Prince just as much as I hated Blue Prince, and despite it
                all, I still have a nagging itch to return to the game for one
                more run.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>19</div>
          </div>
          <h1>Split Fiction • March 2025</h1>
          <Image
            src={`/2025/Fiction.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Split Fiction"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                Reflecting on it now, I’m split on Split Fiction. Let’s rewind.
                I played it online with a college friend right at launch, and we
                had a delightful time together. We made a great duo: he
                gravitated toward the more stoic, logical Mio while I naturally
                leaned into the upbeat, whimsical Zoe. Mio’s first chapter was a
                terrific introduction. The stressful vehicle chases, Parking
                Attendant and Mr. Hammer boss fights, and the hilarious CAPTCHA
                section instantly hooked me.
              </Typography>
              <Typography className={styles.typography}>
                Despite how strong that opening chapter was, I barely think back
                on the others. A few moments stand out, like the turtle boss in
                Chapter 3 and the giant dragon final boss of Chapter 4, but none
                of the chapters left the same impression as the first. The side
                stories, on the other hand, were a major highlight. Fighting the
                Dentist as a tooth and goofing off in the Moon Market are just
                two examples of the side stories’ wonderfully creative ideas.
              </Typography>
              <Typography className={styles.typography}>
                The only other section that matched Chapter 1 for me was the
                final boss. Ironically, a game centered on storytelling ended up
                having one of my least favorite narratives of the year. Still,
                that weaker story set the stage for an excellent showdown
                against the evil CEO, Rader. Running through remixed versions of
                earlier chapters in a striking blend of sci-fi and fantasy was
                incredibly impressive.
              </Typography>
              <Typography className={styles.typography}>
                In short, my favorite parts of the game were the beginning, the
                end, and a handful of side quests along the way. When I look
                back on Split Fiction, I remember loving it and thinking it was
                really cool, but that “compliment sandwich” may have distracted
                me from how lukewarm I felt about the middle sections. Overall,
                I still think it is an awesome game packed with great ideas, and
                I hold on dearly to the memories of playing it with one of my
                best friends.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>18</div>
          </div>
          <h1>Inscryption • October 2021</h1>
          <Image
            src={`/2025/Inscryption.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Inscryption"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                No game benefits from a blind playthrough quite like
                Inscryption. Honestly, I don’t know how to write about it
                without spoiling the very things that make it special. There’s
                so much I want to talk about, from the compelling card game to
                the memorable characters, but I’d much rather anyone reading
                this experience it completely unspoiled. Maybe someday I’ll
                write a separate entry where I dig into all my opinions. For
                now, I’ll leave it at this: the first 10 hours of Inscryption
                were a 10/10 for me, I loved every twist and turn along the way,
                and above all else, <i>listen to the stoat!!!</i>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>17</div>
          </div>
          <h1>The Messenger • August 2018</h1>
          <Image
            src={`/2025/Messenger.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="The Messenger"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I’ve entered the past couple of years with a relatively clear
                idea of which games I wanted to tackle. For example, going into
                2025, I knew I wanted to play Persona 3 Reload, The Last of Us,
                Yakuza: Like A Dragon, and Ghost of Tsushima, among a few other
                titles. It’s impossible to predict everything I’ll end up
                playing, though, and The Messenger was one game that completely
                caught me by surprise. While casually browsing Nintendo’s E-Shop
                (as I far too often do), I found it on sale for a whopping $3. I
                couldn’t ignore a deal that good, and so it received an express
                ticket to the very top of my backlog.
              </Typography>
              <Typography className={styles.typography}>
                First things first: The Messenger’s 8-bit and 16-bit soundtracks
                are incredible, nearly rivaling Shovel Knight’s fantastic music.
                Every area delivers hit after hit: from the{" "}
                <i>Hill of Destiny</i> to <i>A Home Amongst the Clouds</i>, the
                stellar finale of <i>A Melody to Break the Curse</i>, and even
                into the Picnic Panic DLC with <i>Impact Zone</i>. The
                soundtrack simply doesn’t let up; I added nearly 70 songs from
                the game to my video game playlist on Spotify because they’re
                all that good.
              </Typography>
              <Typography className={styles.typography}>
                The Messenger is everything I wanted Cybershadow to be. Unlike
                Cybershadow, I genuinely enjoyed the story here, especially the
                twist that elevates what could have been a generic narrative.
                The lighthearted, comedic writing is among my favorite of the
                year – high praise I rarely give to 2D platformers. The ninja
                acrobatics and combat feel silky smooth, and the platforming
                challenges consistently kept me engaged. The sudden shift into a
                Metroidvania structure was a bit jarring, but I’m
                well-accustomed to tedious tasks, so it didn’t bother me much.
                The DLC provided a great excuse to return to and squeeze out a
                few more hours. I had an absolute blast with The Messenger, and
                I genuinely hope I find another game that excites me as much as
                this one did.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>16</div>
          </div>
          <h1>Hotline Miami Collection • October 2017</h1>
          <Image
            src={`/2025/Hotline.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Hotline Miami Collection"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I bought the Hotline Miami Collection a while back during a sale
                since it’s often cited as one of the greatest indie game series.
                This year, I finally decided to give it a shot. In both games,
                you play as a hitman in Miami, receiving jobs over the phone and
                executing your targets however you see fit. Every level demands
                careful planning and execution against waves of mafia goons.
                From punching and shooting to smashing enemies with pipes, the
                game is far more violent than I anticipated.
              </Typography>
              <Typography className={styles.typography}>
                The first game is a solid introduction into the series’
                playstyle, with a bewildering yet engaging story to back it up.
                The second game refines the formula, increasing the difficulty
                and forcing you to think critically about how to clear each
                floor. The varied layouts and different masks to wear keep every
                level fresh. I loved the sense of accomplishment after finally
                making it through a floor after dozens of attempts.
              </Typography>
              <Typography className={styles.typography}>
                The gameplay reminded me of a top-down Katana Zero, which sounds
                backwards, but I just happened to play Hotline Miami second. The
                electronic and techno soundtrack perfectly complements the
                intense action, and I was completely engrossed running floors
                over and over. I struggled plenty, dying constantly, but there
                is ample opportunity to improve and chain together bigger combos
                if you’re motivated.
              </Typography>
              <Typography className={styles.typography}>
                The Hotline Miami Collection is incredible as-is, so I’m almost
                okay knowing the developer has no plans for a third game. Maybe
                someday I’ll return and finally earn a grade higher than a B on
                the levels.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>15</div>
          </div>
          <h1>Yakuza: Like A Dragon • January 2020</h1>
          <Image
            src={`/2025/Yakuza.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Yakuza: Like A Dragon"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I don’t think I could ever get tired of the sheer whimsy the
                Yakuza games bring. I imagine the brainstorming session for
                Yakuza: Like A Dragon consisted of a dozen people shouting out
                the most bizarre sidequest ideas imaginable, and whoever was in
                charge refused to turn down a single one.{" "}
              </Typography>
              <Typography className={styles.typography}>
                A kart-racing tournament with a full storyline? Sounds fun.
              </Typography>
              <Typography className={styles.typography}>
                Dozens of exams spanning a wide range of subjects? Sure, why
                not.
              </Typography>
              <Typography className={styles.typography}>
                What if the protagonist had a pet crawfish? Incredible.
              </Typography>
              <Typography className={styles.typography}>
                A full blown business management campaign to become Yokohama’s
                #1 company? Absolutely.
              </Typography>
              <Typography className={styles.typography}>
                The Yakuza franchise easily has my favorite sidequests and
                minigames in any JRPG I’ve played. You truly never know what the
                game is going to throw at you next. I was especially floored by
                how much I enjoyed the business management minigame. I went in
                fully expecting to skip it since it sounded dry and tedious, but
                after giving it an honest shot, I became completely obsessed. I
                ended up playing it for eight hours straight until I finally
                claimed the #1 spot. And that’s without even touching on the
                main story, which I enjoyed far more than Infinite Wealth’s
                narrative. I love the rhythm of the game: watching 45-minute
                emotionally charged cutscenes; diving into cinematic,
                over-the-top yakuza brawls; then immediately pivoting into the
                goofiest sidequests imaginable.
              </Typography>
              <Typography className={styles.typography}>
                Ichiban Kasuga is one of my favorite heroes in any game. His
                sincerity, optimism, and willingness to fully commit to even the
                most ridiculous situations make him endlessly lovable. I can’t
                wait to see where the series takes him next, but for now, I’m
                beyond excited to try out Yakuza 0 in 2026.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>14</div>
          </div>
          <h1>Hades II • September 2025</h1>
          <Image
            src={`/2025/Hades2.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Hades II"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I bought the original Hades game on a whim during my freshman
                spring semester, and my suitemates and I put in over 70 hours in
                a single week just to beat it. Since then, I’ve been eagerly
                awaiting the full release of Hades II, and my patience was
                finally rewarded in September. Supergiant Games absolutely
                nailed this sequel. They took everything I loved about the first
                game and raised the stakes across the board: more intense
                combat, stunning graphics, a wealth of boons, and rocking music.
              </Typography>
              <Typography className={styles.typography}>
                The dialogue alone is staggering. Even 55 hours in, I haven’t
                heard a single repeated line – every NPC has unique, compelling
                interactions. I had a blast alternating between underworld and
                surface runs, experimenting with new weapons, and daring myself
                to crank up the heat. The soundtrack is as phenomenal as ever,
                with standout tracks like Sightless Shepherd, Titan of Time,
                and, of course, Claw Out Your Eyes. It pains me to see this game
                so low on my list, but that just highlights how strong the other
                games on this list were. Hades II is an absolute triumph in its
                own right.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>13</div>
          </div>
          <h1>Ghost of Tsushima • July 2020</h1>
          <Image
            src={`/2025/Tsushima.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Ghost of Tsushima"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />

              <Typography className={styles.typography}>
                <b>“I am not your son. I am the Ghost.”</b>
              </Typography>
              <Typography className={styles.typography}>
                Jin Sakai is undoubtedly my favorite hero this year – an
                honorable man forced to abandon the samurai code he’s lived by
                his entire life in order to save the island he calls home.
                Haunted by past failures in the past and crushed beneath
                impossible odds, Jin takes desperate, often brutal measures to
                drive out the loathsome Mongol invaders.
              </Typography>
              <Typography className={styles.typography}>
                That powerful narrative is paired with Ghost of Tsushima’s
                breathtaking world, easily one of the most gorgeous landscapes
                I’ve ever explored in a game. When I wasn’t sitting jaw-dropped,
                soaking in the scenery, I was fully absorbed in its thrilling
                katana combat. I loved the balance between stealth, silently
                dismantling Mongol camps, and the intensity of open combat,
                where juggling sword stances became essential once the horde
                closed in. The Iki Island DLC was another standout, adding
                meaningful depth to Jin’s character and confronting him with the
                emotional scars he’d long buried. It enriched his arc without
                undermining the core story, making his internal struggle feel
                even more personal.
              </Typography>
              <Typography className={styles.typography}>
                My biggest nitpick is that I never felt particularly motivated
                to pursue most side content. The Shinto and Inari Shrines became
                repetitive fairly quickly, and the combat was forgiving enough
                that I rarely felt compelled to hunt for upgrades. While I did
                finish all the character side quests, I never formed a strong
                attachment to any of their stories.
              </Typography>
              <Typography className={styles.typography}>
                Even so, Jin Sakai’s journey – walking the razor-thin line
                between honor and survival – will stay with me for a long time.
                His transformation into the Ghost isn’t just compelling; it’s
                unforgettable.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>12</div>
          </div>
          <h1>Persona 4 Golden • June 2012</h1>
          <Image
            src={`/2025/P4.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Persona 4 Golden"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I told myself I’d play Persona 4 Golden in 2026, but after
                enjoying Persona 3 Reload so much, I was eager to finish out the
                trilogy. Persona 4 feels far more lighthearted compared to the
                darker, gloomier atmosphere of Persona 3. The Investigation Team
                ended up being my favorite party of the year. While S.E.E.S.s
                interactions were largely focused on exploring Tartarus, the
                Investigation Team spends much more time simply enjoying each
                other’s company. Cooking dinner, school field trips, camping,
                skiing, and putting on a full concert recital all help make
                their relationships feel special.
              </Typography>
              <Typography className={styles.typography}>
                Watching each character confront their truth inside the TV World
                was both exciting and bizarre in ways I didn’t expect. The
                dungeons in Persona 4 Golden are miles better than Tartarus – I
                vividly remember running through the Sauna, Theater, Game, and
                Secret Base and taking on their bosses. The classic turn-based
                combat returns with added duo attacks for Chie/Yukiko,
                Yosuke/Teddie, and Kanji/Naoto. The music is phenomenal as ever,
                with Heaven, Time to Make History, and Reach Out To The Truth
                standing out as some of my favorites songs of the year.
              </Typography>
              <Typography className={styles.typography}>
                Released in 2012, Persona 4 Golden does show its age, especially
                after finishing Persona 3 Reload. The menus are lackluster, the
                dungeons and combat aren’t as refined, and the visuals are the
                least exciting in the trilogy. These are minor complaints
                though; the characters, world, and story are among the best in
                the whole franchise, and I’m confident Persona 4 Revival will
                address my graphical concerns.
              </Typography>
              <Typography className={styles.typography}>
                I was deeply disappointed that the murder mystery was spoiled
                early-on. I wish I could erase the game from my memory and
                experience it fresh, but even knowing the culprit, I still loved
                uncovering the ‘why’ rather than the ‘who.’ I also struggled to
                reach the true ending near the endgame, as the required dialogue
                choices are extremely specific. It took several attempts and a
                few Google searches to avoid the bad ending. The effort was
                worth it, though, because the final boss was exhilarating. I
                loved my time with Persona 4 Golden, and I have no doubt I’ll
                replay it in full when Persona 4 Revival releases.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>11</div>
          </div>
          <h1>The Last of Us Part I • June 2013</h1>
          <Image
            src={`/2025/TLOU.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt=""
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                Widely regarded as one of the greatest video game stories ever
                told, I’ve wanted to play The Last of Us for years.
                Unfortunately, I didn’t have any way to play it until 2024, so I
                made do by watching a Let’s Play and later season one of the HBO
                series. With season two on the horizon, I finally made time to
                play through both games. I had a great time finally experiencing
                the story firsthand.
              </Typography>
              <Typography className={styles.typography}>
                The writers deserve all the praise for the narrative; I loved
                watching Joel and Ellie’s relationship evolve over the course of
                their cross-country journey. The mix of stealthy exploration and
                tense combat against the infected delivered a thrill I haven’t
                felt since playing Resident Evil 4. The game holds up remarkably
                well considering it came out twelve years ago. I honestly have
                very few criticisms; it’s an incredibly solid experience that
                tells a moving story without overstaying its welcome. Highlights
                include the final hospital sequence and my first encounter with
                a Bloater. The Last of Us is definitely a game I can see myself
                returning to for a replay.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>10</div>
          </div>
          <h1>The Last of Us Part II • June 2020</h1>
          <Image
            src={`/2025/TLOU2.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="The Last of Us Part II"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I had a difficult time deciding which game I preferred. Both are
                excellent in their own ways, and I knew that wherever I placed
                one, the other would have to sit right next to it. After much
                reflection, I ultimately chose Part II as my favorite. I know
                its story is highly controversial, but the narrative worked for
                me. I loved the new setting of Seattle, a city I’m already
                fairly familiar with. The gunplay is just as strong as in the
                first game, featuring even scarier encounters and a wider
                selection of weapons. The music perfectly suits the atmosphere,
                and the graphics are the most realistic I’ve seen in any game.
              </Typography>
              <Typography className={styles.typography}>
                That said, the real reason I chose Part II over Part I is due to
                how impressed I am Abby won me over. Even though it had been
                spoiled for me, Joel’s death is still the second most
                gut-wrenching death I’ve experienced in a video game. I was
                fully invested in Ellie’s revenge quest and adamantly opposed
                anything involving Abby. I nearly gagged when I realized half
                the game would force me to play from her perspective. Still, I
                pushed forward and, against my will, slowly began to warm up to
                her.
              </Typography>
              <Typography className={styles.typography}>
                It’s fascinating how stepping into another person’s shoes can
                humanize them. I couldn’t help but care for Abby after watching
                her evolve through her unlikely alliance with Lev. She also gets
                some of the game’s strongest gameplay sequences, particularly
                the Rat King encounter and The Island. By the end, Ellie began
                to feel more like the villain. I respect the decision not to let
                the player choose the ending – sometimes that choice simply
                doesn’t fit the story being told. I reflected on Ellie and
                Abby’s opposing perspectives long after finishing the game, and
                that’s ultimately why I chose The Last of Us Part II over Part
                I.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>9</div>
          </div>
          <h1>Elden Ring Nightreign • May 2025</h1>
          <Image
            src={`/2025/Nightreign.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Elden Ring Nightreign"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                Elden Ring Nightreign is not a perfect game. In fact, it may be
                the most frustrating roguelike I’ve ever played. Every mission
                takes at least 40 minutes to reach the final boss, only to end
                about twenty seconds later when your team is wiped out by one of
                the Nightlords. Nightreign’s saving grace (pun intended) however
                is its multiplayer.
              </Typography>
              <Typography className={styles.typography}>
                In college, I learned the term “trauma bonding” while struggling
                with friends through classes like Intro to Microelectronics and
                Analysis of Algorithms, and that concept applies perfectly here.
                Playing Nightreign with friends turns an otherwise rage-inducing
                experience into something far more entertaining. Over the course
                of 100+ hours, my high school friends and I managed to defeat
                all of the Nightlords and a handful of the Everdark Sovereigns.
                Early on, I gravitated toward Duchess and never looked back. Our
                win/lose ratio is atrocious, but we had a great time regardless.
              </Typography>
              <Typography className={styles.typography}>
                Surprisingly, playing with random people online wasn’t nearly as
                bad as I expected. We were either thrilled to get a competent
                teammate or amused paired with less-skilled players. I also
                loved seeing which bosses they pulled from Elden Ring and the
                Dark Souls series; it’s been too long since I’ve fought Smelter
                Demon and Dancer of the Boreal Valley. The Nightlords are some
                of the most epic bosses in Soulsborne history. My favorites
                include Adel, Baron of Night; Libra, Creature of Night; and
                Heolstor, the Nightlord.
              </Typography>
              <Typography className={styles.typography}>
                It’s still a shame that the developers never added crossplay to
                the game. Regardless, there have been so many highlights, from
                frantic last-second rescues in the storm to immediately
                sprinting the other way whenever the Bell-Bearing Hunter
                appeared. Even now, I’m beyond excited to hop back in with
                friends and sink more time into Nightreign with the new DLC.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>8</div>
          </div>
          <h1>Octopath Traveler 2 • February 2023</h1>
          <Image
            src={`/OT2/Octopath2.jpeg`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Octopath Traveler 2"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                In a turn of events no one saw coming, I somehow managed to
                squeeze in a full playthrough of Octopath Traveler 2 this year.
                I’m especially glad I did, because it was the best JRPG I played
                all year. As a strong sequel should, Octopath 2 raises the
                stakes and addresses every major issue I had with the first
                game. The graphics and HUD have been drastically improved, and
                it’s honestly astonishing to return to the original afterward
                and see how much it now feels like a beta version of its sequel.
                Overall, the characters are wonderful, the graphics are
                gorgeous, the music is excellent, and the combat is thrilling;
                my only complaints are minor nitpicks. Check out my
                retrospective on Octopath Traveler 2 if you want my more
                in-depth thoughts.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>7</div>
          </div>
          <h1>Ghost of Yotei • October 2025</h1>
          <Image
            src={`/2025/Yotei.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Ghost of Yotei"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                Even though I hadn’t played its predecessor, Ghost of Yotei was
                my most anticipated game going into the year. I had heard plenty
                of buzz about Ghost of Tsushima, so I knew I’d enjoy it, and the
                Ghost of Yotei trailer at The Game Awards convinced me I had to
                play them both in 2025. I managed to beat Tsushima just in time
                to play Yotei upon its October release.
              </Typography>
              <Typography className={styles.typography}>
                In the best way possible, Ghost of Yotei feels more like a movie
                than a game. Every region of Ezo is brought to life through
                stunning use of color. The fiery reds and oranges of Ishikari
                Plains, the silvery, snow-covered peaks of Teshio Ridge, and the
                soft pinks and blues splashing across Oshima Coast give each
                area a distinct personality. Atsu, the new protagonist, is
                fierce, relentless, and unquestionably a worthy successor to Jin
                Sakai. Her quest for revenge against the Yotei Six started
                slowly after the prologue but quickly accelerated once I began
                targeting the Oni and Kitsune. Unlike Jin who relied on a single
                weapon, Atsu wields a variety of weapons that keep combat
                interesting. My favorites were the Yari, a spear for controlling
                distance, and the Kusarigama, a sickle-and-chain combination
                perfect for breaking shields and striking from afar. From hidden
                waterfalls to the snow-capped summit of Mount Yotei, duels are
                always set against breathtaking, cinematic backdrops. My
                favorite duel was also the most challenging, and the opponent’s
                words are burned into my memory: “Make this duel unforgettable.”
              </Typography>
              <Typography className={styles.typography}>
                Ghost of Yotei also polished a few minor issues from the first
                game. Jin’s armor selection never appealed to me, but I found
                myself constantly switching Atsu’s costumes since I loved them
                all. Side content felt far more manageable too. While Tsushima’s
                world often felt sprawling and overwhelming, Yotei’s compact
                layout made exploration and completion satisfying rather than
                tedious. I had an amazing time earning the platinum trophy for
                Ghost of Yotei, and I’m confident that it’s a worthy successor
                to the original game in every way.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>6</div>
          </div>
          <h1>Lorelei and the Laser Eyes • May 2024</h1>
          <Image
            src={`/2025/Lorelei.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Lorelei and the Laser Eyes"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                In an unforeseen turn of events, the wild card on this list,
                Lorelei and the Laser Eyes, somehow earned a spot in my top six
                games of 2025. I’ve been obsessed with this game ever since
                finishing it. Everything from the unsettling atmosphere,
                fascinating puzzles to the thought-provoking story captivated me
                in a mystery I couldn’t put down. Piecing together the narrative
                and watching it all culminate in a climactic finale was one of
                my favorite experiences of the year. Lorelei features over 150
                puzzles, and while some can be too obscure and others are a bit
                too simple, the standout puzzles were among my favorites of
                2025. They had me so entranced that I was scribbling solutions
                on napkins just to work them out. The game is by no means
                perfect – the movement can feel awkward at times, and having
                only a single button for every input is a bit silly – but none
                of these issues were intrusive enough to ruin the experience.
                The only real transgression? I still have no idea what a tampon
                does. :(
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>5</div>
          </div>
          <h1>Deltarune • June 2025</h1>
          <Image
            src={`/2025/Deltarune.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Deltarune"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                Deltarune is a game I definitely want to give a full journal
                entry someday, so I’ll keep this brief. While I’m only writing
                about chapters 3 and 4 here, my placement on this ranking
                reflects all four chapters released so far.
              </Typography>
              <Typography className={styles.typography}>
                IT’S TV TIME!!! After a nearly four-year hiatus, Deltarune
                finally returned with a double feature, and it’s just as good as
                I remembered. Chapter 3 opens strong with the introduction of
                Tenna, one of my favorite video game characters all year. His
                colorful dialogue, popping design, and jubilant show-host
                attitude won me over instantly. While the videogame segments
                become a bit tedious on repeat playthroughs, the rest of the
                chapter is a delight to play. The physical challenges, the
                escape from the game show, and the return of Rouxls Kaard all
                kept a grin on my face the whole way through. The final battle
                against Tenna is the cherry on top, now one of my favorite boss
                fights in both Deltarune and Undertale. Naturally, every good
                game show has to end eventually. The final physical challenge
                against the Roaring Knight delivers a sharp tonal shift to the
                chapter and serves as a worthy adversary to test my combat
                skills.
              </Typography>
              <Typography className={styles.typography}>
                Chapter 4 builds directly on that shift. The Dark World feels
                noticeably more somber, and the characters’ moods reflect the
                looming sense of impending doom. The game still finds moments to
                lighten the tone, such as the time-consuming, lengthy battle
                against Jackenstein and the wonderful addition of the old man,
                Gerson Boom. I loved watching Susie’s character development, and
                the Hammer of Justice fight was a fantastic callback to
                Undertale. The finale escalates dramatically, with the Roaring
                Knight reaffirming their threat before culminating in a
                monumental showdown against the Titan.
              </Typography>
              <Typography className={styles.typography}>
                I love how chapters 3 and 4 work together to tell a cohesive
                continuation to Deltarune’s narrative while embracing
                drastically different tones. I’m relieved Toby Fox has confirmed
                Chapter 5 for 2026 because after that cliffhanger, I don’t think
                I could handle a longer wait.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>4</div>
          </div>
          <h1>Donkey Kong Bananza • July 2025</h1>
          <Image
            src={`/2025/Bananza.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Donkey Kong Bananza"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                I MUST SPEAK MY TRUTH: I LOVE DONKEY KONG BANANZA!
              </Typography>
              <Typography className={styles.typography}>
                Donkey Kong Bananza is the most satisfying game I’ve played this
                year and my favorite 3D Platformer since Astro Bot. Donkey
                Kong’s absurdly strong ability to punch through nearly any
                surface is endlessly entertaining. I spent hours smashing
                through dirt, stone, and every other destructible material I
                could find.
              </Typography>
              <Typography className={styles.typography}>
                While I liked Bananza during my first playthrough, I didn’t
                truly fall in love with it until I committed to the full
                collectathon: all <b>777 bananas</b>, <b>696 fossils</b>, and
                <b>110 music discs</b> scattered throughout the planet’s many
                layers. That hunt pushed me to explore every area to its fullest
                extent. While I spent about 20 hours finishing Bananza’s main
                story, reaching 100% completion took closer to 40 hours, and not
                once did it feel like wasted time.
              </Typography>
              <Typography className={styles.typography}>
                The Bananza transformations make traversal feel effortless. I
                was constantly hopping to higher grounds, flying between
                landmasses, or speeding across massive fields in pursuit of the
                next collectable. Elephant Bananza and Kong Bananza’s sheer
                power let me obliterate any obstacle in my way, and with the
                amount of gold I was picking up, the abilities practically paid
                for themselves. The rehearsals were a surprising and welcomed
                endgame challenge, pushing me to truly master each Bananza
                transformation, and the final level felt like a perfect reward
                for collecting every last fossil and banana.
              </Typography>
              <Typography className={styles.typography}>
                Pauline and Donkey Kong made a delightful, heartwarming duo.
                Watching their relationship grow as they traveled deeper into
                the planet was one of the game’s highlights. Small touches, like
                brief conversations before going to sleep, did much to showcase
                their awesome friendship. I never got tired of hearing Pauline
                during Bananza transformations, and her final song, Heart of
                Gold, still makes me tear up every time.
              </Typography>
              <Typography className={styles.typography}>
                The developers absolutely nailed the ending. King K. Rool’s
                long-awaited return caught me completely off guard – I was
                bamboozled yet again by that rotten crocodile – but it only made
                the finale more satisfying. It’s easy to dismiss Donkey Kong
                Bananza as just a game about punching and destruction, but doing
                so ignores the incredible care, creativity, and polish poured
                into every layer of its world. I can confidently say that Donkey
                Kong Bananza is my favorite 3D Platformer Nintendo has ever
                made, and I sincerely hope we get to see Donkey Kong & Pauline
                team up again in the future.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>3</div>
          </div>
          <h1>Persona 3 Reload • February 2024</h1>
          <Image
            src={`/2025/P3.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Persona 3 Reload"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                <ul>
                  <li>
                    Watching the Full Moon, Full Life opening movie every time I
                    started the game
                  </li>
                  <li>
                    Witnessing S.E.E.S. summon their Personas for the first time
                  </li>
                  <li>
                    Finally getting more teammates into Tartarus after a month
                    of only Yukari & Junpei
                  </li>
                  <li>
                    Spending countless days listening to Color Your Night and
                    When the Moon’s Reaching Out Stars while exploring Paulownia
                    Mall and Tatsumi Port Island
                  </li>
                  <li>
                    Hearing Want To Be Close while returning to Iwatodai Dorm
                    after long days of school and socializing
                  </li>
                  <li>
                    Venturing through 200+ floors of Tartarus and defeating
                    hundreds of enemies with It’s Going Down Now blasting in the
                    background
                  </li>
                  <li>Uncovering the secrets of the Kirijo Group and Strega</li>
                  <li>
                    Meeting Aigis on the beach after learning none of the guys
                    have any game
                  </li>
                  <li>Koromaru</li>
                  <li>
                    Akinari, Mutatsu, Maiko, and President Tanaka’s Social Links
                  </li>
                  <li>
                    The intriguing symbolism of death and grief throughout
                    everyone’s stories
                  </li>
                  <li>Discovering just how overpowered Shinji is in combat</li>
                  <li>
                    Activating everyone’s Theurgy skills for the first time
                  </li>
                  <li>“The arcana is the means by which all is revealed.”</li>
                  <li>
                    Experiencing the finale after 100+ in-game hours and bawling
                    my eyes out as Memories of You played and the credits rolled
                  </li>
                </ul>
              </Typography>
              <Typography className={styles.typography}>
                All of these moments (and so many more) made Persona 3 Reloadone
                of my favorite JRPGs ever, standing out even after playing seven
                other RPGs throughout the year. Despite some questionable
                gameplay decisions, its story is something truly special, and I
                hope everyone gets the chance to experience it. I’ll leave
                things off with this quote from Mrs. Kamiki:
              </Typography>
              <Typography className={styles.typography}>
                <u>
                  “Take good care of the ones dearest to you. If you wait until
                  their time has come, and you’re clinging to their cold bodies…
                  then it’s too late. …Everyone who’s born will die someday. Not
                  just Akinari, or me, or you. It happens to everyone… So before
                  that happens… It doesn’t take a grand gesture. You don’t have
                  to make a big production of it, but… If you love someone, let
                  them know it. We all go through life with the same struggles,
                  the same heartbreak… We should be able to prop each other up
                  with the same love and kindness as well… I’m sure you have
                  something precious you can share with people… Always remember
                  that…”
                </u>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>2</div>
          </div>
          <h1>Clair Obscur: Expedition 33 • April 2025</h1>
          <Image
            src={`/2025/33.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Clair Obscur: Expedition 33"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                What is there to say about Clair Obscur: Expedition 33 that
                hasn’t already been said? It’s the most impressive game this
                year, racking up over 300 awards and landing second for most
                awards won behind Elden Ring. From its picturesque painted
                landscapes to its invigorating turn-based/action combat and
                awe-inspiring music, every facet of Clair Obscur feels
                meticulously crafted. I didn’t truly understand what “Best Game
                Direction” meant at The Game Awards until I played this game.
                Expedition 33 was clearly built around a strong creative vision,
                and the developers executed it perfectly. Every element serves a
                purpose in telling a beautiful, cohesive narrative.
              </Typography>
              <Typography className={styles.typography}>
                For all the recognition I give it now, I wasn’t immediately sold
                on Clair Obscur. Much of the early praise I heard focused on how
                it modernized turn-based combat with dodge and parry mechanics,
                something I was already comfortable with, so I took that acclaim
                with a grain of salt. I also wasn’t in the right headspace for a
                massive RPG at the time, and I felt fairly lukewarm on Act I and
                the start of Act II. After a week-long break, though, the
                expedition finally grew on me. Recruiting Monoco, fighting the
                two Axons, and ascending the Monolith completely won me over.
              </Typography>
              <Typography className={styles.typography}>
                The Renoir and Paintress battles are stunning spectacles; I
                genuinely would have been satisfied if the Paintress fight had
                been the final boss because it was just that good. If I wasn’t
                already convinced by how impressive Clair Obscur was, the real
                final boss sealed the deal. I’ve never been as torn by a choice
                in a video game as I was at the end of Expedition 33. I spent at
                least thirty minutes mulling over my decision, and even then I’m
                still not convinced I chose correctly. While some of the side
                content was a bit easy, I enjoyed completing it all and earning
                the platinum trophy. The Simon battle was the most challenging
                boss I’ve faced since Malenia in Elden Ring. Clair Obscur:
                Expedition 33 is deserving of every award it’s received this
                year, and I hope it’s used as a benchmark for games to come.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>1</div>
          </div>
          <h1>Hollow Knight Silksong • September 2025</h1>
          <Image
            src={`/2025/Silksong.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Hollow Knight Silksong"
          ></Image>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Read More</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.readmore} />
              <Typography className={styles.typography}>
                After a nearly seven-year wait, Hollow Knight: Silksong finally
                released on September 4, 2025, and I dropped everything to play
                it. For two straight weeks, my life followed a single routine:
                go to work, then play Silksong. From September 4th to September
                20th, all other hobbies were shelved and socializing was reduced
                to the bare minimum. I didn’t stop until I reached 100%
                completion, and in sixteen days I logged 90 hours of playtime.
                Only two other games claimed more of my time this year: Persona
                3 Reload (a 90-hour JRPG plus its DLC) and Elden Ring
                Nightreign, a multiplayer experience I returned to throughout
                the year. I spent a long time debating whether I preferred Clair
                Obscur: Expedition 33 or Silksong, but there’s no denying the
                absolute chokehold Silksong had on my life for those two
                consecutive weeks.
              </Typography>
              <Typography className={styles.typography}>
                Hollow Knight Silksong is everything I wanted from a sequel to
                Hollow Knight. Pharloom is a massive world packed with hidden
                items, branching paths, and memorable bosses. Every time I
                thought I’d uncovered most of the map, it simply kept expanding.
                The Citadel lived up to every whispered promise from Act I, and
                Act III recontextualized earlier regions in ways that reignited
                my desire to explore even further.
              </Typography>
              <Typography className={styles.typography}>
                Hornet’s acrobatic moveset is significantly more challenging,
                and more rewarding, than the Knight’s. Some mechanics, like the
                new dash timing and dive attack, took time to get used to, but
                once they clicked, combat became exhilarating. I spent most of
                the game using the Beast Crest embracing the aggressive
                playstyle it encouraged. Silksong’s difficulty is no joke.
                Double damage, a limited health pool, and enemies with
                intricate, punishing movesets demanded constant focus. While
                many people were understandably deterred by its difficulty, I
                dug in my heels and powered my way forward. I died constantly,
                in every possible situation, but I always got back up. The Coral
                Tower gauntlet was the one point where I nearly gave up, but
                after stepping away for a day, I came back and conquered it.
              </Typography>
              <Typography className={styles.typography}>
                There were countless standouts moments in Silksong that made
                this an amazing experience. My favorite was the heart-pounding
                ascent back to Pharloom, the volcano erupting right on my tail
                while Enter Pharloom played in the background. I loved The Slab
                segment of being kidnapped, stripped of my gear, and forced to
                break free. I spent far too long climbing Cogwork Core for the
                first melody, and Mount Fay proved to be an equally brutal and
                satisfying platforming challenge. Defeating Groal the Great,
                First Sinner, and Skarrsinger Karmelita left me invigorated. Of
                course, I can’t forget the grand spectacle that was Trobbio’s
                performances and sparring against Phantom while the organ
                thundered in the background.
              </Typography>
              <Typography className={styles.typography}>
                Pharloom feels alive. NPCs are scattered everywhere, and I was
                always eager to return to Bellhart or Songclave to see how the
                world evolved. Running into Sherma or Shakra along the way
                always brought a smile to my face. I appreciated that Silksong
                presents its story more openly than Hollow Knight, while still
                offering deep lore through conversations with townsfolk.
              </Typography>
              <Typography className={styles.typography}>
                Hornet was a far more engaging protagonist than the Knight.
                Having a lead character who actively speaks and connects with
                others was refreshing. Her journey culminates in a powerful
                reflection on her past in Hallownest, grounding the story
                emotionally. The final battle against Lost Lace at the bottom of
                the void was demanding, emotional, and utterly fitting, and the
                ending was a beautiful callback to the original game.
              </Typography>
              <Typography className={styles.typography}>
                Despite its divisive reception, I’m unwavering in my love for
                Hollow Knight: Silksong. No other game held my attention the way
                Silksong did, and I would replay the entire journey again in a
                heartbeat.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
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
