import styles from "@/styles/components.module.css";
import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const iconSx = {
  width: { xs: 25, sm: 30 },
  height: { xs: 25, sm: 30 },
  margin: { xs: "5px", sm: "5px" },
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href={"https://www.linkedin.com/in/jose-folgar/"}
        target={"_blank"}
        className={styles.fLink}
      >
        <LinkedInIcon sx={iconSx} />
        <span className={styles.fLabel}>LinkedIn</span>
      </Link>
      <Link
        href={"https://github.com/JoseMario3"}
        target={"_blank"}
        className={styles.fLink}
      >
        <GitHubIcon sx={iconSx} />
        <span className={styles.fLabel}>GitHub</span>
      </Link>
      <Image
        src="/Logo/JF.png"
        alt="My Initials!"
        width={100}
        height={100}
        className={styles.logo}
      />
      <Link
        href={"https://www.pomozone.org/"}
        target={"_blank"}
        className={styles.fLink}
      >
        <WatchLaterIcon sx={iconSx} />
        <span className={styles.fLabel}>PomoZone</span>
      </Link>
      <Link
        href={"https://luherm17.itch.io/punk"}
        target={"_blank"}
        className={styles.fLink}
      >
        <SportsEsportsIcon sx={iconSx} />
        <span className={styles.fLabel}>Punk</span>
      </Link>
    </footer>
  );
}
