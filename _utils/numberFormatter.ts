import { supportedLocales } from "@/global.config";

export function formatNumber(num: number, locale: string = "en"): string {
  if (!supportedLocales.includes(locale)) return "";

  const formatter = new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  });
  return formatter.format(num);
}
