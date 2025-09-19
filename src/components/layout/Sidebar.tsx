import { Bookmark, House, PencilLine, Search } from "lucide-react";
import React from "react";

export const Sidebar = () => {
  return (
    <nav className="flex flex-col space-y-2">
      <SidebarItem title="홈" icon={<House />} href="/" />
      <SidebarItem title="검색" icon={<Search />} href="/search" />
      {/* <SidebarItem title="북마크" icon={<Bookmark />} href="/bookmark" /> */}
      <SidebarItem title="게시하기" icon={<PencilLine />} href="/compose" />
    </nav>
  );
};

export const SidebarItem = ({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full gap-3 cursor-pointer"
    >
      {icon}
      <span>{title}</span>
    </a>
  );
};
