import { concepts } from "@/data/concepts";
import { ArtworkPlaceholder } from "./ArtworkPlaceholder";

/**
 * Endless horizontal strip of concept tiles. The list is rendered twice and
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
              <div className="aspect-[4/3] overflow-hidden rounded-2xl tablet:rounded-3xl">
                <ArtworkPlaceholder hue={concept.hue} seed={index} />
              </div>
              <p className="t-small mt-3 text-neutral-500">{concept.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
