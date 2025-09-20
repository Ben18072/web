"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./poster.module.css";

export function Poster() {
  const prefersReduced = useReducedMotion();
  return (
    <section className={styles.stage}>
      <motion.div
        className={styles.poster}
        initial={{ opacity: 1, scale: prefersReduced ? 1 : 0.62 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: prefersReduced ? 0 : 2.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Rolling paper background */}
        <motion.div
          className={styles.paper}
          initial={{ height: prefersReduced ? "100%" : "0%" }}
          animate={{ height: "100%" }}
          transition={{ delay: prefersReduced ? 0 : 0.2, duration: prefersReduced ? 0.01 : 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className={styles.topWord}>LJUSDAL</div>

        <motion.div
          className={styles.figure}
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: prefersReduced ? 0 : 2.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/assets/images/ljusdal-theme.webp"
            alt="LJUSDAL hero image"
            fill
            sizes="(max-width: 900px) 90vw, 600px"
            priority
            className={styles.img}
          />
        </motion.div>

        <div className={styles.bottomWord}>LJUSDAL</div>
      </motion.div>

      <motion.div
        className={styles.metaStrip}
        initial={{ opacity: prefersReduced ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReduced ? 0 : 2.3, duration: 0.6 }}
      >
        <div>functional digital creations</div>
        <div>Frankfurt, DE</div>
        <div>
          <a href="https://www.instagram.com/benljusdal?igsh=MWg4ZWhyYWVrZGJ6Zg==" target="_blank" rel="noreferrer">instagram</a>
          <span aria-hidden> • </span>
          <a href="mailto:info@ljusdal.app">email</a>
        </div>
        <div>LJUSDAL ©{new Date().getFullYear()}</div>
      </motion.div>
    </section>
  );
}


