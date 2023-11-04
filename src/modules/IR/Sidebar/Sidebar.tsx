import React from "react";
import { Edit, History, LayoutDashboard, PlusIcon } from "lucide-react";
import { SidebarButton } from "./SidebarButton";
import { IrIcon } from "../../../components/icons/IrIcon";

export const IRSidebar = () => {
  return (
    <div className="h-full w-[260px] text-dark-on-background border-opacity-10 shrink-0 flex flex-col rounded-r-xl">
      <div className="font-bold bg-white border p-1 rounded-lg flex gap-2">
        <IrIcon className="w-10 h-10" />
        <div className="flex flex-col justify-center">
          <p className="font-semibold text-neutral-500 text-xs">Biogenic</p>
          <p className="font-bold">Inline Rejection</p>
        </div>
      </div>
      <div className="h-full mt-5">
        <div className="flex flex-col gap-1 ">
          <SidebarButton pathVerifier="/IR/dashboard">
            <LayoutDashboard size={14} />
            Dashboard
          </SidebarButton>
          <SidebarButton pathVerifier="/IR/encode">
            <PlusIcon size={14} />
            Encode
          </SidebarButton>
          <SidebarButton pathVerifier="/IR/editDb">
            <Edit size={14} />
            Edit database
          </SidebarButton>
          <SidebarButton pathVerifier="/IR/history">
            <History size={14} />
            History
          </SidebarButton>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <SidebarButton pathVerifier="/IR/help">
          <span>Help & Support</span>
        </SidebarButton>
      </div>
    </div>
  );
};
