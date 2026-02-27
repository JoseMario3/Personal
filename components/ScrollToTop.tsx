"use client";
import { useEffect, useState } from "react";
import { Zoom, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={handleClick}
        size="large"
        aria-label="scroll back to top"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          backgroundColor: "var(--BLUE)",
          color: "var(--SUBTLE-BLUE)",
          "&:hover": {
            backgroundColor: "var(--BLUE)",
          },
          "&:active": {
            backgroundColor: "var(--BLUE)",
          },
          "&.Mui-focusVisible": {
            backgroundColor: "var(--BLUE)",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
