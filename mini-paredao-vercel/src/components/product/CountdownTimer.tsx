import { useEffect, useState } from "react";

const pad = (n: number) => n.toString().padStart(2, "0");

export function CountdownTimer({ initialSeconds = 3 * 3600 + 59 * 60 + 58 }: { initialSeconds?: number }) {
  const [s, setS] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  return (
    <span className="ml-1 inline-flex gap-0.5 font-mono font-bold">
      <span className="rounded bg-black/30 px-1 py-0.5">{pad(h)}</span>
      <span>:</span>
      <span className="rounded bg-black/30 px-1 py-0.5">{pad(m)}</span>
      <span>:</span>
      <span className="rounded bg-black/30 px-1 py-0.5">{pad(sec)}</span>
    </span>
  );
}
