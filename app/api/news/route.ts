import getNewses from "@/_libs/getNews";

export function GET() {
  const newses = getNewses();
  return Response.json(newses);
}
