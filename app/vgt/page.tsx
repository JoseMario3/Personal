"use client";
import { useEffect, useRef, useState } from "react";
import articles from "@/data/Articles.json";
import Entry from "@/components/Entry";
import styles from "./index.module.css";

export default function VGT() {
  const entries: {
    image: string;
    title: string;
    url: string;
  }[] = articles.articles;
  const ENTRY_SIZE = 125;
  const GAP = 20;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [heroCenter, setHeroCenter] = useState({ x: 0, y: 0 });
  const [orbitRadius, setOrbitRadius] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredEntry, setHoveredEntry] = useState<{
    image: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    const updateMetrics = () => {
      if (!containerRef.current || !heroRef.current) return;

      const containerRect = containerRef.current!.getBoundingClientRect();
      const heroRect = heroRef.current!.getBoundingClientRect();

      // hero center RELATIVE to the container's top-left
      const centerX = heroRect.left - containerRect.left + heroRect.width / 2;
      const centerY = heroRect.top - containerRect.top + heroRect.height / 2;
      setHeroCenter({ x: centerX, y: centerY });

      const heroRadius = heroRect.width / 2;
      const entryRadius = ENTRY_SIZE / 2;
      setOrbitRadius(heroRadius + entryRadius + GAP);
    };

    updateMetrics();

    if (!containerRef.current || !heroRef.current) return;

    const ro = new ResizeObserver(updateMetrics);
    ro.observe(containerRef.current);
    ro.observe(heroRef.current);
    window.addEventListener("resize", updateMetrics);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  return (
    <div className={styles.body}>
      <div ref={containerRef} className={styles.inner}>
        <h1 className={styles.title}>Journal Entries</h1>
        <div
          ref={heroRef}
          className={styles.hero}
          style={{
            backgroundImage: hoveredEntry
              ? `url(${hoveredEntry.image})`
              : "url(/bg.svg)",
          }}
        >
          {hoveredEntry ? null : (
            <h1 className={styles.desc}>Select an Article</h1>
          )}
        </div>
        <div className={styles.entriesOverlay}>
          {entries.map((e, i) => (
            <Entry
              key={i}
              image={e.image}
              title={e.title}
              url={e.url}
              heroCenter={heroCenter}
              radius={orbitRadius}
              speed={0.5}
              initialAngle={(i / entries.length) * 2 * Math.PI}
              paused={paused}
              onHoverChange={(isHovering) => {
                setPaused(isHovering);
                setHoveredEntry(isHovering ? e : null);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
