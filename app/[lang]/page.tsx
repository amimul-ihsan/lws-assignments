import NewsCard from "@/_components/NewsCard";
import getNewses from "@/_libs/getNews";
import { selectLangDictionary } from "@/_libs/selectDictionary";

type Props = { params: Promise<{ lang: string }> };

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const newses = getNewses();
  const dictionary = selectLangDictionary(lang);
  const { home_title, home_caption }: typeof dictionary = dictionary;

  return (
    <main className="mt-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{home_title}</h2>
          <p className="mt-1 text-sm text-zinc-400">{home_caption}</p>
        </div>
      </div>

      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newses.map((news) => (
          <NewsCard key={news.id} news={news} lang={lang} />
        ))}
      </section>
    </main>
  );
}
