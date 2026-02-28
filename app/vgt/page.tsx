"use client";
import { useEffect, useRef, useState } from "react";
import articles from "@/data/json/Articles.json";
import Entry from "@/components/Entry";
import styles from "./index.module.css";

export default function VGT() {
  const entries: {
    image: string;
    image2?: string;
    image3?: string;
    title: string;
    url: string;
    audio: string;
    audio2?: string;
  }[] = articles.articles;
  const ENTRY_SIZE = 125;
  const GAP = 20;
  const probability = Math.random() * 10;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [heroCenter, setHeroCenter] = useState({ x: 0, y: 0 });
  const [orbitRadius, setOrbitRadius] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredEntry, setHoveredEntry] = useState<{
    image: string;
    image2?: string;
    image3?: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

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

  function decideLogo(image: string, image2?: string, image3?: string) {
    if (image2 && image3) {
      if (probability > 3.5) return `url(${image2})`;
      return `url(${image3})`;
    }
    return `url(${image})`;
  }

  function decideAudio(audio: string, audio2?: string) {
    if (probability > 3.5) return audio2;
    return audio;
  }

  return (
    <div className={styles.body} ref={bodyRef}>
      <div ref={containerRef} className={styles.inner}>
        <h1
          key={hoveredEntry ? hoveredEntry.title : "default"}
          className={`${hoveredEntry ? styles.article : styles.title}`}
        >
          {hoveredEntry ? hoveredEntry.title : "Select an Article"}
        </h1>
        <div
          ref={heroRef}
          className={`${styles.hero} ${hoveredEntry ? styles.spinning : ""}`}
          style={{
            backgroundImage: hoveredEntry
              ? decideLogo(
                  hoveredEntry.image,
                  hoveredEntry?.image2,
                  hoveredEntry?.image3,
                )
              : "url(/Logo/Monado.png)",
          }}
        >
          <div className={styles.cd1}>
            <div className={styles.cd2}></div>
          </div>
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
              audio={e.audio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
