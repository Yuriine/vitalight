import React from "react";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => (
  <main className="bg-[#f8f8f8] min-h-screen w-full font-sans">
    <Outlet />
  </main>
);

export default MainLayout;
