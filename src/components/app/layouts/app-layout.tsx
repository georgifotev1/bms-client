import { ReactNode } from "react";
import { SideBar } from "../sidebar/sidebar";
import { NavBar } from "../navbar/navbar";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <SideBar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        {children}
      </main>
    </div>
  );
}
