import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0Wrapper } from "./wrappers/auth/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="zolu.jp.auth0.com"
      clientId="ri3XgdK0lK2zZShL60vzTPavE7XP7BkK"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Auth0Wrapper>
            <Route path="/" Component={App} />
          </Auth0Wrapper>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
