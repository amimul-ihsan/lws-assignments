import getNewses from "@/_libs/getNews";
type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: Request, context: Ctx) {
  const { slug } = await context.params;
  const news = getNewses().find((news) => news.slug === slug);
  if (!news)
    return new Response(JSON.stringify({ error: "News not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  return Response.json(news);
}

export async function PATCH(req: Request, context: Ctx) {
  const { slug } = await context.params;
  const updatedNewsReq = await req.json();
  const news = getNewses().find((news) => news.slug === slug);

  const isCorrectField = Object.keys(updatedNewsReq).every(
    (key) => key === "title" || key === "description",
  );
  if (!news)
    return new Response(JSON.stringify({ error: "News not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });

  if (!isCorrectField)
    return Response.json(
      {
        error: "Only title and description can be updated",
      },
      { status: 422 },
    );

  const { title: updatedTitle, description: updatedDescription } =
    updatedNewsReq;

  if (updatedTitle) news.title = updatedTitle;
  if (updatedDescription) news.description = updatedDescription;

  return Response.json(news, { status: 201 });
}

export async function DELETE(_req: Request, context: Ctx) {
  const { slug } = await context.params;
  const news = getNewses();
  const newsIndex = news.findIndex((news) => news.slug === slug);
  if (newsIndex === -1)
    return new Response(JSON.stringify({ error: "News not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  const newsToDelete = news[newsIndex];
  news.splice(newsIndex, 1);

  return Response.json(newsToDelete);
}
