import { ReactNode } from "react";
import { NavBar } from "../../features/dashboard/components/navbar/navbar";
import { SideBar } from "../../features/dashboard/components/sidebar/sidebar";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <SideBar />
      <main className="p-4 md:ml-64 h-auto pt-20">{children}</main>
    </div>
  );
}
