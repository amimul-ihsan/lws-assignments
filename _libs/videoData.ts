import { Video } from "@/_types/types";
import { readFileSync } from "fs";
import path from "path";

export default function getVideos(): Video[] {
  const filePath = path.join(process.cwd(), "db", "videos.json");
  return JSON.parse(readFileSync(filePath, "utf-8"));
}
