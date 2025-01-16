import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 h-full">
        <Sidebar />
        <main className="flex-1 bg-[#F1F2F4]">{children}</main>
      </div>
    </div>
  );
};

export default dashboardLayout;
