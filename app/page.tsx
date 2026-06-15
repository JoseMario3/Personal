import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.css";
import WaterRipple from "@/components/WaterRipple";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.page}>
        <WaterRipple />

        <div className={styles.intro}>
          <div className={`${styles.card} ${styles.heroCard} ${styles.floatA}`}>
            <h1 className={styles.heading}>Good Morning! I&apos;m Jose :)</h1>
            <p className={styles.body}>
              Thanks for stopping by, take a look around!
            </p>
          </div>

          <div className={`${styles.photoCard} ${styles.floatB}`}>
            <Image
              className={styles.hero}
              alt="Jose"
              src="/jose.jpeg"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* <div className={styles.bubbleDivider}>
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
          <span className={styles.bubble} />
        </div> */}

        <div className={`${styles.card} ${styles.aboutCard} ${styles.floatC}`}>
          <p className={styles.eyebrow}>About Me</p>
          <p className={styles.body}>
            I&apos;m a software engineer currently based in Buffalo, New York. I
            graduated from Washington University in St. Louis in 2024 with two
            degrees, one in Computer Engineering and another in Computer
            Science, and I&apos;m originally from Laplace, Louisiana!
          </p>
        </div>

        <div className={styles.cardRow}>
          <Link
            href="/gallery"
            className={`${styles.card} ${styles.smallCard} ${styles.floatB}`}
          >
            <p className={styles.cardTitle}>Gallery</p>
            <p className={styles.cardSubtitle}>
              Photos I&apos;ve taken along the way
            </p>
          </Link>

          <Link
            href="/journey"
            className={`${styles.card} ${styles.smallCard} ${styles.floatC}`}
          >
            <p className={styles.cardTitle}>My journey</p>
            <p className={styles.cardSubtitle}>
              Where I&apos;ve been, where I&apos;m headed
            </p>
          </Link>

          <Link
            href="/vgt"
            className={`${styles.card} ${styles.smallCard} ${styles.floatA}`}
          >
            <p className={styles.cardTitle}>Journal</p>
            <p className={styles.cardSubtitle}>Thoughts on games, mostly</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
