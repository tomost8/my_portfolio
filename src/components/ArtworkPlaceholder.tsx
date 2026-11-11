import { cn } from "@/lib/cn";

type ArtworkPlaceholderProps = {
  hue: number;
  /** Changes the arrangement of shapes so neighbouring cards differ. */
  seed?: number;
  className?: string;
};

/**
 * Generated stand-in for a screenshot: a soft gradient with a few UI-like
 * shapes. It is decorative, so it is hidden from assistive technology.
 */
export function ArtworkPlaceholder({ hue, seed = 0, className }: ArtworkPlaceholderProps) {
  const flip = seed % 2 === 0;
  const bg = `hsl(${hue} 70% 94%)`;
  const mid = `hsl(${hue} 65% 82%)`;
  const deep = `hsl(${hue} 60% 38%)`;

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={cn("block size-full", className)}
    >
      <rect width="800" height="600" fill={bg} />
      <circle cx={flip ? 620 : 180} cy="150" r="190" fill={mid} opacity="0.7" />
      <rect x={flip ? 90 : 330} y="130" width="380" height="340" rx="28" fill="#fff" />
      <rect x={flip ? 120 : 360} y="160" width="140" height="18" rx="9" fill={deep} />
      <rect x={flip ? 120 : 360} y="196" width="260" height="12" rx="6" fill={mid} />
      <rect x={flip ? 120 : 360} y="224" width="320" height="12" rx="6" fill={mid} opacity="0.6" />
      <rect x={flip ? 120 : 360} y="270" width="150" height="150" rx="18" fill={bg} />
      <rect x={flip ? 290 : 530} y="270" width="150" height="150" rx="18" fill={deep} opacity="0.85" />
      <circle cx={flip ? 640 : 150} cy="470" r="64" fill={deep} opacity="0.18" />
    </svg>
  );
}
