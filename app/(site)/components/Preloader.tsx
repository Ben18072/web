"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./preloader.module.css";

export function Preloader() {
  const [ready, setReady] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    const done = () => !cancelled && setReady(true);
    // Access document.fonts with a safe type to avoid any
    const fonts: FontFaceSet | undefined =
      (typeof document !== "undefined" && (document as Document & { fonts?: FontFaceSet }).fonts) ||
      undefined;

    const timer = setTimeout(done, 1200);
    if (fonts && fonts.ready) {
      fonts.ready.then(() => {
        clearTimeout(timer);
        done();
      });
    }
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.wordmark}>LJUSDAL</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


