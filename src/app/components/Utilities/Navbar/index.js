import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          {" "}
          CUYANIMELIST
        </Link>
        <input placeholder="search" className="rounded p-1"></input>
      </div>
    </header>
  );
};

export default Navbar;
