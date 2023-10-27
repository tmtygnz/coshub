import React from "react";

export const SidebarButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-9 rounded-lg hover:bg-black/5 items-center flex gap-1 cursor-pointer px-4 py-2 font-medium text-neutral-800 hover:text-neutral-950">
      {children}
    </div>
  );
};
