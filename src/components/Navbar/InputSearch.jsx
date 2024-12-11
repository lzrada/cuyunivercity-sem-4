"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.length < 3) return;

    router.push(`/search/${keyword}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(event);
    }
  };
  return (
    <div className="relative">
      <input placeholder="search" className="p-2 rounded w-full " ref={searchRef} onKeyDown={handleKeyPress} />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};
export default InputSearch;
