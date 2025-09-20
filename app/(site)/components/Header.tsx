"use client";

import Link from "next/link";
import { CityClock } from "./CityClock";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./header.module.css";

export function Header() {
  const prefersReduced = useReducedMotion();
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: prefersReduced ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: prefersReduced ? 0 : 2.15, duration: 0.6 }}
    >
      <div className={styles.brandArea}>
        <Link href="/" aria-label="LJUSDAL home" className={styles.brand}>
          LJUSDAL
        </Link>
      </div>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/furniture" className={styles.navLink}>
          Terms,
        </Link>
        <Link href="/catalogue" className={styles.navLink}>
          Privacy,
        </Link>
        <Link href="/studio" className={styles.navLink}>
          Imprint
        </Link>
      </nav>
      <div className={styles.clockWrap}>
        <CityClock cityLabel="frankfurt, de" timeZone="Europe/Berlin" />
      </div>
    </motion.header>
  );
}


