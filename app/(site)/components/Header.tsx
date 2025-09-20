"use client";

import Link from "next/link";
import { CityClock } from "./CityClock";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brandArea}>
        <Link href="/" aria-label="LJUSDAL home" className={styles.brand}>
          LJUSDAL
        </Link>
      </div>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/furniture" className={styles.navLink}>
          Furniture,
        </Link>
        <Link href="/catalogue" className={styles.navLink}>
          Index,
        </Link>
        <Link href="/studio" className={styles.navLink}>
          Studio
        </Link>
      </nav>
      <div className={styles.clockWrap}>
        <CityClock cityLabel="frankfurt, de" timeZone="Europe/Berlin" />
      </div>
    </header>
  );
}


