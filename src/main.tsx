import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthWrapper } from "./wrappers/auth/index.tsx";
import { IRWrapper } from "./modules/IR/IRWrapper.tsx";
import { IRDashboardContainer } from "./modules/IR/dashboard/IrDashboardContainer.tsx";
import { IREncodeContainer } from "./modules/IR/encode/IREncodeContianer.tsx";
import { Toaster } from "sonner";
import { IREditContainer } from "./modules/IR/edit/IREditContainer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="bg-neutral-100 text-sm">
			<Toaster closeButton richColors visibleToasts={3} />
			<Auth0Provider
				domain="zolu.jp.auth0.com"
				clientId="o50BejLEHbSy3UeFO8IfhSt2ZMdSothr"
				authorizationParams={{
					redirect_uri: window.location.origin,
				}}
				cacheLocation="localstorage"
			>
				<AuthWrapper>
					<BrowserRouter>
						<Routes>
							<Route path="/IR" element={<IRWrapper />}>
								<Route path="dashboard" element={<IRDashboardContainer />} />
								<Route path="encode" element={<IREncodeContainer />} />
								<Route path="editDb" element={<IREditContainer />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</AuthWrapper>
			</Auth0Provider>
		</div>
	</React.StrictMode>
);
