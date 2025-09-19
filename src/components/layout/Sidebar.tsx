import { Bookmark, House, PencilLine, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <nav className="flex flex-col space-y-2">
      <Link href={"/"}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/450px-X_logo_2023.svg.png"
          alt=""
          width={30}
          height={27}
        />
      </Link>
      <SidebarItem title="홈" icon={<House className="h-4 w-4" />} href="/" />
      <SidebarItem
        title="검색"
        icon={<Search className="h-4 w-4" />}
        href="/search"
      />
      {/* <SidebarItem title="북마크" icon={<Bookmark />} href="/bookmark" /> */}
      <SidebarItem
        title="게시하기"
        icon={<PencilLine className="h-4 w-4" />}
        href="/compose"
      />
    </nav>
  );
};

const SidebarItem = ({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full gap-3 cursor-pointer"
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};
