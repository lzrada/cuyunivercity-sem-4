import Link from "next/link";

const Header = ({ tittle, linkHref, linkTittle }) => {
  return (
    <>
      <div className=" flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">{tittle}</h1>
        {linkHref && linkTittle ? (
          <Link href={linkHref} className="md:text-xl text-sm underline hover:text-indigo-500 transition-all">
            {linkTittle}
          </Link>
        ) : null}
      </div>
    </>
  );
};
export default Header;
