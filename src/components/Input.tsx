import React from "react";
import { cn } from "../lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-9 rounded-lg bg-neutral-100 focus:ring-1 ring-primary hover:bg-neutral-200 transition duration-75 ring-offset-1 px-3 py-2 focus:outline-none font-medium",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
