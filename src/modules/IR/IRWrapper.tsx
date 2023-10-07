import React from "react";
import { IRSidebar } from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const IRWrapper = () => {
  return (
    <div className="h-screen w-screen flex">
      <IRSidebar />
      <div className="w-[calc(100vw-60px)] h-full flex">
        <Outlet />
      </div>
    </div>
  );
};
