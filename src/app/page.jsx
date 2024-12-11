import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse } from "./libs/api-libs";
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  return (
    <>
      {/* anime paling populer */}
      <section>
        <Header tittle="Paling poupuler" linkTittle="Lihat semua" linkHref="/populer" />
        <Animelist api={topAnime} />
      </section>
    </>
  );
};

export default Page;
