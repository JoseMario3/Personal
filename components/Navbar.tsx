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
      <AppBar
        sx={{
          backgroundColor: "var(--SUBTLE-BLUE);",
          boxShadow: "none",
          borderBottom: "solid 2px var(--BLUE)",
        }}
      >
        <Toolbar
          className={styles.bar}
          sx={{ backgroundColor: "var(--SUBTLE-BLUE);" }}
        >
          <Link className={styles.title} href="/" passHref>
            {isMobile ? (
              <Image
                src={`/Logo/JF.png`}
                width="35"
                height="35"
                alt="Jose's Website"
                className={styles.pic}
              ></Image>
            ) : (
              <Typography
                color="var(--BLUE)"
                variant="h6"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Jose&apos;s Website
              </Typography>
            )}
          </Link>
          <div>
            <Link href="/gallery" passHref className={styles.link}>
              <Button sx={{ color: "var(--BLUE)" }} className={styles.button}>
                Gallery
              </Button>
            </Link>
            <Link href="/journey" passHref className={styles.link}>
              <Button sx={{ color: "var(--BLUE)" }} className={styles.button}>
                My Journey
              </Button>
            </Link>
            <Link href="/vgt" passHref className={styles.link}>
              <Button sx={{ color: "var(--BLUE)" }} className={styles.button}>
                Journal
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
