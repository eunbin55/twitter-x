import { House, Menu, PencilLine, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border hover:bg-gray-50"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed top-0 left-0 z-50 lg:z-auto
          w-64 h-full bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          flex flex-col space-y-2 p-4
        `}
      >
        <Link href={"/"} onClick={() => window.innerWidth < 1024 && onToggle()}>
          <div className="px-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/450px-X_logo_2023.svg.png"
              alt="Logo"
              width={30}
              height={27}
            />
          </div>
        </Link>
        <SidebarItem
          title="홈"
          icon={<House className="h-4 w-4" />}
          href="/"
          onClick={() => window.innerWidth < 1024 && onToggle()}
        />
        {/* <SidebarItem
          title="검색"
          icon={<Search className="h-4 w-4" />}
          href="/search"
          onClick={() => window.innerWidth < 1024 && onToggle()}
        /> */}
        {/* <SidebarItem title="북마크" icon={<Bookmark />} href="/bookmark" /> */}
        <SidebarItem
          title="게시하기"
          icon={<PencilLine className="h-4 w-4" />}
          href="/compose"
          onClick={() => window.innerWidth < 1024 && onToggle()}
        />
      </nav>
    </>
  );
};

const SidebarItem = ({
  title,
  icon,
  href,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center p-2 hover:bg-gray-100 rounded-full gap-3 cursor-pointer"
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};
