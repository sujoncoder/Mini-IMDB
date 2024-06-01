"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto space-x-4 my-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full border px-2 h-10 rounded-md placeholder-gray-500 bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-white disabled:bg-slate-500 bg-blue-500 px-4 p-1 rounded disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};
export default SearchBox;
