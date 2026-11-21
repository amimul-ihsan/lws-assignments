import { supportedLocales } from "@/global.config";

export function formatNumber(num: number, lang: string = "en"): string {
  let locale = lang;
  if (!supportedLocales.includes(lang)) locale = "en";

  const formatter = new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  });
  return formatter.format(num);
}
