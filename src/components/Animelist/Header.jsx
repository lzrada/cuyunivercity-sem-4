import Link from "next/link";

const Header = ({ tittle, linkHref, linkTittle }) => {
  return (
    <>
      <div className=" flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-color-primary">{tittle}</h1>
        {linkHref && linkTittle ? (
          <Link href={linkHref} className="md:text-xl text-sm  text-color-primary underline hover:text-color-accent transition-all">
            {linkTittle}
          </Link>
        ) : null}
      </div>
    </>
  );
};
export default Header;
