import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.css";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
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
            <CameraAltOutlinedIcon
              sx={{ color: "var(--SECOND-BLUE)", marginBottom: "6px" }}
            />
            <p className={styles.cardTitle}>Gallery</p>
            <p className={styles.cardSubtitle}>
              Photos I&apos;ve taken along the way
            </p>
          </Link>

          <Link
            href="/portfolio"
            className={`${styles.card} ${styles.smallCard} ${styles.floatC}`}
          >
            <RouteOutlinedIcon
              sx={{ color: "var(--SECOND-BLUE)", marginBottom: "6px" }}
            />

            <p className={styles.cardTitle}>My Portfolio</p>
            <p className={styles.cardSubtitle}>Projects I&apos;ve worked on!</p>
          </Link>

          <Link
            href="/vgt"
            className={`${styles.card} ${styles.smallCard} ${styles.floatA}`}
          >
            <SummarizeOutlinedIcon
              sx={{ color: "var(--SECOND-BLUE)", marginBottom: "6px" }}
            />

            <p className={styles.cardTitle}>Journal</p>
            <p className={styles.cardSubtitle}>Thoughts on games</p>
          </Link>
        </div>
        <div className={styles.cardRow}>
          <div className={`${styles.card} ${styles.nowCard} ${styles.floatA}`}>
            <div className={styles.nowCardHeader}>
              <HeadphonesOutlinedIcon
                sx={{ color: "var(--SECOND-BLUE)", fontSize: 18 }}
              />
              <p className={styles.eyebrow}>Currently listening</p>
            </div>
            <Image
              src="/greatdivide.png"
              alt="Album cover"
              width={160}
              height={160}
              className={styles.nowImage}
            />
            <p className={styles.nowTitle}>A Few of Your Own</p>
            <p className={styles.nowSubtitle}>Noah Kahan</p>
          </div>

          <div className={`${styles.card} ${styles.nowCard} ${styles.floatB}`}>
            <div className={styles.nowCardHeader}>
              <TvOutlinedIcon
                sx={{ color: "var(--SECOND-BLUE)", fontSize: 18 }}
              />
              <p className={styles.eyebrow}>Currently watching</p>
            </div>
            <Image
              src="/fifa.webp"
              alt="Show poster"
              width={160}
              height={160}
              className={styles.nowImage}
            />
            <p className={styles.nowTitle}>FIFA World Cup</p>
          </div>

          <div className={`${styles.card} ${styles.nowCard} ${styles.floatC}`}>
            <div className={styles.nowCardHeader}>
              <SportsEsportsOutlinedIcon
                sx={{ color: "var(--SECOND-BLUE)", fontSize: 18 }}
              />
              <p className={styles.eyebrow}>Currently playing</p>
            </div>
            <Image
              src="/yoshi.png"
              alt="Game cover"
              width={160}
              height={160}
              className={styles.nowImage}
            />
            <p className={styles.nowTitle}>Yoshi and the Mysterious Book</p>
          </div>
        </div>
      </div>
    </div>
  );
}
