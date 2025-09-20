"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./poster.module.css";

export function Poster() {
  const prefersReduced = useReducedMotion();
  return (
    <section className={styles.stage}>
      {/* Stage 1: Type appears */}
      <motion.div className={styles.topWord} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 0.25, y: 0 }} transition={{ duration: prefersReduced ? 0.01 : 0.6, ease: [0.22, 1, 0.36, 1] }}>LJUSDAL</motion.div>

      {/* Stage 2: Poster frame reveals */}
      <motion.div
        className={styles.poster}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReduced ? 0 : 0.35, duration: prefersReduced ? 0.01 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className={styles.frame} initial={{ padding: "48px 24px" }} animate={{ padding: "48px 24px" }}>
          <motion.div
            className={styles.figure}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: prefersReduced ? 0 : 0.6, duration: prefersReduced ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/assets/images/hero.webp"
              alt="Featured object"
              fill
              sizes="(max-width: 900px) 90vw, 600px"
              priority
              className={styles.img}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className={styles.bottomWord} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.25, y: 0 }} transition={{ delay: prefersReduced ? 0 : 0.2, duration: prefersReduced ? 0.01 : 0.6, ease: [0.22, 1, 0.36, 1] }}>LJUSDAL</motion.div>

      {/* Stage 3: Poster gentle zoom-in */}
      <motion.div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        initial={{ scale: 1 }}
        animate={{ scale: prefersReduced ? 1 : 1.02 }}
        transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className={styles.metaStrip}>
        <div>functional digital objects</div>
        <div>Frankfurt, DE</div>
        <div>
          <a href="https://www.instagram.com/benljusdal?igsh=MWg4ZWhyYWVrZGJ6Zg==" target="_blank" rel="noreferrer">instagram</a>
          <span aria-hidden> • </span>
          <a href="mailto:info@ljusdal.app">email</a>
        </div>
        <div>LJUSDAL ©{new Date().getFullYear()}</div>
      </div>
    </section>
  );
}


