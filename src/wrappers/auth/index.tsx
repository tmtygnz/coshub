import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "lucide-react";
import React, { useEffect } from "react";

export const Auth0Wrapper = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth0();
  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) auth.loginWithPopup();
  }, [auth, auth.isLoading]);
  return (
    <>
      {auth.isLoading && !auth.isAuthenticated ? (
        <div className="h-screen w-screen flex items-center justify-center">
          asd
          <Loader className="animate-spin" />
        </div>
      ) : (
        { children }
      )}
    </>
  );
};
