"use client";
import { useEffect, useState, useRef } from "react";
import styles from "@/styles/entry.module.css";
import Image from "next/image";
import Link from "next/link";

type EntryProps = {
  image: string;
  title: string;
  url: string;
  heroCenter: { x: number; y: number };
  radius: number;
  speed: number;
  initialAngle: number;
  paused: boolean;
  onHoverChange: (p: boolean) => void;
};

export default function Entry({
  image,
  title,
  url,
  heroCenter,
  radius,
  speed,
  initialAngle = 0,
  paused,
  onHoverChange,
}: EntryProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const angleRef = useRef<number>(initialAngle);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const ENTRY_SIZE = 125;

  useEffect(() => {
    function loop(now: number) {
      if (lastRef.current == null) lastRef.current = now;
      const dt = (now - lastRef.current) / 1000;
      lastRef.current = now;

      if (!paused) {
        angleRef.current += speed * dt;
      }

      if (ref.current) {
        const x = heroCenter.x + radius * Math.cos(angleRef.current);
        const y = heroCenter.y + radius * Math.sin(angleRef.current);
        ref.current.style.left = `${x - ENTRY_SIZE / 2}px`;
        ref.current.style.top = `${y - ENTRY_SIZE / 2}px`;
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastRef.current = null;

      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, [heroCenter.x, heroCenter.y, radius, speed, paused]);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(true);
      onHoverChange(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsHovered(false);
    onHoverChange(false);
  };

  return (
    <div
      ref={ref}
      className={styles.entry}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={url} className={styles.visual}>
        {isHovered ? (
          <h3 className={`${isHovered ? styles.visible : ""} ${styles.title}`}>
            {title}
          </h3>
        ) : (
          <Image
            src={image}
            width={ENTRY_SIZE}
            height={ENTRY_SIZE}
            alt={title}
            className={styles.image}
          />
        )}
      </Link>
    </div>
  );
}
