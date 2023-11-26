import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { cn } from "../lib/cn";

export const buttonVariants = cva(
  "flex gap-1 items-center rounded font-medium justify-center transition duration-75",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white font-semibold hover:bg-primary-600",
        secondary:
          "bg-white hover:bg-neutral-100/80 transition text-black border ",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-lg",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
