"use client";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const Header = ({ title }: { title?: string }) => {
  const [searchText, setSearchText] = useState("");
  const pathname = usePathname();
  const segment = pathname.split("/")[1];

  return (
    <div className="flex justify-between items-center h-14 ml-40 p-4 fixed inset-0 bg-white">
      <div className="text-xl font-bold">{!title ? "홈" : title}</div>
      {segment !== "compose" && (
        <div className="flex items-center gap-2 border-2 border-gray-500 rounded-2xl">
          <Search className="ml-2" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="mr-2 w-full focus-visible:outline-none"
          />
        </div>
      )}
    </div>
  );
};
