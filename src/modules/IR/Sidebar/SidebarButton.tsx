import React from "react";
import { cn } from "../../../lib/cn";
import { useLocation, useNavigate } from "react-router-dom";

export const SidebarButton = ({
  children,
  pathVerifier,
}: {
  children: React.ReactNode;
  pathVerifier: string;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(pathVerifier)}
      className={cn(
        "w-full hover:bg-black/5 items-center flex gap-2 cursor-pointer px-2 py-2 font-medium rounded-lg transition duration-75",
        location.pathname == pathVerifier
          ? "bg-white border hover:bg-white"
          : "text-neutral-600 hover:text-black"
      )}
    >
      {children}
    </div>
  );
};
