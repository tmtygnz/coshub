import React, { useState } from "react";
import { IRSidebar } from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "../../components/Resizeable";

export const IRWrapper = () => {
	const [isCollpased, setIsCollpase] = useState<boolean>(false);
	return (
		<div className="h-screen w-screen flex p-2 gap-2">
			<ResizablePanelGroup direction="horizontal" className="">
				<ResizablePanel
					minSize={13.74}
					defaultSize={13.74}
					collapsedSize={2.80}
					onCollapse={() => {
						setIsCollpase(true);
					}}
					onExpand={() => setIsCollpase(false)}
					collapsible
				>
					<IRSidebar isCollapsed={isCollpased} />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel>
					<div className="bg-white h-full w-full rounded-xl border">
						<Outlet />
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
};
