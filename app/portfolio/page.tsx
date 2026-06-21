"use client";
import { useState } from "react";
import Image from "next/image";
import works from "@/data/json/Projects.json";
import styles from "./index.module.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

type Project = {
  title: string;
  images: string[];
  why: string;
  how: string;
  stack: string[];
  github: string;
};

const projects: Project[] = works.projects;

function ProjectCard({
  project,
  imageOnRight,
}: {
  project: Project;
  imageOnRight: boolean;
}) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % project.images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + project.images.length) % project.images.length);

  const slideshow = (
    <div className={styles.slideshowCol}>
      <div className={styles.slideshow}>
        <Image
          src={project.images[index]}
          alt={`${project.title} screenshot ${index + 1}`}
          fill
          className={styles.slideshowImage}
        />
      </div>
      <div className={styles.slideshowControls}>
        <button
          onClick={prev}
          className={styles.slideshowButton}
          aria-label="Previous image"
        >
          ‹ prev
        </button>
        <span className={styles.slideshowCount}>
          {index + 1} / {project.images.length}
        </span>
        <button
          onClick={next}
          className={styles.slideshowButton}
          aria-label="Next image"
        >
          next ›
        </button>
      </div>
    </div>
  );

  const textCol = (
    <div className={styles.textCol}>
      <p className={styles.label}>What is it?</p>
      <p className={styles.text}>{project.why}</p>
      <p className={styles.label}>How It&apos;s Made</p>
      <p className={styles.text}>{project.how}</p>
    </div>
  );

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <p className={styles.projectTitle}>{project.title}</p>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            <GitHubIcon className={styles.githubIcon} />
            Code
          </a>
        )}
        <div className={styles.stackRow}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.stackPill}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.projectBody}>
        {imageOnRight ? (
          <>
            {textCol}
            {slideshow}
          </>
        ) : (
          <>
            {slideshow}
            {textCol}
          </>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Portfolio</h1>

      <div className={styles.workCard}>
        <div className={styles.workHeader}>
          <div className={styles.workImage}>
            <Image
              src="/mandtbank.jpg"
              alt="M&T Bank"
              width={150}
              height={150}
              className={styles.workImageImg}
            />
          </div>
          <div className={styles.workContent}>
            <p className={styles.workLabel}>
              <WorkOutlineIcon className={styles.workIcon} />
              work experience
            </p>
            <p className={styles.workTitle}>Software Engineer @ M&amp;T Bank</p>

            <p className={styles.workText}>
              <strong>Consumer Loan Originations</strong> — I work on the
              Consumer Loan Originations team, primarily maintaining DAW
              alongside three other applications (COP, Strata, Credit Toolkit).
              I built CI/CD pipelines that cut deployment time from 45 minutes
              to under 2 minutes, manage vulnerability remediation across all 4
              apps, and I&apos;m currently leading DAW&apos;s migration to
              Azure.
            </p>
            <div className={styles.workStackRow}>
              {["Java", "Maven", "GitLab CI/CD", "Apache Tomcat", "Azure"].map(
                (tech) => (
                  <span key={tech} className={styles.workStackPill}>
                    {tech}
                  </span>
                ),
              )}
            </div>

            <p className={styles.workText}>
              <strong>New Account Opening</strong> — Contributed to NAO, a
              consumer account opening platform, building full-stack external
              funding functionality with Angular, C# .NET, and SQL. Implemented
              backend services and ACH integrations enabling customers to fund
              accounts from external institutions via Yodlee, handling
              transaction persistence, state tracking, and secure money movement
              end-to-end.
            </p>
            <div className={styles.workStackRow}>
              {["Angular", "C# .NET", "SQL"].map((tech) => (
                <span key={tech} className={styles.workStackPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          project={project}
          imageOnRight={i % 2 === 1}
        />
      ))}
    </div>
  );
}
