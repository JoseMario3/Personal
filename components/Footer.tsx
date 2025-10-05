import styles from "@/styles/components.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href={"https://www.linkedin.com/in/jose-folgar/"}
        target={"_blank"}
        className={styles.fLink}
      >
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn!"
          width={30}
          height={30}
          style={{ marginBottom: "5px" }}
        />
        LinkedIn
      </Link>
      <Link
        href={"https://github.com/JoseMario3"}
        target={"_blank"}
        className={styles.fLink}
      >
        <Image
          src="/icons/Git.png"
          alt="Github!"
          width={30}
          height={30}
          style={{ marginBottom: "5px" }}
        />
        GitHub
      </Link>
      <Image
        src="/JF.png"
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
        <Image
          src="/icons/Clock.png"
          alt="PomoZone!"
          width={25}
          height={25}
          style={{ marginBottom: "5px" }}
        />
        PomoZone
      </Link>
      <Link
        href={"https://luherm17.itch.io/punk"}
        target={"_blank"}
        className={styles.fLink}
      >
        <Image
          src="/icons/guitar.png"
          alt="Punk!"
          width={30}
          height={30}
          style={{ marginBottom: "5px" }}
        />
        Punk
      </Link>
    </footer>
  );
}
