export default function getURLSlug(url: string) {
  const slug = url
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // accent সরানো
    .normalize("NFC")
    .replace(/['’.]/g, "") // ' আর . মুছে ফেলা
    .replace(/\b(a|an|the|of|in|to|with|how)\b/gi, " ")
    .replace(/[^\p{L}\p{M}\p{N}]+/gu, "-") // বাকি সব চিহ্ন -> হাইফেন
    .replace(/^-+|-+$/g, "") // শুরু/শেষের হাইফেন মুছুন
    .toLowerCase();
  return slug;
}
