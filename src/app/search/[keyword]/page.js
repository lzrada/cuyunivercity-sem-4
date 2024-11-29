import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header tittle={`pencarian untuk ${keyword}....`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
