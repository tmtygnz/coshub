import React from "react";
import { cn } from "../../../lib/cn";

export const SidebarButton = ({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <div
      className={cn(
        "w-full hover:bg-black/5 items-center flex gap-2 cursor-pointer px-2 py-2 font-medium rounded-lg transition duration-75",
        active ? "bg-white border hover:bg-white" : "text-neutral-600 hover:text-black"
      )}
    >
      {children}
    </div>
  );
};
