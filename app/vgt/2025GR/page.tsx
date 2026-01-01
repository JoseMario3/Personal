import React from "react";
import Image from "next/image";
import imageFiles from "@/data/2025.json";
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
  const signedUrls = await Promise.all(
    imageFiles.map(async (filename) => {
      const { data, error } = await supabase.storage
        .from("Images")
        .createSignedUrl(`2025/${filename}`, 60 * 60);
      if (error) {
        console.error(`Error for ${filename}:`, error);
        return null;
      }
      return { filename, url: data.signedUrl };
    })
  );

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
            have to rank them (for my own sanity nonetheless. Before getting
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
          didn’t have enough to say. Rather, I was struggling because I had{" "}
          <i>too much</i> to say.
        </p>
        <p className={styles.p}>
          Every time I imagined writing about a certain game, a million ideas
          came to mind. I wanted to dive into excruciating detail for each one –
          whether it was explaining why Jin Sakai is one of my favorite
          videogame protagonists ever, or why the Greenhouse is one the best
          rooms in <i>Blue Prince</i>. I was trying to condense discussions
          worthy of full journal entries, like my DKCR or OT2 write-ups, into
          just a few paragraphs for this ranking list.
        </p>
        <p className={styles.p}>
          With this realization, I now have a renewed vigor to try to complete
          my ranking, be it a few days later than planned. I’m limiting myself
          to <b>one paragraph</b> per game max, or two at most if absolutely
          necessary. I’m leaving the games I already wrote about untouched,
          since I still feel happy with how those turned out. With that preamble
          out of the way, let’s go over a few games I Did Not Finish (DNF).
        </p>
        <h1>Did Not Finish</h1>
        <h2>Death Stranding</h2>
        <p className={styles.p}>
          Death Stranding is a game I never had any intention of playing. It
          always looked uninteresting to me, and I’d never heard any coverage
          that made it sound like something I’d enjoy. Despite that,{" "}
          <i>Death Stranding 2: On the Beach</i> released this year, and in an
          effort to play every Game of the Year contender, I decided on a whim
          that I would play the original so I could eventually move on to the
          sequel.
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
        <h2>Xenoblade Chronicles X</h2>
        <p className={styles.p}>
          This one really hurts as a long-time fan of the <i>Xenoblade</i>{" "}
          series. The original <i>Xenoblade Chronicles</i> is my favorite game
          of all time, and X is the only entry in the franchise I haven’t fully
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
        <hr className={styles.separator} />
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>32</div>
          </div>
          <h1>Despelote • May 2025</h1>
          <Image
            src={signedUrls[0]?.url ?? ""}
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
              <Typography className={styles.typography}>The</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>31</div>
          </div>
          <h1>A Short Hike • April 2019</h1>
          <Image
            src={signedUrls[1]?.url ?? ""}
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
              <Typography className={styles.typography}>Astro’s</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>30</div>
          </div>
          <h1>Limbo • July 2010</h1>
          <Image
            src={signedUrls[2]?.url ?? ""}
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
              <Typography className={styles.typography}>This</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>29</div>
          </div>
          <h1>Inside • June 2016</h1>
          <Image
            src={signedUrls[3]?.url ?? ""}
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
              <Typography className={styles.typography}>It</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>28</div>
          </div>
          <h1>1000xRESIST • May 2024</h1>
          <Image
            src={signedUrls[4]?.url ?? ""}
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
              <Typography className={styles.typography}>I</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>27</div>
          </div>
          <h1>BallxPit • October 2025</h1>
          <Image
            src={signedUrls[5]?.url ?? ""}
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
              <Typography className={styles.typography}>I</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>26</div>
          </div>
          <h1>Pico Park 2 • August 2024</h1>
          <Image
            src={signedUrls[6]?.url ?? ""}
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
              <Typography className={styles.typography}>This</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>25</div>
          </div>
          <h1>Sayonara Wild Hearts • September 2019</h1>
          <Image
            src={signedUrls[7]?.url ?? ""}
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
              <Typography className={styles.typography}>Every</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>24</div>
          </div>
          <h1>Donkey Kong Country 2: Diddy Kongs Quest • December 1995</h1>
          <Image
            src={signedUrls[8]?.url ?? ""}
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

              <Typography className={styles.typography}>One</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>23</div>
          </div>
          <h1>Donkey Kong Country Returns • November 2010</h1>
          <Image
            src={signedUrls[9]?.url ?? ""}
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
              <Typography className={styles.typography}>People</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>22</div>
          </div>
          <h1>Yoshis Crafted World • March 2019</h1>
          <Image
            src={signedUrls[10]?.url ?? ""}
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
              <Typography className={styles.typography}>fasfds</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>21</div>
          </div>
          <h1>Mario Kart World • June 2025</h1>
          <Image
            src={signedUrls[11]?.url ?? ""}
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

              <Typography className={styles.typography}>Baldur’s</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>20</div>
          </div>
          <h1>Blue Prince • April 2025</h1>
          <Image
            src={signedUrls[12]?.url ?? ""}
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
              <Typography className={styles.typography}>I</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>19</div>
          </div>
          <h1>Inscryption • October 2021</h1>
          <Image
            src={signedUrls[13]?.url ?? ""}
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
              <Typography className={styles.typography}>I</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>18</div>
          </div>
          <h1>The Messenger • August 2018</h1>
          <Image
            src={signedUrls[14]?.url ?? ""}
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
              <Typography className={styles.typography}>I</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>17</div>
          </div>
          <h1>Hotline Miami Collection • October 2017</h1>
          <Image
            src={signedUrls[15]?.url ?? ""}
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
              <Typography className={styles.typography}>Being</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>16</div>
          </div>
          <h1>Split Fiction • March 2025</h1>
          <Image
            src={signedUrls[16]?.url ?? ""}
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
              <Typography className={styles.typography}>This</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>15</div>
          </div>
          <h1>Yakuza: Like A Dragon • January 2020</h1>
          <Image
            src={signedUrls[17]?.url ?? ""}
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
              <Typography className={styles.typography}>sup</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>14</div>
          </div>
          <h1>Hades II • September 2025</h1>
          <Image
            src={signedUrls[18]?.url ?? ""}
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
              <Typography className={styles.typography}>sup</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>13</div>
          </div>
          <h1>Ghost of Tsushima • July 2020</h1>
          <Image
            src={signedUrls[19]?.url ?? ""}
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
              <Typography className={styles.typography}>hola</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>12</div>
          </div>
          <h1>Persona 4 Golden • June 2012</h1>
          <Image
            src={signedUrls[20]?.url ?? ""}
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
              <Typography className={styles.typography}>Hello again</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>11</div>
          </div>
          <h1>The Last of Us Part I • June 2013</h1>
          <Image
            src={signedUrls[21]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>10</div>
          </div>
          <h1>The Last of Us Part II • June 2020</h1>
          <Image
            src={signedUrls[22]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>9</div>
          </div>
          <h1>Ghost of Yotei • October 2025</h1>
          <Image
            src={signedUrls[23]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>8</div>
          </div>
          <h1>Elden Ring Nightreign • May 2025</h1>
          <Image
            src={signedUrls[24]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>7</div>
          </div>
          <h1>Octopath Traveler 2 • February 2023</h1>
          <Image
            src={signedUrls[25]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>6</div>
          </div>
          <h1>Deltarune • June 2025</h1>
          <Image
            src={signedUrls[26]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>5</div>
          </div>
          <h1>Lorelei and the Laser Eyes • May 2024</h1>
          <Image
            src={signedUrls[27]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>4</div>
          </div>
          <h1>Donkey Kong Bananza • July 2025</h1>
          <Image
            src={signedUrls[28]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>3</div>
          </div>
          <h1>Persona 3 Reload • February 2024</h1>
          <Image
            src={signedUrls[29]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>2</div>
          </div>
          <h1>Clair Obscur: Expedition 33 • April 2025</h1>
          <Image
            src={signedUrls[30]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.entry}>
          <div className={styles.numbered}>
            <div className={styles.number}>1</div>
          </div>
          <h1>Hollow Knight Silksong • September 2025</h1>
          <Image
            src={signedUrls[31]?.url ?? ""}
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
              <Typography className={styles.typography}>hello</Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <p className={styles.p}>Have a wonderful 2026 :)</p>
        <p className={styles.sig}>Jose Folgar 12/31/2025</p>
        <ScrollToTop />
      </div>
    </div>
  );
}
