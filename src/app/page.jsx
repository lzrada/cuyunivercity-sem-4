import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recomendedAnime = reproduce(recomendedAnime, 4);

  return (
    <>
      <section>
        <Header tittle="Paling poupuler" linkTittle="Lihat semua" linkHref="/populer" />
        <Animelist api={topAnime} />
      </section>
      <section>
        <Header tittle="Rekomendasi" />
        <Animelist api={recomendedAnime} />
      </section>
    </>
  );
};

export default Page;
