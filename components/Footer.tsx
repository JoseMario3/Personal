import styles from "@/styles/components.module.css";
import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href={"https://www.linkedin.com/in/jose-folgar/"}
        target={"_blank"}
        className={styles.fLink}
      >
        <LinkedInIcon
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />
        LinkedIn
      </Link>
      <Link
        href={"https://github.com/JoseMario3"}
        target={"_blank"}
        className={styles.fLink}
      >
        <GitHubIcon style={{ width: "30px", height: "30px", margin: "5px" }} />
        GitHub
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
        <WatchLaterIcon
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />
        PomoZone
      </Link>
      <Link
        href={"https://luherm17.itch.io/punk"}
        target={"_blank"}
        className={styles.fLink}
      >
        <SportsEsportsIcon
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />
        Punk
      </Link>
    </footer>
  );
}
