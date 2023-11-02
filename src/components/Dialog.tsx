"use client";

import * as DialogCore from "@radix-ui/react-dialog";
import React, { forwardRef } from "react";
import { Button } from "./Button";
import { cn } from "../lib/cn";
import { X } from "lucide-react";
const Dialog = DialogCore.Root;
const Trigger = DialogCore.Trigger;

const DialogPortal = ({ ...props }: DialogCore.DialogPortalProps) => (
  <DialogCore.Portal {...props} />
);
DialogPortal.displayName = DialogCore.Portal.displayName;

const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogCore.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogCore.Overlay>
>(({ className, ...props }, ref) => (
  <DialogCore.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm data-[state=open]:animate-overlayShow",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogCore.Overlay.displayName;

const DialogContent = forwardRef<
  React.ElementRef<typeof DialogCore.Content>,
  React.ComponentPropsWithoutRef<typeof DialogCore.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogCore.Content
      className={cn(
        className,
        "data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white p-5 border rounded-lg"
      )}
      ref={ref}
      {...props}
    >
      <DialogCore.Close className="absolute right-4 top-4">
        <Button size="icon">
          <X size={16} />
        </Button>
      </DialogCore.Close>
      {children}
    </DialogCore.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogCore.Content.displayName;
export { Dialog, Trigger, DialogContent };
