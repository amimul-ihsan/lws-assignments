import en from "@/_dictionaries/en.json";
import bn from "@/_dictionaries/bn.json";

export function selectLangDictionary(lang: string): typeof en {
  return lang === "en" ? en : bn;
}
