import React from "react";

export const SidebarButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-7 rounded hover:bg-black/10 items-center flex gap-1 transition duration-75 cursor-pointer px-4 py-2 font-medium text-neutral-800 hover:text-neutral-950">
      {children}
    </div>
  );
};
