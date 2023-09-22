import { useAuth0 } from "@auth0/auth0-react";
import { LoaderIcon } from "lucide-react";
import React, { useEffect } from "react";

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth0();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) auth.loginWithRedirect();
  }, [auth.isLoading, auth.isAuthenticated, auth]);

  return (
    <>
      {auth.isLoading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
