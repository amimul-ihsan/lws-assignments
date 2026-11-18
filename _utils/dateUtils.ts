export function getLongDate(date: string, locale: string = "en"): string {
  const targetDate = new Date(date);
  return targetDate.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getDaysAgo(date: string, locale: string = "en"): string {
  const targetDate = new Date(date);
  const days = Math.floor(
    (Date.now() - targetDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  return days >= 365
    ? `${Math.floor(days / 365)} ${locale === "en" ? "year/s ago" : "বছর আগে"}`
    : days >= 30
      ? `${Math.floor(days / 30)} ${locale === "en" ? "month/s ago" : "মাস আগে"}`
      : `${days} ${locale === "en" ? "day/s ago" : "দিন আগে"}`;
}
