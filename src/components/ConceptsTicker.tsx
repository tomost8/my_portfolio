import Image from "next/image";
import { concepts } from "@/data/concepts";

/**
 * Endless horizontal strip of focus-area tiles. The list is rendered twice and
 * the track slides by exactly half its width, so the loop has no seam. Tile
 * spacing is padding rather than gap, otherwise half the width is off by a gap.
 * Hover or focus pauses it. With reduced motion it becomes a plain
 * horizontally scrollable row.
 */
export function ConceptsTicker() {
  return (
    <div
      id="concepts"
      className="group/ticker scroll-mt-24 overflow-x-clip motion-reduce:overflow-x-auto"
      data-cursor="concept"
    >
      <ul className="flex w-max animate-[ticker_48s_linear_infinite] py-2 group-hover/ticker:[animation-play-state:paused] motion-reduce:animate-none">
        {[...concepts, ...concepts].map((concept, index) => {
          const isCopy = index >= concepts.length;
          return (
            <li
              key={`${concept.id}-${isCopy ? "copy" : "original"}`}
              aria-hidden={isCopy || undefined}
              className="w-[280px] shrink-0 pr-5 tablet:w-[360px] desktop:w-[420px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 tablet:rounded-3xl">
                <Image
                  src={concept.src}
                  alt={isCopy ? "" : concept.alt}
                  fill
                  sizes="(min-width: 1280px) 420px, (min-width: 768px) 360px, 280px"
                  className="object-cover"
                />
              </div>
              <p className="t-small mt-3 text-neutral-500">{concept.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
