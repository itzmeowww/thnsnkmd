export type Locale = "en" | "ja";

export type Localized = { en: string; ja: string };

export const pick = (v: Localized | undefined, locale: Locale): string =>
  v ? (v[locale] ?? v.en) : "";
