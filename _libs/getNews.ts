import { NewsType } from "@/_types/types";
import news from "@/_db/data.json";

export default function getNewses(): NewsType[] {
  return news;
}
