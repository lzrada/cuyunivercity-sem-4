import Animelist from "@/app/components/Animelist";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();

  return (
    <>
      <div className="p-4 flex justify-between">
        <h1 className="text-2xl font-bold"> Paling Populer</h1>
        <Link href="/pupuler" className="text-xl underline hover:text-indigo-500 transition-all">
          {" "}
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <Animelist title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
