/** Quick design explorations shown in the scrolling Concepts strip. */
export type Concept = {
  id: string;
  title: string;
  hue: number;
};

export const concepts: readonly Concept[] = [
  { id: "orbit-onboarding", title: "Orbit onboarding", hue: 200 },
  { id: "tidal-weather", title: "Tidal weather", hue: 185 },
  { id: "ledger-lite", title: "Ledger Lite", hue: 140 },
  { id: "ember-music", title: "Ember music", hue: 15 },
  { id: "halo-wallet", title: "Halo wallet", hue: 300 },
  { id: "drift-notes", title: "Drift notes", hue: 245 },
  { id: "mosaic-calendar", title: "Mosaic calendar", hue: 55 },
  { id: "quill-writer", title: "Quill writer", hue: 350 },
];
