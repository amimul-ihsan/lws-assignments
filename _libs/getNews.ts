import { NewsType } from "@/_types/types";
import { readFileSync } from "fs";
import path from "path";

export default function getNewses(): NewsType[] {
  const filePath = path.join(process.cwd(), "_db", "data.json");
  return JSON.parse(readFileSync(filePath, "utf-8"));
}
