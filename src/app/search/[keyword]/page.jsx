import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";

const Page = async ({ params }) => {
  const { keyword } = await params;

  const decodeKeyword = decodeURI(keyword);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`);
  const searchAnime = await response.json();

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
