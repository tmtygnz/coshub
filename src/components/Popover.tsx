import * as PopoverCore from "@radix-ui/react-popover";
import React from "react";
import { cn } from "../lib/cn";

const Popover = PopoverCore.Root;
const PopoverTrigger = PopoverCore.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverCore.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverCore.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverCore.Portal>
    <PopoverCore.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "data-[state=open]:animate-contentShow shadow-xl bg-white z-50 w-72 rounded-md border data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade",
        className
      )}
      {...props}
    />
  </PopoverCore.Portal>
));
PopoverContent.displayName = PopoverCore.Content.displayName;
export { Popover, PopoverTrigger, PopoverContent };
