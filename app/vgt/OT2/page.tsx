import ScrollToTop from "@/components/ScrollToTop";
import BackButton from "@/components/BackButton";
import styles from "./index.module.css";
import Image from "next/image";

export default function games() {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <BackButton />
        <h1 style={{ fontSize: "3rem", color: "var(--BLUE)" }}>
          Octopath Traveler 2 Retrospective
        </h1>
        <Image
          src={`/OT2/octopath2.jpeg`}
          className={styles.hero}
          border-radius="15"
          width="800"
          height="500"
          alt="Octopath Traveler 2"
        ></Image>
        <hr className="separator" />
        <h2 className={styles.h2}>Overdue</h2>
        <p className={styles.p}>
          Although it would make more sense to talk about the recent release
          <i> Octopath Traveler 0</i>, I am regrettably behind the times and
          haven’t gotten to play it yet. I’m slowly catching up, however, and I
          want to talk about its predecessor instead: Octopath Traveler 2. I had
          been excited to play it ever since it was announced in 2022, and even
          more encouraged after seeing all the great reviews it received.
          Despite my eagerness, I was well-aware that this game would be a
          massive JRPG that I’d need to make time for. With so many other games
          already in my backlog, I wasn’t in a rush to play it. With that in
          mind, I left the game in my wishlist, keeping an eye out for any good
          sales. The stars aligned earlier this year, however, when I finally
          found a fantastic sale on the game and hit purchase. Despite a
          still-long list of games I wanted to beat in 2025, I managed to put 65
          hours into it. Before I get into my full thoughts on Octopath Traveler
          2, I want to talk about my experience with the original game, Octopath
          Traveler.
        </p>
        <p className={styles.p}>
          I have a love/hate relationship with the original Octopath Traveler
          (OT). When I played it on Switch back in 2019, I was instantly
          enthralled by the game’s incredible soundtrack and captivating combat.
          Until then, most of my turn-based combat experience came from the
          Mario & Luigi and Paper Mario series. I loved how Octopath Traveler
          expanded the turn-based formula I was used to. Discovering enemy weak
          points so I could break their shields and deal more damage forced me
          to slow down and analyze each encounter. This was elevated even more
          due to every character only having access to certain weapons and
          attacks: I needed to approach every battle differently depending on
          who was in my party at the time. Managing Boost Points (BP) added
          another layer of complexity to the combat. Should I use my BP to hit
          several times and break the enemy’s shields sooner, or should I hold
          on to it so I can do massive damage later? All of this combined with
          the stellar soundtrack and entertaining bosses made Octopath
          Traveler’s combat systems one of my favorites ever.
        </p>
        <p className={styles.p}>
          Unfortunately, the entire experience wasn’t all positive. As much as I
          enjoyed the combat, I eventually got overwhelmed with the number of
          battles I was required to do. Random encounters have never been my
          favorite mechanic in games, but I can usually overlook it. By the
          middle of the chapter 3s, I was fatigued by constant battles. It also
          didn’t help that I was never engaged in the characters’ stories. I
          vaguely remember enjoying each character’s introduction, but a
          ~4-month hiatus from the game right in the middle of everyone’s
          chapters meant I could barely remember what was happening. Despite my
          indifference towards all the stories, I still completed all of them,
          but I skipped nearly all the dialogue and focused on defeating the
          bosses instead. As for the true final boss, I attempted it a total of
          one 1 ☝️ time. I quickly accepted defeat once I realized how long I’d
          need to grind levels before having a chance at beating it. My divided
          thoughts on Octopath Traveler left me wanting another game that
          resolved my issues with it, and my prayers were answered with its
          sequel.
        </p>
        <Image
          src={`/OT2/throné.jpg`}
          className={styles.hero}
          border-radius="15"
          width="642"
          height="402"
          alt="Throné's 1st Chapter"
        ></Image>
        <h2 className={styles.h2}>Choose your Character</h2>
        <p className={styles.p}>
          My Octopath Traveler 2 (OT2) journey began with the stoic thief,
          Throné. I loved Therion’s ‘steal’ ability in OT, so I knew I wanted to
          start with the Thief job. Throné set the bar high with her story of
          escaping the cycle of death her parents had shackled her to; I knew
          right away I had made a good decision choosing to start with her.
          Fortunately, Throné’s story was only the beginning as I’d soon learn
          that every character had an engaging story this time around. After
          completing Throné’s first chapter, I promptly set off in search of the
          rest of the travelers, obtaining Temenos, Osvald, Ochette, Castti,
          Hikari, Partitio, and Agnea. My renewed determination to appreciate
          every story, combined with the writers going all out, ensured I was
          hooked on every character’s story. Some of my favorite intro chapters
          were Osvald’s, the Scholar wrongfully imprisoned on a remote island
          for the deaths of his wife and daughter, and Hikari’s, the Warrior
          banished from his kingdom as it is overthrown by his malevolent
          brother. I appreciated the wide range of all eight stories; the mix of
          more lighthearted stories, like Agnea’s or Partitio’s, served as a
          good shift from the darker stories, like Osvald and Throné. A minor
          detail I also appreciated was how the developers didn’t stick to the
          “eight travelers, four chapters each” formula. Every character had a
          varying number of chapters, whether it was multiple route options or
          simply having a fifth chapter. Osvald, for example, has his first two
          chapters as soon as you meet him, but he ends up having a fifth
          chapter. Ochette only has three chapters, but her second chapter has
          three different routes so she technically has five chapters. Partitio
          fully had his own ‘sidequest’ chapters that helped flesh out his
          character. Not every route or chapter had a boss at the end, which I
          welcomed since it added a bit of realism to their stories. Overall,
          the intro chapters for every character successfully got me excited for
          the journey ahead.
        </p>
        <Image
          src={`/OT2/final3.png`}
          className={styles.image}
          border-radius="15"
          width="642"
          height="402"
          alt="Octopath Traveler 2 Game Loop"
        ></Image>
        <h2 className={styles.h2}>Tactful Interactions</h2>
        <p className={styles.p}>
          I’m a big fan of Octopath Traveler’s bite-sized game loop. The cycle
          of exploring towns, completing a chapter, and then navigating to the
          following town only takes about 1-1.5 hours to loop. Unlike other RPGs
          where I feel the need to set apart 3-4 hours to really get invested,
          it’s easy to convince myself to commit to a single game loop for an
          hour or so. I’d rarely play for only an hour though. It’s similar to
          Persona, where I tell myself I’ll only play a couple in-game days, and
          then I end up playing an entire month instead. Although it seems like
          a minor endeavor, using each character’s abilities in each town is one
          of my favorite parts of the game. Throné’s <i>steal</i> ability is one
          of my favorites. Every NPC in town has items on them, and you have a
          percent chance of stealing it from them depending on how rare the item
          is. You can also use Partitio’s <i>purchase</i> ability to simply buy
          items off a person, but I prefer to gamble on chance. I’m not
          convinced that the stealing percentages are accurate (I’ve failed an
          80% chance too many times), but I need to do more research into it.
          The rest of the abilities from the first game all return, but new
          abilities are introduced as well thanks to the brand new day/night
          cycle. The day/night cycle made each town even more involved than the
          first game. Every character now has different abilities depending on
          the time of day. In addition to Osvald’s daytime ability to{" "}
          <i>scrutinize</i> NPCs, at night he’s also able to <i>mug</i> NPCs –
          challenge them in combat to take their belongings. These new abilities
          come on a spectrum from ‘always useful’ to ‘quest specific.’ For
          example, I would use Agnea’s <i>entreat</i> ability every chance I got
          to receive useful items from NPCs, but I would only use Temenos’s
          <i>coerce</i> ability when absolutely necessary. The minor overlap in
          some characters’ abilities urged me to think twice about how I
          approached every person in the town. Is it worth it to spend 10,000
          leaves for Hikari to <i>bribe</i> info out of a character, or is there
          a chance Castti can <i>inquire</i> from them for free? Several of the
          playable characters are also able to summon NPCs to aid in battle,
          whether it be through the <i>guide, befriend, allure,</i> or{" "}
          <i>hire</i> abilities. Each town comes with a few sidequests to
          optionally complete, and they usually require using one of the
          characters’ abilities to solve a problem. From completing sidequests
          to using abilities on NPCs, shopping, and unlocking hidden chests,
          there was a plethora of things to do in every town before I even
          commenced a chapter.
        </p>
        <h2 className={styles.h2}>Outstanding Views</h2>
        <p className={styles.p}>
          In addition to the wonderfully intricate cities, the rest of the
          overworld is just as interesting to explore. Every region comes with
          its own scenery, music, enemies, and secrets to uncover. The gorgeous
          HD-2D art style from OT returns in all its glory. The verdant green
          Leaflands, snowy Winterlands, and seaside Harborlands are all fully
          fleshed out and beautifully designed, making each environment visually
          stunning to look at. I’ll never forget roaming the Leaflands, crossing
          a bridge in front of a waterfall with a striking rainbow in the
          background. There were so many moments where I just stopped in awe of
          the world. The dynamic lighting in every area feels intentional,
          adding a distinct atmosphere to each location. The beauty doesn’t end
          on land. A bit over halfway through the game, you set sail across the
          ocean between the western and eastern continents. There are new
          enemies and bosses to defeat along with several islands and piers
          where you can anchor your ship. To top it all off, the entire feel of
          a region shifts once you flip to nighttime. The lighting changes from
          sunlight to moonlight, with various lamps or campfires to light the
          path. This is one of the most immersive pixel worlds I’ve ever delved
          into, and I believe the developers without a doubt mastered the HD-2D
          art style.
        </p>
        <Image
          src={`/OT2/rainbow.png`}
          className={styles.image}
          border-radius="15"
          width="642"
          height="402"
          alt="Leaflands rainbow"
        ></Image>
        <h2 className={styles.h2}>Protecting the Peace</h2>
        <p className={styles.p}>
          When I started the original game doing Ophilia’s story, I struggled to
          complete her chapter since she was my only party member going up
          against two to three enemies at a time. I beat her 1st chapter boss
          eventually, but it was by the skin of my teeth and only after dying
          several times. I ran into this issue with a few other characters,
          since all of their first chapters require playing by themselves. I was
          pleased to see OT2 tackled this issue right out of the gate. Every
          character is either given access to a summon or has their own party
          members to aid them in their first chapter, so you aren’t forced to do
          any fights alone. This is just one of the ways OT2 improves an already
          amazing battle system. The turn-based combat keeps all the mechanics I
          loved from OT, such as job skills, Boost Points, and shield breaking.
          Every job now has a mix of returning skills, like the Hunter’s Leghold
          Trap, and brand new skills, like the Warrior’s Aggressive Slash.
          Swapping secondary jobs is still a vital part of the combat, and it’s
          been made even more seamless due to the addition of licenses. By
          completing guild tasks, you can obtain up to three licenses for each
          job, which means you can have an entire party of Warriors! I didn’t go
          out of my way to collect multiple licenses for every job, since I
          usually only wanted one of every job type in my party at a time. The
          character-specific EX skills you can unlock were interesting to find,
          but I didn’t end up using them often – especially since the second EX
          skill was only unlocked after completing a character’s story.
        </p>
        <p className={styles.p}>
          Character-specific abilities return in this game, but most of them
          have been tweaked. One of the biggest reworks is Castti’s{" "}
          <i>concoct</i> skill. In OT, Alfyn had access to dozens of herbs and
          was able to attack using every element, making him extremely
          overpowered with so many options to choose from. In OT2, Castti only
          has access to Wind, Light, and Dark elements, with a bigger emphasis
          on buffs/debuffs during battle. I think it was a good move to nerf the
          apothecary skill, while also giving her lots of synergy with other
          party members. Throné and Temenos both have nighttime-specific
          abilities, buffing the party and debuffing enemies respectively.
          Osvald’s Scholar ability to view one of an enemy’s weaknesses reigns
          supreme at the start of combat. The summon abilities are cute
          sometimes, but I usually would rather use a regular attack than spend
          a turn calling an NPC. This is not to be confused with Ochette’s
          Pokémon-esque <i>capture</i> ability that is still a lot of fun. OT2
          introduces a fully new mechanic called Latent Power. Every character
          is given their own latent power that can be used once charged. I won’t
          list them all here, but some of my favorites are Throné’s power to
          immediately get a second turn and Partitio’s power to instantly
          receive max BP. My least favorite of the latent powers is probably
          Agnea’s power to make single target attacks hit all enemies, only
          because it isn’t as relevant during boss battles with a single target.
          These latent powers add <i>another</i> layer of complexity to an
          already involved combat system and make each battle even more
          engaging.
        </p>
        <p className={styles.p}>
          For all the praise I give OT2’s battle system, the most glaring gripe
          I have with the game is its difficulty. One of the aspects I loved
          about the first game’s combat was how difficult it was. I loved the
          chapter and advanced job bosses – they were always tough, forcing me
          to pull out every trick in the book and making each battle more
          exhilarating. In OT2, I barely struggled with any bosses. I gave the
          first couple chapter bosses a pass since it was still in the early
          game, but as I got deeper into the game, I noticed it wasn’t becoming
          particularly more challenging. I haven’t looked into other people’s
          reviews, but this could be because I never skipped any battles, unlike
          the first game. As I mentioned previously, I started speedrunning the
          first game to get it over with as soon as possible, meaning I was
          under-leveled for many fights. For OT2, however, I was much more
          patient, doing every battle and ensuring that I stayed around the
          recommended level for each chapter. It didn’t help that I could never
          remove Throné from my party, so she was always ten or more levels
          above the rest of the travelers. I think the difficulty issues also
          partially come from balancing issues, with attacks like Enervating
          Slash and Aeber’s Reckoning doing massive amounts of damage,
          one-shotting most chapter bosses. Partitio’s Hired Help skill is also
          really strong, since the strongest attack only costs 30,000 leaves
          (chump change in the late-game), and deals nearly 40,000 damage. Every
          boss was basically pay-to-win. All of my complaints with the
          difficulty are rather minor since I still had a good time battling
          enemies, and there were still a few bosses that gave me more than
          enough trouble.
        </p>
        <Image
          src={`/OT2/concoct.jpg`}
          className={styles.image}
          border-radius="15"
          width="642"
          height="402"
          alt="Castti using her Concoct ability in battle"
        ></Image>
        <h2 className={styles.h2}>Attuned to the Melodies</h2>
        <p className={styles.p}>
          As some of you may already know, the most important aspect of any game
          I play is its music, and Octopath Traveler 2 has one of the most
          impressive soundtracks I’ve heard in a videogame. The game’s official
          OST on Spotify hosts a total of 131 tracks. I’m obsessed with so many
          tracks in the game. The first track that really caught my attention
          was the boss theme Critical Clash II, since it instantly made the
          chapter bosses more intense. The main theme perfectly captures the
          feeling of embarking on an ambitious journey, and I think it sounds
          similar to the first game’s main theme while still keeping its own
          personality. I also fell in love with nearly all the overworld themes.
          Leaflands, Harborlands, Seaside Town, and A Verdant Wind Blows are all
          mainstays in my videogame music rotation, beautiful melodies that make
          their areas come to life. Every location also comes with a -Night-
          version of the track – a more somber version with majestic vocals to
          back them up. There have been several days at work where I just let
          the soundtrack play from beginning to end, moving through every
          region. The best part of the soundtrack in my opinion is the character
          motifs. All eight characters have their own themes that usually play
          at the end of their chapters. Each traveler has a ‘theme’ connect to
          and describe their story: Ochette/Legends, Castti/Memories,
          Throné/Freedom, Osvald/Revenge, Partitio/Happiness, Agnea/Hope,
          Temenos/Truth, and Hikari/Kingship. These story themes are used in a
          more dramatic version of their tracks, called “In Pursuit of
          <i>
            <u> Legends/Hope/etc.</u>
          </i>
          ” These motifs are also used in their final boss themes, aptly named
          “The Journey for
          <i>
            <u> Freedom/Truth/etc Ends.</u>
          </i>
          ” I get a burst of serotonin every time I hear their motifs in the
          endgame. I could go on and on talking about my favorite tracks from
          this game, but I’ll finish here by saying my current top 3 songs from
          OT2 are Song of Hope, Critical Clash II, and Those Who Deny the Dawn.
        </p>
        <h2 className={styles.h2}>Traveling Together</h2>
        <p className={styles.p}>
          A satisfying ending is difficult to achieve in any narrative, and the
          structure of this game demanded a fulfilling finale eight times over.
          In Ochette’s final chapter, she returns to Toto’haha with the
          legendary creatures in tow, ready to protect the island from impending
          doom. Her ultimate opponent is either the ferocious beast Lajackal or
          the imposing avian Malamaowl, depending on which one she didn’t choose
          at the start of her story. She discovers that the creature has been
          seething with envy and frustration ever since it was overlooked. After
          a lengthy battle between Legends, the beastlings and humans unite to
          defend their home and agree to work together forevermore. Meanwhile,
          on the other side of the world, Osvald finally catches up to Harvey to
          exact his Revenge and rescue his daughter, Elena. Both having
          uncovered their own versions of the “One True Magic,” they engage in
          an intense showdown to determine whose power is genuine. Harvey is
          ultimately consumed by dark magic and defeated, while Osvald
          triumphantly walks away with Elena. He leaves her in the care of his
          assistant before returning to the world at large. Initially, I didn’t
          like that his story ended without him speaking to Elena in the
          aftermath, but after completing the game’s final quest, I understand
          the choice.
        </p>
        <p className={styles.p}>
          Castti’s third chapter concludes with the recollection of her Memories
          in one of the most heartbreaking scenes in the game. We learn that her
          longtime friends in Eir’s Apothecaries all sacrificed their lives to
          save Castti from Trousseau’s poisonous rain, allowing her to find a
          cure to save the rest of the world. With that gut-punch of an ending,
          Castti’s final chapter picks up in the city of Timberain, Trousseau’s
          next intended target. After evacuating the city, the party confronts
          him on a rooftop, with his toxic smoke already filling the air. This
          battle was by far the most difficult for me of all the final bosses.
          Trousseau has massive health and several powerful concoctions that
          damage the entire party. On top of that, the toxic rain slowly reduces
          the travelers’ max health, creating a tense urgency to finish the
          fight quickly. Trousseau meets a fitting end when Castti concocts one
          final mixture that neutralizes the effects of his poison rain. At
          last, Castti can breathe a sigh of relief, knowing the world is safe
          from Trousseau’s malice and her friends’ sacrifices were not in vain.
        </p>
        <Image
          src={`/OT2/CasttiFinale.JPG`}
          className={styles.image}
          border-radius="15"
          width="642"
          height="402"
          alt="Castti's final battle versus Trousseau"
        ></Image>
        <p className={styles.p}>
          In a staggering feat, Partitio amasses 38 <i>billion</i> leaves to
          purchase Roque’s steam engine. Unsurprisingly, Roque refuses to hand
          it over and uses the world’s first steam train to attack the
          travelers. The party manages to give him a thorough beating, and
          Partitio finally convinces Roque of his erroneous ways. With his heart
          changed, Roque joins Partitio in forming the Partitio & Roque Company,
          making the steam train accessible across all of Solistia and spreading
          Happiness far and wide. Meanwhile, Temenos’s pursuit of the Truth
          reaches its climax in his final chapter. After Crick’s tragic death,
          he left behind a crucial clue that guides Temenos to Kaldena, captain
          of the Sacred Guard. She had been masquerading as a member of the
          local religion, the Order of the Sacred Flame, with plans to use the
          Book of Night to summon the Shadow. Temenos confronts her
          now-monstrous form in a desolate cave, and she is ultimately
          vanquished after losing control of the Shadow’s power.
        </p>
        <p className={styles.p}>
          We return to Hikari’s hometown of Ku in his final chapter, where he
          seeks to reclaim the city from his brother, Mugen, once and for all.
          All the allies Hikari has gathered throughout his journey rally at his
          side, fighting through Mugen’s forces so the travelers can reach him.
          The climactic showdown against Mugen unfolds across three phases, each
          more demanding than the last. Amid the chaos, Hikari is forced to
          confront the Shadow within himself in a decisive duel for his mind.
          Against all odds, Mugen is defeated and Ku is liberated from his
          tyranny – a fitting beginning to Hikari’s Kingship. Across the ocean,
          Agnea takes the stage against Dolcinaea to determine who truly
          deserves the spotlight. Dolcinaea’s battle introduces several
          inventive twists, summoning the audience to aid her and even luring
          party members to her side. In the midst of the performance, Agnea
          unveils her Song of Hope – the song she’s been composing throughout
          her journey. Her singing replaces the standard final boss theme during
          Dolcinaea’s second phase and ultimately carries the party to victory,
          cementing Agnea as the greatest star in Solistia. I wasn’t convinced I
          would enjoy Agnea’s story in its early chapters, given its simple
          premise. However, I was won over by her unwavering determination to
          show the world how vital it is for Hope to shine, even in the face of
          overwhelming darkness.
        </p>
        <p className={styles.p}>
          Throné’s final chapter is by far the most disturbing of all eight
          travelers. After retrieving both keys from her parents, she returns to
          her hometown in search of her true father. Those keys open a hidden
          passage leading to Lostseed, an isolated and deeply unsettling town
          shrouded in fog and populated by ghostly husks known as “vessels.”
          Within Lostseed’s castle, the travelers encounter Claude, a
          silver-haired, egotistical sociopath who has lived for centuries. He
          reveals himself as Throné’s true father and the progenitor of dozens
          of her Blacksnake brethren. Claude spent his long life impregnating
          countless women in a cold, obsessive attempt to create a vessel
          capable of killing him, showing no regard for the lives he destroyed
          along the way. Enraged and repulsed, Throné and the others confront
          him in battle. Claude proves to be a nightmarish foe, capable of
          shackling the party’s primary jobs and tormenting Throné with phantoms
          from her past. Even so, his cruelty is not enough to stop the
          travelers. They defeat him, proving that Throné was the vessel he had
          been waiting for all along. After Claude’s death, Throne finds the
          final keys on his body and at last removes the collar from her neck,
          finally attaining the Freedom she had sought for so long.
        </p>
        <h2 className={styles.h2}>Homebound</h2>
        <p className={styles.p}>
          I’m super happy that this game gives more attention to the
          interactions between the travelers throughout all their chapters. In
          the first game, the eight travelers didn’t interact at all outside of
          combat; it was as if they were total strangers traveling together for
          unclear reasons. The cast is much more tight-knit in this game. All
          the party members have one-on-one conversations about various things
          in each other’s chapters, and there’s extra conversations between
          three party members in the taverns. I loved watching them connect with
          each other in these heart-to-hearts and learn a new perspective from
          the other person. OT2 also has tag-team chapters where Hikari/Agnea,
          Osvald/Partitio, Throné/Temenos, and Ochette/Castti work together to
          delve into the mysteries of Solistia, giving them even more
          opportunities to bond with each other. This all culminates in a final
          quest after you complete everyone’s stories called “The Journey for
          the Dawn.” In this segment, the entire world is covered in darkness,
          and you’re no longer able to switch to daytime. The entire party comes
          together as one team to discover how this happened and defeat the
          wicked god, Vide once and for all. The final battle rivals the first
          game’s true final boss in difficulty and is probably the most
          invigorating boss fight in the game. Sadly, I have yet to defeat this
          final boss, but rest assured I fully intend to return and see it
          through to the end.
        </p>
        <p className={styles.p}>
          Octopath Traveler 2 exceeded all of my expectations as a sequel to
          Octopath Traveler. It boldly builds on its foundation while also
          addressing the issues I had with the original game. Even after 65
          hours, there’s still so much I have yet to do. I haven’t done most of
          the sidequests, collected all the licenses, and most disappointingly,
          unlocked all of the hidden jobs yet. I assumed I would simply stumble
          across them like I did in the first game, but it seems like I’ll have
          to do a bit of research to find them. Regardless, I am more than
          satisfied with everything I’ve experienced. I have a soft spot for all
          the travelers. None of their stories are particularly groundbreaking,
          but I enjoyed all the stories nonetheless. One of the stories even
          made me cry unexpectedly (Castti’s Chapter 3), while I never came
          close to tears in the first game. I’m looking forward to finishing out
          the game and eventually playing Octopath Traveler 0, but I can’t see
          how any future Traveler game could top this one.
        </p>
        <Image
          src={`/OT2/dawn.jpg`}
          className={styles.image}
          border-radius="15"
          width="642"
          height="402"
          alt="The Journey for the Dawn"
        ></Image>
        <p className={styles.sig}>Jose Folgar 12/30/2025</p>
        <ScrollToTop />
      </div>
    </div>
  );
}
