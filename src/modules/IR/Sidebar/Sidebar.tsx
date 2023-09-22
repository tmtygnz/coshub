import React from "react";
import { Button } from "../../../components/Button";
import { Edit, History, LayoutDashboard, PlusIcon } from "lucide-react";
import { SidebarButton } from "./SidebarButton";

export const IRSidebar = () => {
  return (
    <div className="h-screen w-[219px] border-r border-black border-opacity-10 shrink-0">
      <div className="px-3 py-5 font-bold">Inline Rejection</div>
      <div className="px-3 flex flex-col w-full">
        <Button variant="secondary">
          <PlusIcon size={15} />
          Encode
        </Button>
      </div>
      <div className="flex mt-5 px-3 flex-col justify-between h-full">
        <div className="flex flex-col gap-1">
          <SidebarButton>
            <LayoutDashboard size={14} />
            Dashboard
          </SidebarButton>
          <SidebarButton>
            <Edit size={14} />
            Edit database
          </SidebarButton>
          <SidebarButton>
            <History size={14} />
            History
          </SidebarButton>
        </div>
        <div className="flex flex-col">
          <SidebarButton>
            <span>Help & Support</span>
          </SidebarButton>
        </div>
      </div>
    </div>
  );
};
