import { getAnimeResponse } from "@/libs/api-libs";
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";

const Page = async ({ params }) => {
  const { keyword } = await params;

  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header tittle={`pencarian untuk ${decodeKeyword}....`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
