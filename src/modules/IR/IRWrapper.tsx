import React from "react";
import { IRSidebar } from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const IRWrapper = () => {
  return (
    <div className="h-screen w-screen flex p-2 gap-2">
      <IRSidebar />
      <div className="bg-white h-full w-full rounded-xl border">
        <Outlet />
      </div>
    </div>
  );
};
