import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-14 w-full">
        <Header />
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 border-x border-gray-200 dark:border-gray-700">
          {children}
        </main>
      </div>
    </div>
  );
};
