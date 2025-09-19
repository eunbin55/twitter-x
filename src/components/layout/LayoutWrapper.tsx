import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const LayoutWrapper = ({
  children,
  title = "홈",
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-40 h-full p-4 bg-white fixed">
        <Sidebar />
      </div>
      <div className="flex flex-1 ml-40">
        <Header title={title} />
        <main className="flex-1 mt-14 p-4 border-x border-gray-200 dark:border-gray-700">
          {children}
        </main>
      </div>
    </div>
  );
};
