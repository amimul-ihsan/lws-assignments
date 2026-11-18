export function formatNumber(num: number, locale: string = "en"): string {
  const formatter = new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  });
  return formatter.format(num);
}
