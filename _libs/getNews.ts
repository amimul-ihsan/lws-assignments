import { NewsType } from "@/_types/types";
import { readFileSync } from "node:fs";
import path from "node:path";

export default function getNewses(): NewsType[] {
  const DBpath = path.join(process.cwd(), "_db", "data.json");
  const newses = readFileSync(DBpath, "utf-8");
  return JSON.parse(newses);
}
