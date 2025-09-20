"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./poster.module.css";

export function Poster() {
  return (
    <section className={styles.stage}>
      <motion.div
        className={styles.poster}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.topWord}>LJUSDAL</div>

        <motion.div
          className={styles.figure}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

        <div className={styles.bottomWord}>LJUSDAL</div>
      </motion.div>

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


