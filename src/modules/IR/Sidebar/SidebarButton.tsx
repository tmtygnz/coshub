import React from "react";
import { cn } from "../../../lib/cn";
import { useLocation, useNavigate } from "react-router-dom";

export const SidebarButton = ({
  children,
  pathVerifier,
  isCollapsed = false
}: {
  children: React.ReactNode;
  pathVerifier: string;
  isCollapsed?: boolean
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(pathVerifier)}
      className={cn(
        "w-full h-10 hover:bg-black/5 items-center flex gap-2 cursor-pointer  font-medium rounded-lg transition duration-75",
        location.pathname == pathVerifier
          ? "bg-white border hover:bg-white"
          : "text-neutral-600 hover:text-black",
          isCollapsed ? "flex items-center justify-center p-0" : "px-2 py-2"
      )}
    >
      {children}
    </div>
  );
};
