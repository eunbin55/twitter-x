"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex justify-between items-center h-14 fixed inset-0 bg-white">
      <div>profile</div>
      <Link href={"/"}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/450px-X_logo_2023.svg.png"
          alt=""
          width={30}
          height={27}
        />
      </Link>
      <div className="flex items-center gap-2 border-2 border-gray-500 rounded-2xl">
        <Search className="ml-2" />
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="mr-2 w-full focus-visible:outline-none"
        />
      </div>
    </div>
  );
};
