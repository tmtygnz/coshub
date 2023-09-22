import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthWrapper } from "./wrappers/auth/index.tsx";
import { IRWrapper } from "./modules/IR/IRWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="text-sm">
      <Auth0Provider
        domain="zolu.jp.auth0.com"
        clientId="o50BejLEHbSy3UeFO8IfhSt2ZMdSothr"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <AuthWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/IR" element={<IRWrapper />} />
            </Routes>
          </BrowserRouter>
        </AuthWrapper>
      </Auth0Provider>
    </div>
  </React.StrictMode>
);
