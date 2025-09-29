"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export const Header = ({ title }: { title?: string }) => {
  const [searchText, setSearchText] = useState("");
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search?query=${searchText.trim()}`);
    }
  };

  return (
    <div className="flex justify-between items-center h-14 w-full p-4 bg-white border-b border-gray-200">
      <div className="flex-1 flex justify-center">
        <div className="text-xl font-bold">{!title ? "홈" : title}</div>
      </div>
      {segment !== "compose" && (
        <div className="flex items-center gap-2 border-2 border-gray-500 text-gray-500 rounded-2xl w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem]">
          <Search className="ml-2" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
            className="mr-2 w-full focus-visible:outline-none"
          />
        </div>
      )}
    </div>
  );
};
