"use client";
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const LayoutWrapper = ({
  children,
  title = "홈",
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <div className="flex flex-col flex-1 lg:ml-64">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-4 border-x border-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
};
