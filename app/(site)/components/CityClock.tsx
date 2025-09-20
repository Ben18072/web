"use client";

import { useEffect, useState } from "react";

type Props = {
  cityLabel: string;
  timeZone: string;
};

export function CityClock({ cityLabel, timeZone }: Props) {
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const parts = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone,
      }).formatToParts(now);
      const hh = parts.find((p) => p.type === "hour")?.value ?? "--";
      const mm = parts.find((p) => p.type === "minute")?.value ?? "--";
      setTime(`${hh}:${mm}`);
    };
    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div aria-label={`${cityLabel} time`} style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <span style={{ textTransform: "lowercase" }}>{cityLabel}</span>
      <span>{time}</span>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor", display: "inline-block" }} />
    </div>
  );
}


