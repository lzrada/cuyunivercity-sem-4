import Image from "next/image";

const Animelist = () => {
  return (
    <div className="grid grid-cols-3  gap-2 h-32">
      <div className="bg-indigo-500">
        <Image src="https://placehold.co/600x400/png" alt="..." width={600} height={600} />
        <h3>Judul Anime Disini</h3>
      </div>
      <div className="bg-indigo-500">kotak 2</div>
      <div className="bg-indigo-500"> kotak 3</div>
      <div className="bg-indigo-500">kotak 4</div>
      <div className="bg-indigo-500">kotak 5</div>
      <div className="bg-indigo-500"> kotak 6</div>
    </div>
  );
};

export default Animelist;