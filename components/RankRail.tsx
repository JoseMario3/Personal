"use client";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/rankRail.module.css";

export interface RailItem {
  id: string;
  label: string;
}

export interface RailSection {
  id: string;
  title: string;
  items: RailItem[];
}

interface RankRailProps {
  sections: RailSection[];
}

export default function RankRail({ sections }: RankRailProps) {
  const allItems = sections.flatMap((s) => s.items);
  const [activeId, setActiveId] = useState<string | null>(
    allItems[0]?.id ?? null,
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = allItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibleRatios = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.intersectionRatio);
        });
        let bestId: string | null = null;
        let bestRatio = 0;
        visibleRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestId) setActiveId(bestId);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [sections]);

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <nav className={styles.rail} aria-label="Entry navigation">
      {sections.map((section) => (
        <div
          key={section.id}
          className={styles.section}
          role="group"
          aria-label={section.title}
        >
          {section.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.tick} ${
                item.id === activeId ? styles.active : ""
              }`}
              onClick={() => handleJump(item.id)}
              aria-label={`Jump to ${section.title} ${item.label}`}
              aria-current={item.id === activeId ? "true" : undefined}
            >
              <span className={styles.tickLabel}>{item.label}</span>
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
}
