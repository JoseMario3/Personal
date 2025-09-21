"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/components.module.css";
import { AppBar, Toolbar, Typography, Button, Slide } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleChange = () => setIsMobile(mediaQuery.matches);
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShow(!(currentY > lastScrollY && currentY > 100));
      setLastScrollY(currentY);
    };

    const mediaQuery = window.matchMedia("(max-width: 640px)");
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [lastScrollY]);

  return (
    <Slide appear={false} direction="down" in={show} timeout={500}>
      <AppBar>
        <Toolbar className={styles.bar}>
          <Link className={styles.title} href="/" passHref>
            {isMobile ? (
              <Image
                src={`/TripleG.png`}
                width="30"
                height="30"
                alt="Jose's Website"
              ></Image>
            ) : (
              <Typography color="white" variant="h6" component="div">
                Jose&apos;s Website
              </Typography>
            )}
          </Link>
          <div>
            <Link href="/gallery" passHref className={styles.link}>
              <Button sx={{ color: "white" }} className={styles.button}>
                Gallery
              </Button>
            </Link>
            <Link href="/about" passHref className={styles.link}>
              <Button sx={{ color: "white" }} className={styles.button}>
                About
              </Button>
            </Link>
            <Link href="/rankings" passHref className={styles.link}>
              <Button sx={{ color: "white" }} className={styles.button}>
                Jose’s Corner
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
