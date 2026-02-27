import React from "react";
import Image from "next/image";
import imageFiles from "@/data/json/2024.json";
import styles from "./index.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ScrollToTop from "@/components/ScrollToTop";
import { supabase } from "@/lib/supabase";
import BackButton from "@/components/BackButton";

export default async function Rankings() {
  // const signedUrls = await Promise.all(
  //   imageFiles.map(async (filename) => {
  //     const { data, error } = await supabase.storage
  //       .from("Images")
  //       .createSignedUrl(`2024/${filename}`, 60 * 60);

  //     if (error) {
  //       console.error(`Error for ${filename}:`, error);
  //       return null;
  //     }
  //     return { filename, url: data.signedUrl };
  //   }),
  // );

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <BackButton />
        <h1 style={{ fontSize: "3rem", color: "var(--BLUE)" }}>
          My 2024 Games Ranked
        </h1>
        <p className={styles.p}>
          Looking back at my gaming history the past few years, it’s obvious
          that surviving college took most of my time and energy. Last year, I
          beat around 10 games (not counting all 7 Mega Man games individually),
          and in 2022 I only beat a measly 3 games. That said, this year I
          finally graduated college and moved cross-country to start my first
          official job. With this newfound free time, I’ve played a ton more
          games. As is tradition, it’s time to rank and reflect on all the games
          I played.
        </p>
        <p className={styles.p}>
          This year I managed to roll credits on 21 new games, more than double
          last year’s number. In past years, I would limit myself to only
          ranking 10 games; each game was confined to a single Snapchat photo.
          Now that I have more time and energy (and games in general to rank), I
          wanted to try something new. I’ll be ranking all 21 of the games I
          played and beat for the first time this year. There’s no character
          limit anymore either – for better or for worse.
        </p>
        <p className={styles.p}>
          No game I played and completed this year is excluded from this list.
          This is not a list of games I played this year that were also released
          this year. The range of games goes from a release date of October 2007
          to a game released just a month ago. The genres range from rhythm
          games to indie puzzle games all the way to AAA JRPGs. This is not an
          objective ranking, a subjective ranking is scary enough. I’ll be
          ranking them by how much I enjoyed each game as I played it and how
          fondly I look back on the game after I’ve finished it. I should note:{" "}
          <b>I enjoyed every game I played this year!!!</b> It’s not easy to
          look at 21 games that each offer 21 vastly different experiences and
          try to rank them all. If your favorite game is ranked lower than you’d
          like, understand that I still enjoyed it. Unfortunately, one game has
          to be last, and only one can be first. I will be avoiding spoilers for
          all games, so feel free to scroll and read to your heart’s content.
          Without further ado, this is my ranking of the 21 games I beat this
          year.
        </p>
        <hr className="separator" />
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>21</div>
          </div>
          <h1>The Plucky Squire • September 2024</h1>
          <Image
            src={`/2024/PluckySquire.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="The Plucky Squire"
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
                The Plucky Squire is a cute and creative game developed by All
                Possible Futures. I really enjoyed the concept of hopping in and
                out of a storybook to solve puzzles, and its art direction was
                among the best this year. Unfortunately, it fell short in
                several key areas for me. While the puzzles were charming, they
                didn’t feel particularly clever or challenging. I didn’t get
                much satisfaction from solving them compared to other puzzle
                games. Additionally, I don’t think any of the characters were
                fully realized as I’d have liked them to be. Violet and Thrash
                are both cool concept characters, but we barely got to see them
                until the last couple chapters. The game often felt overly
                guided, but the developers recently released an update allowing
                players to toggle off some of the guidance, which will hopefully
                address that issue. I think this is a solid first step for The
                Plucky Squire, and I’m confident the team can refine many of
                these issues in a future game.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>20</div>
          </div>
          <h1>Astro’s Playroom • November 2020</h1>
          <Image
            src={`/2024/AstrosPlayroom.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Astro's Playroom"
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
                Astro’s Playroom serves as a sandbox demo of everything the PS5
                controller is capable of. From incredible haptics to adaptive
                triggers and so much more, Astro’s Playroom feels like a joy to
                play. As a demo, it is a very short game. Team Asobi did manage
                to pack over 50 trophies into the game, though. I think I spent
                more time collecting trophies than actually running through the
                game once. I played this game after completing the more recently
                released Astro Bot, and it was truly shocking how different both
                games felt to play. In my mind, they both felt exactly the same,
                but in reality, Astro Bot played much more smoothly and quickly
                than Astro’s Playroom does. While the game is cute and a good
                demo of what the PS5 can do, I don’t see myself coming back to
                it anytime soon in a post-Astro Bot world.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>19</div>
          </div>
          <h1>Portal • October 2007</h1>
          <Image
            src={`/2024/Portal.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Portal"
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
                This is where my takes become controversial. Portal 1 is a fun
                puzzle game that introduces us to the Aperture Science Center. I
                had a good time with this game; using portals to solve puzzles
                is objectively a good time. The mystery had me locked in the
                whole time, and the final boss was a lot of fun to fight. That
                said, I really wish the game were longer. Another issue, which
                may be specific to me, is that in the back half of the game,
                flying through portals started giving me a headache. The
                constant motion, flipping around the camera 180 and 540 degrees,
                gave me whiplash, and I had to put the game down a couple times
                to recover. Oddly, I played Portal 2 immediately after this
                game, and I never had any issues again. I want to revisit Portal
                and see if it was a one-off. Overall, playing with portals was
                fun, but the headaches I experienced brought my enjoyment down a
                bit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>18</div>
          </div>
          <h1>Mario & Luigi: Brothership • November 2024</h1>
          <Image
            src={`/2024/Brothership.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Mario & Luigi: Brothership"
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
                It really hurts to put this game this low. As someone who has
                loved the Mario & Luigi franchise since Superstar Saga, I was
                beyond excited when Nintendo announced the first Mario & Luigi
                game not on a handheld console. I was doubly excited for it
                because, ever since Alphadream got shut down in 2019, no one
                thought we would be getting another Mario & Luigi game ever.
                This game has a lot going for it. It has a great OST, fun
                characters, and an interesting world concept. As a computer
                engineer, you know I was obsessed with Concordia and all the
                electrical people and puns throughout the game. I enjoyed the
                battle system throughout the game; it was a fun mix of new and
                old ideas and gave me the nostalgic feeling I was looking for
                from past Mario & Luigi games.
              </Typography>
              <Typography className={styles.typography}>
                Many people complain about AI Luigi and Luigi not being
                controlled by the ‘B’ button anymore, and while I do think these
                are unfortunate, they didn’t ruin the game for me.
                Unfortunately, the game’s biggest grievance is the pacing of the
                story. My final playtime ended up being around 40 hours, which
                is on par with Dream Team, which already felt too long. There
                were many main quests in the story that felt unnecessary and
                simply added to the playtime. Aside from those moments, the
                moment-to-moment gameplay also felt especially slow. For
                example, I’d press a button to solve a puzzle and the screen
                would pan over to something 10 feet away from me and then pan
                back over to the characters as if I couldn’t figure it out
                myself. Though it seems like a small issue, it happens
                repeatedly in a 40-hour game. I felt frustrated when I had to
                redo a puzzle 3 times not because I had to redo it, but because
                I knew I would need to sit through pointless cutscenes again.
                Even outside of puzzles, I often felt the NPC’s stopping me to
                reiterate things I knew already all the time. Similar to The
                Plucky Squire, this game felt incredibly hand-holdy. I think
                this game could be amazing if they shaved 8-10 hours off the
                playtime. Despite all my complaints, I did enjoy the game and am
                glad I played it. I think it’s important to remember this is the
                new team’s, Acquire, first time making a Mario & Luigi game. I
                think this is a good starting point, and I hope they take all
                the feedback from this game and use it to make an incredible
                second one.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>17</div>
          </div>
          <h1>Super Mario Party Jamboree • October 2024</h1>
          <Image
            src={`/2024/MarioParty.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Super Mario Party Jamboree"
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
                I wasn’t sure if I would include this game on the list initially
                since it’s not a single-player game. After beating the 4-hour
                story mode and playing countless hours with friends, I felt like
                I had a good enough grasp on the game to place it here. I am a
                HUGE Mario Party fan, but many of the most recent entries have
                been disappointing. Fortunately, Nintendo has been on an upward
                trend with the Mario Party games, slowly returning to what was
                great about the franchise. Mario Party Superstars was the
                closest return to form we had gotten since Mario Party 8, but
                even that felt like a glorified remake. Finally with Super Mario
                Party Jamboree we have a game that feels like a worthy entry in
                the franchise.
              </Typography>
              <Typography className={styles.typography}>
                Jamboree does an excellent job keeping that Mario Party
                experience from games past while also incorporating many new
                elements. Starting off with the most characters available to
                play as ever. We’re still a few characters short of perfect, but
                with a cast this size, it’s hard to complain about a couple
                missing (we’ll get you someday, Dry Bones). All of the boards
                are really fun to play and well thought out. Rainbow Galleria
                and Bowser’s Keep are among the best Mario Party boards ever, in
                my opinion. Mario’s Rainbow Castle and Western Land were both
                wonderful picks for the retro boards as well, both standing out
                with unique events. Almost all the minigames are really solid in
                this entry too! There’s a great mix of newcomers and previous
                minigames, my personal favorites being All The Marbles and
                Domination.
              </Typography>
              <Typography className={styles.typography}>
                While the game is overall better than the other two Mario Party
                games on Switch, it has a similar pacing issue to Mario & Luigi:
                Brothership. A single 10-turn game usually lasts about 90
                minutes, around double the length of a 10-turn game in other
                Mario Party games. This is usually due to people spending time
                practicing minigames or the addition of Jamboree Buddies. But
                even without those, I think the game wastes a lot of time on
                unnecessary animations. For example, in past games, you buy an
                item at the shop and it immediately enters your inventory. In
                this game, you choose the item, there’s a purchasing cutscene, a
                ‘Got Item’ cutscene, a little dance, and then watch the item
                enter your inventory. It takes what used to be a 2-second moment
                and turns it into a 15-second ordeal. When everyone is getting
                items and that’s not even the entirety of their turn, these 15
                second ordeals pile on making the game longer than necessary.
                This isn’t a huge issue though, especially if you have a lot of
                time on your hands, and I still think this is by far the best
                Mario Party on the Switch and a great direction for the
                franchise.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>16</div>
          </div>
          <h1>Shovel Knight Dig • September 2022</h1>
          <Image
            src={`/2024/ShovelKnight.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Shovel Knight Dig"
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
                This year I got my first Macbook because I was taking a Mobile
                App Development class in college and needed to use XCode. Either
                way, the purchase of a new Macbook came with a 3 month free
                trial of Apple Arcade. Though I didn’t have much interest in it,
                it was free, so I figured I’d browse the library anyway. You can
                only imagine my surprise when I’m scrolling through the games
                and find “Shovel Knight Dig,” a rogue-like Shovel Knight game by
                Yacht Club Games. I love the original Shovel Knight Treasure
                Trove, and this game must have flown under my radar while I was
                busy in college. I immediately had to play the game, and it
                became a great way to multitask while listening to my
                professor’s lectures.
              </Typography>
              <Typography className={styles.typography}>
                Shovel Knight Dig was an exciting return to the world I’ve loved
                since 2015. It is a rogue-like where Shovel Knight finally uses
                his namesake and ventures in the only direction that makes
                sense: deeper and deeper underground. It’s filled with 6 new
                worlds that bring back many well-loved characters while also
                introducing fun new ones. Each area is filled with secrets to
                discover, treasures to acquire, and pivotal choices to make as
                you create the perfect build to reach the bottom. Jake Kaufman
                composed the OST for this game and once again proves how
                talented he is at creating 8-bit soundtracks. Every world has a
                new song, and each one is phenomenal, perfectly capturing the
                essence of the environment.
              </Typography>
              <Typography className={styles.typography}>
                At first glance, this game doesn’t look like it would take that
                long to beat, but it is deceptively difficult. Shovel Knight
                often feels too large for the area he’s exploring, and there
                were many times during my playthroughs when I got stuck between
                a rock and a hard place with nowhere to go. It is really easy to
                make a small mistake and ruin your entire run. Often, if I lost
                too much health in the first area, I’d restart the entire run
                from scratch. I think I only beat the game once or twice, and
                once it was only because I used a skip to start in the last
                area, rather than going through the whole game. Despite its
                difficulty, it was still super fun to play, and I even bought it
                on Switch so I can return to it whenever.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>15</div>
          </div>
          <h1>Cocoon • September 2023</h1>
          <Image
            src={`/2024/Cocoon.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Cocoon"
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
                Every once in a while, I play a game fully blind. No reviews, no
                expectations, not even a clue about what the game is sometimes.
                That was the case with Cocoon. I decided to buy it on New Year’s
                Day almost a year ago and give it a shot since it won Indie Game
                of the Year at The Game Awards. The game looks simple at first
                glance. You play as an insect in a strange world (no this isn’t
                Hollow Knight) who carries a glowing ball on its back. You soon
                discover that you can place the glowing ball down and enter it
                as an entirely new world unfolds before you. Soon you’re hopping
                in and out of glowing balls, solving puzzles between them. While
                the puzzles start off straightforward, the game quickly picks up
                as you gain more worlds and eventually have to juggle three,
                then four different worlds to solve puzzles. It all culminates
                in the end with mind-boggling puzzles to wrap your head around
                new ways to interact with the world. Not to mention several boss
                battles that keep you captivated throughout the gameplay. All of
                this, with not a single word spoken or piece of text read after
                you leave the title screen. My only complaints with the game are
                that I wish it were longer and that I understood the story
                better, as the ending left me thoroughly confused. If you’re
                looking for a short game with puzzles that will make you feel
                like a genius, this game will scratch that itch.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>14</div>
          </div>
          <h1>Animal Well • May 2024</h1>
          <Image
            src={`/2024/AnimalWell.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Animal Well"
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
                One of the main things that makes indie games great is the
                feeling of dedication, thought, and love that developers put
                into them. This has never been more true than with Animal Well.
                It’s a gorgeous 2D Metroidvania where you play as a tiny blob
                exploring an underground area filled with puzzles and secrets.
                The game is set in a vast cavern, home to dozens of animals, all
                brought to life in a beautiful art style. Squirrels, cats, a
                kangaroo, a chameleon, penguins, and plenty of dogs are just
                some of the animals you encounter in the game. Each room in the
                game is thoughtfully designed with puzzles and secrets. Whether
                it’s a cute animal or a lamp in the background, everything in
                the game is added with purpose. Completing all the clever
                puzzles to reach the credits is a great experience in itself,
                but stopping there only scratches the surface. The secrets in
                this game go deeper and deeper. It’s so exciting to see a game
                that has so many underlying mysteries to uncover in the well. I
                do wish the game featured more music, aside from the sporadic
                ambient sounds. Nevertheless, I had a wonderful time uncovering
                every mystery I could find.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>13</div>
          </div>
          <h1>Neva • October 2024</h1>
          <Image
            src={`/2024/Neva.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Neva"
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
                People sometimes say that videogames are a form of art. That
                statement has never been truer for me than playing Neva this
                year. Neva is a puzzle-platform game developed by the same team
                behind Gris. The game can be completed in about 4 hours but that
                doesn’t lessen the impact it has on players. You play as a young
                woman named Alba, who ventures through the world with her wolf
                companion Neva. The puzzles are fun to solve, with some action
                sequences mixed in to keep the gameplay engaging. The star of
                the game is absolutely the artwork though. In the 4 hours I
                played the game, I took around 20 screenshots – more than I’ve
                taken in games I’ve spent 100+ hours on. Stunning stills of the
                mountain backdrops and dynamic action shots of Alba and Neva
                exploring the world together. The game also has an excellent
                soundtrack to accompany every awe-inspiring setting. Neva does a
                wonderful job telling a story without any text or dialogue. I
                had heard that the game’s story tugged at people’s heart
                strings, but I was skeptical that I’d care about the characters
                in such a short time. I was sorely mistaken, as I found myself
                in tears by the time the credits rolled. This game was clearly
                made with a distinct vision, and the developers never strayed
                from it. It’s neither too short nor too long. I can definitely
                see myself replaying the game just to experience its art and
                story again.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>12</div>
          </div>
          <h1>Final Fantasy VII Remake • April 2020</h1>
          <Image
            src={`/2024/Remake.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Final Fantasy VII Remake"
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
                Back in 2020 I kept hearing constant rumblings about Final
                Fantasy VII and how amazing it was, even though I had never
                actually played or seen it myself. So when the Remake came out,
                I had to know what the hype was all about. At the time, I didn’t
                own a PC or console that could play it, so I had to just watch a
                Let’s Play. That was enough to get me hooked on the story and
                characters, and the ending, especially, left me so excited and
                bewildered, that I had to know how the rest of the story played
                out. I bought the original FFVII on my switch and played through
                the entire game.
              </Typography>
              <Typography className={styles.typography}>
                Fast forward 4 years later, and I finally got a PS5. There were
                only two games on my mind that I NEEDED to catch up on
                immediately: Elden Ring and Final Fantasy VII Remake. I had so
                much fun getting to experience the game myself for the first
                time. The game does a great job fleshing out Midgar and
                introducing the player to the characters. The combat is really
                solid as well; they did a great job taking the original
                turn-based system and restructuring it to real-time combat
                instead.
              </Typography>
              <Typography className={styles.typography}>
                There were some slower parts of the game, and I didn’t get
                hooked into the sidequests often, but I admittedly rushed
                through the game so I could play Rebirth. Intermission was a
                really fun addition to the game as well. I had never actually
                seen the DLC, so I went into it completely blind. Yuffie is a
                wonderful character, and she has one of the best combat styles
                in the whole game. I skipped most of the Fort Condor quests, but
                I got my fair share of the game in Rebirth anyway.
              </Typography>
              <Typography className={styles.typography}>
                This game has so much charm and personality that I’m always
                excited to see more from all the characters. Exploring Wall
                Market with Aerith, grappling through the air with Tifa and
                Barrett, and simply exploring Midgar as a Wutai ninja bring so
                much joy. Not to mention all the fantastic newcomers to FFVII. I
                love Roche and Jonny and everyone else this game brought to
                life. I will say, though, I’m conflicted about the remakes being
                separated into 3 games. I almost wish Remake and Rebirth were
                combined, as Remake feels just a little too short, but I also
                understand why they needed to be split up. Plus, we definitely
                wouldn’t have gotten such a deep dive into Midgar had they been
                combined.
              </Typography>
              <Typography className={styles.typography}>
                One last thing: I’d be remiss if I didn’t mention the phenomenal
                soundtrack. Every single song has been upscaled beyond measure,
                and I can – and have – listened to the OST for days on end.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>11</div>
          </div>
          <h1>Baldur’s Gate 3 • August 2023</h1>
          <Image
            src={`/2024/BaldursGate.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Baldur's Gate 3"
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
                Baldur’s Gate 3 is a triumph in role-playing games of this
                generation. There has never been a game that offers a degree of
                freedom even close to that in Baldur’s Gate 3. I think it’s
                nearly impossible to have the exact same experience as anyone
                else playing; it’s a game where everyone’s experience can be,
                and often is, vastly unique. While the game doesn’t feature the
                same enormous open world as Breath of the Wild or Tears of the
                Kingdom, it makes up for it in depth. Every Act, every city,
                even every building is filled to the brim with places to
                explore, secrets to discover, lore to learn, and conversations
                to be had. This is a game that not only lets you play however
                you want, it also incentivizes you to want to go back and play
                every possible outcome of a scenario. While most open-world
                games end once you’ve explored every nook and cranny, this game
                has near infinite replayability to see everything it offers
                again from a different perspective.
              </Typography>
              <Typography className={styles.typography}>
                With so much going on in the game, I knew this would be a huge
                game to get through. I ended up playing it over the span of four
                months, while still playing some other games in between. It was
                a rough start at first for me. Dungeons & Dragons’ combat style
                is especially ruthless at the beginning of the game since you’re
                at such a low level. I died repeatedly in many encounters.
                Normally, this wouldn’t be an issue for me; I can get over a
                skill issue and just get good. The combat felt particularly
                frustrating because it didn’t seem like a skill issue half the
                time. My characters would get unlucky, fail a dice roll, and
                miss half their attacks while the enemy landed every hit. Even
                with karmic dice toggled on, I still barely felt like they were
                doing anything to help my luck. After several failed combat
                encounters, I was beyond done with the game’s combat, but I
                forced myself to see the game through anyway. Once I got past
                Act I and moved into Acts II and III, the combat became much
                more manageable. Suddenly, I wasn’t losing encounters due to bad
                luck, but because I’m bad at videogames, which is perfectly
                fine.
              </Typography>
              <Typography className={styles.typography}>
                I’m glad I stuck with the game because everything after Act I
                was incredible. I loved the cohesiveness and overall feeling of
                the Shadow-Cursed Lands, and Baldur’s Gate in Act III is without
                a doubt one of the most involved and well thought-out cities in
                any game I’ve played. The game features a fun cast of characters
                to accompany you (even though I only met half of the party in my
                playthrough), and the music enhances every event perfectly. I
                had a few other complaints with the game, such as the movement
                speed feeling too slow and the game giving little weight to some
                important events, but they’re mostly overshadowed by the game’s
                memorable moments. From killing Ansur with only three characters
                to running out of the Githyanki Creche after stealing the Blood
                of Lathander, there are countless moments I look back on fondly.
                By the time I beat the game, I was ready to start a new
                playthrough as a new character and witness some of the moments I
                missed, such as seeing some of the party members I barely met.
                Perhaps I’ll do another 120-hour playthrough someday, especially
                with crossplay coming in patch 8.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>10</div>
          </div>
          <h1>Rhythm Heaven Fever • July 2011</h1>
          <Image
            src={`/2024/RhythmHeaven.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Rhythm Heaven Fever"
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
                I love music, and I especially love video game music. It’s odd,
                then, that I’ve hardly played any rhythm games. While I’ve heard
                many great things about the Rhythm Heaven series, I never had
                the opportunity to play any of the games. You can bet that once
                I had the chance to play Rhythm Heaven Fever, I was all in. Now
                was my chance to prove that all the music I listen to has given
                me a good sense of rhythm.
              </Typography>
              <Typography className={styles.typography}>
                Or so I hoped.
              </Typography>
              <Typography className={styles.typography}>
                Rhythm Heaven Fever is a collection of fun and quirky rhythm
                minigames that test how well you can keep up with and switch
                rhythms. The game does a great job keeping you locked in and
                wanting to beat minigames to see everything it has to offer –
                and it has A LOT to offer. It has 50 main minigames to play,
                with several unlockable and multiplayer minigames to dive into
                as well. Every minigame starts with a practice mode to help you
                learn the rhythms. What the game doesn’t tell you is that every
                minigame has a twist once you get comfortable with the rhythm.
                Sometimes it blocks the screen so you can’t see the visual cues.
                Other times it changes up the rhythm, keeping you on your toes.
              </Typography>
              <Typography className={styles.typography}>
                I had a blast unlocking every new minigame and learning not only
                what the song/rhythm was but also discovering what tricks the
                game had up its sleeve each time. Some of my favorites were the
                seals and Captain who belts out random numbers to confuse you,
                and the full-screen story synopsis during Samurai Jack’s levels.
                The game has so many cute and entertaining ideas, and the
                remixes provided a great challenge to truly test how well I knew
                the songs.
              </Typography>
              <Typography className={styles.typography}>
                I went back and earned a Superb rating on every main level, both
                as an excuse to hear the songs again and to ensure I truly could
                follow every rhythm. Perfecting every level is beyond me,
                though; I think I’d go insane by level 9. This game is imprinted
                into my mind. I can recite every song at any moment, and I see
                the rhythms in places where I’m not even supposed to. This game
                has great replayability potential, as I repeat Remix 10 in my
                head at least once a day since beating it.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>9</div>
          </div>
          <h1>Portal 2 • April 2011</h1>
          <Image
            src={`/2024/Portal2.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Portal 2"
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
                I had a great time with the first Portal game, and I immediately
                jumped into Portal 2 after finishing the first game. I expected
                a similar experience to the first game. A short 4-hour game with
                little story and just some more portal puzzles for me to solve.
                I underestimated how much more Portal 2 had to offer.
              </Typography>
              <Typography className={styles.typography}>
                Portal 2 took me over double the amount of time it took me to
                beat the first game. It did, of course, have more portal puzzles
                to solve, but the puzzles here felt much more fleshed out and
                with a ton of new ideas implemented. Where I was most wrong,
                however, was the story. Portal 2 has only about 3 characters
                that you hear from during the game. Yet those 3 characters
                elevate the portal experience to a whole new level. GlaDOS’s
                dialogue is just as sharp as in the first game, with new secrets
                discovered about her throughout. Cave Johnson is this wild
                eccentric character who reveals much about the Portal world.
                Wheatley is one of my favorite characters in gaming. Built to be
                an idiot, he is a perfect addition to bounce off GlaDOS and keep
                the game engaging throughout.
              </Typography>
              <Typography className={styles.typography}>
                This is by far the best puzzle game I played this year, and I
                now fully understand why people consider it one of the greatest
                games of all time.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>8</div>
          </div>
          <h1>Pizza Tower • January 2023</h1>
          <Image
            src={`/2024/PizzaTower.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Pizza Tower"
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
                I once saw a comment under a YouTube video about Pizza Tower
                that said “Sometimes you play Pizza Tower, and sometimes Pizza
                Tower plays you.” I think about that comment often. Pizza Tower
                is, quite possibly, the most chaotic, anxiety-inducing game I’ve
                ever played. This game has absolutely zero chill, and it doesn’t
                pretend to. The gameplay moves at sonic speed, the artwork is
                intricately bizarre, and the music never dips below 200 bpm.
                Some of that may have been an exaggeration, but you get the
                idea. The name of the game in Pizza Tower is to get in and out
                of levels as fast as possible while also collecting pizza
                ingredients and maintaining a combo the whole way through. This
                may sound difficult… because it is. The highest score you can
                earn on a level is P rank, and I never earned a score above an
                A. While retrying levels over and over to perfect a combo isn’t
                quite my cup of tea, it’s not required at all to have a good
                time with the game. Every level offers a completely unique
                environment and mechanics to play around with. Flying around as
                a ghost being chased by a giant pillar, riding a giant rat
                through Pig City, and playing mini golf with a chunk of pizza
                dough are just some of the wacky moments I experienced while
                playing this game. I’m really bad at fighting the bosses in this
                game (because I’m bad at video games) but they were all so much
                fun to fight.
              </Typography>
              <Typography className={styles.typography}>
                I spent only about 5-6 hours playing this game total, but those
                5-6 hours were exhilarating. I frequently go back and play a
                level or two, just so I can get that adrenaline rush racing
                through the tower all over again. Every aspect of this game
                melds together spectacularly to create an exciting experience I
                can’t find anywhere else.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>7</div>
          </div>
          <h1>Black Myth Wukong • August 2024</h1>
          <Image
            src={`/2024/BlackMyth.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Black Myth Wukong"
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
                Being one of the most anticipated games of the year, I had to
                pick up Black Myth Wukong day one. It promised incredible
                real-time action combat, similar to that of FromSoftware games,
                with incredible environments and boss fights. It absolutely
                delivered on everything. This game had some of the best combat I
                played all year. The staff was such a unique weapon to fight
                with, and pairing it with so many options in the skill tree
                really allowed for a unique experience. The spells were all fun
                to use as well, though after I unlocked Spell Binder, I never
                really looked back. Wukong was a cool protagonist to play as,
                and the game features a bunch of fun characters to meet. Zhu
                Bajie and Xu Dog were among my favorites. Without a doubt, the
                bosses were the star of the game. The game features over 80
                unique bosses, each their own spectacle, with exciting mechanics
                and moves to learn. Non-Able, a boss whose hands are tied and
                fights you only with his legs; the bloodthirsty Tiger Vanguard;
                and the drunken, agile Scorpion Lord were just a few of the
                highlights of the game. While the game overall isn’t as
                difficult as a Soulsborne game, it didn’t detract from the fun
                of fighting each boss. The story didn’t grab me as much as I
                would have liked and there were several points in the game
                (especially in chapters 3 and 6) where the frame rate dropped
                significantly. However, I don’t have many complaints about the
                game apart from that. I hear the developers are going to drop
                more content for the game next year, and I’m excited to jump
                right back into it.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>6</div>
          </div>
          <h2>Paper Mario: The Thousand Year Door Remake • May 2024</h2>
          <Image
            src={`/2024/PaperMario.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Paper Mario: The Thousand Year Door"
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
                This is the game I played most recently. I’m still not actually
                done with the game; I still have a couple more chapters left to
                complete. However, since I already played the original and know
                how the story plays out, I figured I could confidently add this
                game to the list. In the 25 hours I’ve played so far, I think
                I’ve gotten a good grasp of all the remake has to offer on top
                of what the original offered (Since writing this, I’ve completed
                the remake, and I only have even more good to say about the
                game). I love the original game to death; the first three Paper
                Mario games are among my favorite childhood games. Having played
                the original already, I wasn’t super inclined to purchase the
                remake as soon as it came out, but over time, the desire to
                replay the game became stronger and stronger.
              </Typography>
              <Typography className={styles.typography}>
                The original Paper Mario: TTYD game serves as an incredible
                follow-up to the already amazing first game. It brings an
                exciting new world to explore, several fun new partners, and a
                great improvement to the combat system of the first game. This
                is one of the best remakes I’ve played recently. It brings back
                everything the original did well and adds several much-needed
                improvements to make the game even more enjoyable. The obvious
                facelift the game got is beautiful on its own, but where the
                remake really shines for me is the soundtrack. The original’s
                soundtrack is good, but it never really grabbed my attention
                like Paper Mario 64 and Super Paper Mario’s soundtracks did. The
                remake did an astounding job of taking the source material music
                and elevating it to a whole new level. Themes like Rogueport and
                Rogueport Sewers hardly ever crossed my mind, but now, with the
                remake, I can’t stop thinking about how good they sound. Every
                chapter now has its own unique battle theme, with a jingle at
                the beginning of the battle depending on if you get the first
                strike. Another great addition to the remake is the added
                central hub for revisiting all the chapters, which I think is a
                great solution to all the backtracking in the latter half of the
                game. This remake has been a super fun journey down memory lane,
                and I can’t wait to finish it and see everything else included.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>5</div>
          </div>
          <h1>Like A Dragon: Infinite Wealth • January 2024</h1>
          <Image
            src={`/2024/Yakuza.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Like A Dragon: Infinite Wealth"
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
                I had high expectations for this game, as it’s the first Yakuza
                game I’ve ever played. I expected a cool story about yakuza
                syndicates beating each other up over a criminal empire and an
                interesting perspective into what it’s like to be in the yakuza.
                The game delivered that to an extent, and so much more, though
                not at all in the way I expected. This ended up being one of the
                wackiest RPGs I’ve ever played.
              </Typography>
              <Typography className={styles.typography}>
                While the story is a prominent part of the game and kept me
                engaged the whole way through, that’s only half of the Yakuza
                experience. This game is filled to the brim with minigames, side
                quests, and even more minigames to play as you explore Hawaii
                and Japan. Mahjong, can collecting, UberEats driving, dating app
                simulator, fishing, poker, baseball, and A LOT of karaoke are
                just a fraction of the games I played throughout my time with
                Infinite Wealth. That doesn’t even mention the two biggest
                minigames the game offers. One is its own version of Pokémon
                called Sujimon, where you collect and level up wacky dudes to
                use to battle against other players in the world. There is
                literally an entire line of sidequests pertaining to this game
                alone, and while it’s fully optional, you would be missing out
                on the true Infinite Wealth experience if you skip it. The other
                even larger minigame is Infinite Wealth’s own version of Animal
                Crossing, called Dondoko Island. You are brought to a once
                extremely popular tourist island, now plundered by pirates and
                filled with trash. Your task is to return the island to its
                former glory by helping clean it up and add more attractions to
                incentivize people to visit. Out of the 80 or so hours I spent
                in the game, at least 6-8 hours went solely into building up my
                island to a 5-star attraction. It’s really cool to see how much
                totally optional content the creators stuffed into this already
                massive game, and it’s part of what makes this game special.
              </Typography>
              <Typography className={styles.typography}>
                Focusing back on the actual story, what really makes this game
                stand out is all the fantastic characters you meet throughout
                the journey. Ichiban Kasuga has solidified himself as one of my
                favorite video game heroes of all time. He’s a ‘lovable loser’
                who sees the best in everyone and always tries to do what’s
                right and help others. He is accompanied by Kazuma Kiryu and a
                handful of fun new and old characters, like Tomi, Chitose,
                Nanba, and Adachi. I had a great time meeting all the party
                members and learning more about their lives and personalities.
                There were a couple of party members that felt a little forced
                near the end of the game, but I still ended up liking them too.
                I just wish they had a bit more screen time. With such a large
                cast, the game also does a great job splitting up the party into
                manageable chunks so that it never felt like I was leaving
                anyone out. Aside from the protagonists, the game also has a ton
                of awesome villains you meet. Yutaka Yamai is one of my favorite
                villains this year in gaming, and the villains really felt like
                they were worthy antagonists the whole way through.
              </Typography>
              <Typography className={styles.typography}>
                There’s so much happening in this game; I’ve barely scratched
                the surface. Infinite Wealth ended up being nothing like I
                imagined it would be. It somehow mixes a serious story with such
                fun and silly minigames and mechanics throughout. The music also
                matches the vibes perfectly every time, whether it’s an intense
                battle or running through Honolulu city lights on a Friday
                night. I plan to play some of the other Yakuza games next year,
                starting with the first Like A Dragon (I’m already on Chapter
                3). Many of the Dragon Remembrances didn’t resonate for me since
                I don’t know much about Kiryu’s past, but I’m excited to learn
                more as I venture into the other games.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>4</div>
          </div>
          <h1>Balatro • February 2024</h1>
          <Image
            src={`/2024/Balala.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Balatro"
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
                A little-known fact about me is that I really enjoyed my time
                with Dragon Quest XI S, and I especially loved the casino in the
                game. I spent over 10 hours playing poker there over and over
                again. The combination of great casino music and the opportunity
                to double or nothing my winnings every time kept me hooked. I
                reached 1 million earnings, spent most of it, and went right
                back to poker. I don’t even enjoy real-life poker that much and
                barely understand how to play. I eventually moved on but never
                stopped thinking about that casino game. I’ve occasionally gone
                back to play it for an hour or so. I hadn’t found a good
                replacement for it anywhere.
              </Typography>
              <Typography className={styles.typography}>
                Then I discovered Balatro.
              </Typography>
              <Typography className={styles.typography}>
                I heard about Balatro for about 7 seconds in a TikTok video, and
                those 7 seconds convinced me to give it a shot. Balatro seems
                like ‘just another card game’ at first glance, which it
                technically is, but if you give it a shot, you quickly discover
                how the game sinks its teeth into you. You tell yourself you’re
                going to play a short 15-minute game, and then 15 minutes
                becomes 30, and 30 turns into an hour, and an hour becomes
                three. Time disappears when I play this game. I can’t tell you
                how many times this has happened to me. I get so caught up
                playing that I forget about everything else. There’s something
                so addictive about the game loop. Building your deck and jokers
                for the most optimal strategy, making it through Ante 8 and
                beyond. Balatro offers so much replayability through beating
                every deck at every stake, unlocking all the jokers, and
                completing all the challenges.
              </Typography>
              <Typography className={styles.typography}>
                My obsession with Balatro wasn’t bad… until I downloaded the
                app. Having the game one click away at all times has tripled my
                hours since the summer. I’m sure I’ll eventually reach a point
                where I’m satisfied and move on, but I haven’t reached it yet.
                With a big update coming next year, I may never reach that
                point. Balatro has been a pleasant surprise this year, and I’m
                glad I finally found something to replace the DQXI casino.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>3</div>
          </div>
          <h1>Bloodborne • March 2015</h1>
          <Image
            src={`/2024/Bloodborne.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Bloodborne"
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
                I’ve been a huge FromSoft fan ever since my suitemate and I
                conquered Dark Souls I, II, III, and Elden Ring together during
                college. There’s a certain satisfaction you get from killing
                every boss and surviving each grueling area as you play through
                these games that you can’t get anywhere else. As an avid
                internet user, I’ve heard countless things about this FromSoft
                game, Bloodborne. Without a console to play it on, I had to take
                everyone’s word on how great a game it is. I had a friend in
                college with a PS5, so I spent $10 on the game to try it out on
                his console. As per usual though, I got caught up in college and
                never made it past the second boss. Now that I had my own PS5, I
                finally had the chance to experience all of Bloodborne myself.
              </Typography>
              <Typography className={styles.typography}>
                In my opinion, Bloodborne’s weakest point is the bosses. There
                are a few standout bosses, like Father Gascoigne and the final
                boss, but overall, the bosses don’t stand out as much as in the
                other games. Since bosses are such a big component of Souls
                games, you’d think it would significantly impact the game’s
                experience. However, while Bloodborne doesn’t nail bosses, it
                does everything else incredibly well. Bloodborne’s dark, gothic,
                eldritch horror atmosphere is excellent, and it sets the mood
                for the entire game. The game isn’t inherently scary, but an
                unnerving feeling lingers as you traverse the regions. Central
                Yharnam is one of the best intro areas in the entire series,
                providing a great sandbox to learn enemies and combat
                navigation. Bloodborne’s combat has so much style as you dash
                side to side instead of rolling when locked onto an enemy. The
                gun is so satisfying once you learn how to parry attacks.
                Regaining your health for a short time after taking damage is a
                great addition, as it incentivizes aggression and heightens the
                game’s intensity. The costumes in this game are by far the best
                in the entire franchise. I usually don’t care about my
                character’s appearance in Souls games, but this game made me
                want to try out every outfit. In true Dark Souls fashion, the
                story was confusing yet captivating, and I happily listened to
                hours of YouTube documentaries on its deeper meaning.
              </Typography>
              <Typography className={styles.typography}>
                The Old Hunters DLC is one of the best parts of this game. While
                many of the main bosses didn’t impress me much, every single DLC
                boss was excellently crafted. Lady Maria, Orphan of Kos, and
                Ludwig, the Holy Blade, were some of my favorite boss fights in
                the entire game. The areas in the DLC were also just as fun and
                challenging to run through. Not to mention, the OST was just as
                good as any other game, including possibly the greatest boss
                fight soundtrack in all of Soulsborne. The chalice dungeons
                weren’t as interesting to run through, but they are completely
                optional. I enjoyed the game so much, though, that I went
                through every chalice dungeon to beat the final chalice dungeon
                boss and platinum the game. Bloodborne is an unexpected and
                excellent entry in FromSoftware’s catalog, and I’m now in the
                group of people begging for a PC remaster so more people can
                experience it.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>2</div>
          </div>
          <h1>Astro Bot • September 2024</h1>
          <Image
            src={`/2024/AstroBot.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Astro Bot"
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
                I was certain from the moment I watched the trailer in the
                PlayStation State of Play that Astro Bot would be a fantastic
                game. Sure enough, Team Asobi mastered 3D platforming with Astro
                Bot. This game takes what previous 3D platformers did right and
                builds on it while also taking what they did wrong and improving
                upon it. It has a stellar soundtrack and exciting levels to
                traverse, just like Super Mario Galaxy. However, it removes the
                life system, so if you die you respawn within seconds, never
                having to worry about a Game Over. It has similar abilities to
                Super Mario Odyssey and breathtaking visuals and audio design,
                just like Ratchet & Clank: Rift Apart. All of this, while almost
                never dropping below 60 FPS. It is by far one of the most (if
                not the most) polished games this year, so it’s understandable
                why it won Game of the Year at The Game Awards.
              </Typography>
              <Typography className={styles.typography}>
                More important than all of that, however, Astro Bot delivers on
                the wonderful dopamine rush I look for while gaming. From the
                second I started the first level, I had a smile on my face, and
                it didn’t leave the entire time I played the game. Astro Bot
                (the character) is such a cute little guy who’s just trying to
                save his friends and have a good time doing it. There are so
                many charming elements throughout the game, such as cutout
                boards where you can take a picture with all the level elements
                surrounding you. If you let Astro Bot turn around and look in
                your direction for a couple of seconds, he’ll smile and wave at
                you adorably. You can even toss around the bots you find in
                levels as they cheer and celebrate.
              </Typography>
              <Typography className={styles.typography}>
                Each level was made with such care to ensure they all feel fun
                and engaging. One part of the game I loved is that many levels
                have a ton of small little objects to play around with, like
                leaves or jewels. They serve no purpose other than to give the
                player something to mess around with as they run through a
                level, and it’s so fun! All the power-ups Astro Bot can equip
                are a blast and fun to use. My favorites were the stopwatch that
                slows down time, the sponge power that lets you soak up water,
                and the penguin backpack that makes swimming feel smooth as
                ever. Another subtle touch I appreciate, which may go unnoticed,
                is that if you fall back to the bottom of a vertical level by
                accident, the game adds a bird that flies you back to where you
                fell from, saving you from repeating the climb. It’s these tiny
                quality of life improvements, like this one, that elevate the
                game for me.
              </Typography>
              <Typography className={styles.typography}>
                The controls felt stable, smooth, and natural. The improvements
                made to Astro Bot’s movement are subtle at first, but going back
                to Astro’s Playroom, I realized just how much smoother and
                faster this game feels. Doing a spin attack and punching feels
                way swifter than in the first game. The haptics and sound design
                for the controller are also phenomenal. I love the pitter-patter
                rumble when you walk across metal or glass; it reminds me of the
                rumble when Amaterasu runs around in Okami. While the main
                levels aren’t particularly challenging, they are all still fun
                to run through and explore. There is challenge to be found if
                you take on the extra levels in each galaxy, so that wasn’t an
                issue for me at all. My only complaint is that I wish the game
                were longer (this is different from feeling a game is too
                short), but with new levels coming out the past couple of months
                since release, I can’t complain too much. I earned the platinum
                trophy for this game, and I’ve already started another file to
                100% the game AGAIN, simply because I love replaying all the
                levels. This game sets a high standard for 3D platformers moving
                forward, and I can only imagine what Team Asobi has planned next
                for my favorite lil’ guy.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>1</div>
          </div>
          <h1>Final Fantasy VII Rebirth • February 2024</h1>
          <Image
            src={`/2024/Rebirth.png`}
            className={styles.hero}
            border-radius="15"
            width="600"
            height="400"
            alt="Final Fantasy VII Rebirth"
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
                I enjoyed every game I played this year, but Final Fantasy VII
                Rebirth has stood out as my definitive number one game since I
                played it in June. I spent a lot of time asking myself, ‘Why?’
                What does Rebirth do so much better that I enjoyed it so much
                more than the other games? It has an incredible soundtrack, yes,
                but so does FFVII Remake and Astro Bot. It looks gorgeous, with
                incredible views and art direction. True, but Black Myth Wukong
                and Astro Bot are just as good. Baldur’s Gate 3 and Like A
                Dragon: Infinite Wealth have just as good a story, if not
                better, as Rebirth too. I love Rebirth’s combat, but I also love
                the combat in Bloodborne and Mario & Luigi: Brothership. After
                some reflection, I concluded that while Rebirth does all of
                these just as well as every other game, Rebirth made me feel
                more and feel stronger emotions than the other games.
              </Typography>
              <Typography className={styles.typography}>
                The characters are, by far, the star of the show in FFVII
                Rebirth. While I already liked each party member (Cloud,
                Barrett, Tifa, Aerith, Nanaki, Yuffie, Cait Sith, and even Cid
                and Vincent) from playing the original and Remake, Rebirth sold
                me on the characters even more. I got to spend time with each
                character individually to get to know them more personally.
                While they’re all fantastic characters on their own, they all
                connect and synergize with one another in a beautiful way. In
                almost all RPGs I play, there is a group of characters you meet
                and grow close with, but it is primarily the main character who
                interacts with the party members individually. In Persona 5
                Royal, you have a fantastic party, but they only ever really
                spend time with the main character. Same with Baldur’s Gate 3: a
                fun group of characters, but they don’t really interact with one
                another as much as they do with your character. They’ll interact
                to a small degree – a conversation here or there or commenting
                on someone else’s story moments. This isn’t a bad thing by any
                means, but Rebirth elevates its characters to a new level. Yes,
                everyone talks to Cloud and has their own dynamic with him, but
                that’s just the beginning. Tifa and Aerith are best friends,
                Barrett and Yuffie have an unspoken father/daughter-type
                relationship going on as they can both relate to missing their
                respective people. Aerith and Nanaki have a special connection
                to each other, since they can both feel the world speaking to
                them. Yuffie looks up to both Tifa and Aerith as older sisters.
                Nanaki and Yuffie bring levity to the whole party in hard times,
                and Tifa and Barrett both relate to coming from the same
                destroyed sector. Their relationships reminded me of how I felt
                playing The Witcher 3 and witnessing Geralt and Ciri’s
                relationship grow in the second half. While Cloud is the leader
                of the group, everyone is connected to each other in one way or
                another. This game is made into a masterpiece by how it fleshes
                out each character and their relationships with one another. It
                makes you feel like you are truly a part of the team and
                everyone is just as important as everyone else. I could go on
                listing out my favorite character-to-character moments (like
                Tifa and Aerith gossiping about Cloud or Barrett and Nanaki
                going through the Cosmo Canyon trials together), but I’ll leave
                it at that. This is without a doubt my favorite cast of
                characters in any game I’ve played. This relationship with the
                characters was pivotal for making me feel like I was part of
                their team and in making me feel more for the party than in
                other games. I felt every moment of joy, every moment of anger,
                every moment of sadness, and everything in between.
              </Typography>
              <Typography className={styles.typography}>
                As a remake, this game did an excellent job combining the new
                with the old. After the ending of the first remake, I wasn’t
                sure what direction the developers would take for this game. To
                my surprise, they followed the source material very closely,
                while still keeping many of the elements from Remake and adding
                its own elements as well. The story is just as fun and exciting
                as the original was. The game sometimes jumped from a heavy
                scene back into more light action a bit too quickly, instead of
                letting you sit with those emotions, but that’s a minor nitpick.
                The ending is a bit controversial too, but I don’t think it’s a
                big enough mistake that it detracts from everything else the
                game does well. Similar to Remake, they once again leave a lot
                of room open for speculation and theorizing until the final
                game. The game does an amazing job bringing to life so many
                places and moments from the original, and it has a great mix of
                fun, upbeat occasions and more serious, heavy events. At its
                core, this game has a central message about what it means to
                live and what it means to die that has stuck with me since I
                played it.
              </Typography>
              <Typography className={styles.typography}>
                FFVII Rebirth has my favorite combat this year. I wasn’t sure
                how much they could improve it over Remake’s already-great
                system, but they found a way. They added more attacks for air
                combat and new synergy abilities between party members. In many
                RPGs, the main character can feel like a necessity in combat,
                such as in Xenoblade Chronicles. You don’t have to have Shulk in
                your party at all times, but the Monado is so strong, you’d just
                make your life more difficult leaving him out. In Rebirth,
                however, every character feels overpowered and a good option to
                have in your party. Barrett is a powerhouse and great tank,
                Aerith has crazy strong magic and healing, and even Cait Sith is
                great for increasing stagger percentage. My endgame party
                consisted of Aerith, Barrett, and Nanaki and they felt just as
                good to use as if my party consisted of Cloud, Tifa, and Yuffie
                instead. It feels incredible to master the combat in this game,
                and I’m always itching to go back.
              </Typography>
              <Typography className={styles.typography}>
                The most controversial part of the game is the entire overworld
                and how repetitive completing all the various tasks in each
                region can feel. I understand where this sentiment comes from,
                but it just so happens that this is exactly the type of gameplay
                I enjoy. Right behind having a good soundtrack, I love games
                that give me a huge open world to explore. While getting all the
                Lifesprings and Remnawave Towers wasn’t particularly
                entertaining, they served as an excuse for me to run around each
                region and see every nook and cranny in the game. I loved riding
                around on my chocobo or driving the buggy to see each beautiful
                area hidden from the main story. There is also a great selection
                of minigames throughout the game. Queen’s Blood and Chocobo
                Racing are by far some of the best minigames I played this year,
                and it was exciting to see and find all the other minigames. Not
                all of them were home runs (I’m looking at you, Gears &
                Gambits), but the good far outweighs the bad. The score in this
                game sounds just as good as it did in Remake. It brings back so
                many beautiful songs while giving them a twist and adding
                equally excellent new tracks too.
              </Typography>
              <Typography className={styles.typography}>
                A couple of weeks ago someone released a 9-hour-long narrative
                analysis of FFVII Rebirth, and, believe it or not, I listened to
                the entire 9 hours. When I drove 20 hours cross country in the
                summer, over half of those hours were spent listening to
                discussions about every single aspect of this game. I have not
                stopped thinking about this game and its characters, and I’m
                dying to replay it every day. While I know this type of game
                isn’t for everyone, this game felt especially made for me.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <p className={styles.p}>
          Like many things in life, this ended up being a lot harder and taking
          a lot more time than I thought it would. I see now why people usually
          confine themselves to lists of 10 only. I definitely could have
          written even more about most of the games, but I think this is far too
          long already. Regardless, I’m glad I saw this through to the end.
          Whether you read all of it (wow), only read about the games you care
          about, or scrolled through it all and are just reading this, thank you
          for taking the time. If enough people are interested (and if I can
          muster the strength), I may do another page where I list out awards in
          a variety of categories. Let me know your favorite games you played
          this year! Have a wonderful 2025 :)
        </p>
        <p className={styles.sig}>Jose Folgar 12/31/2024</p>
        <ScrollToTop />
      </div>
    </div>
  );
}
