import React from "react";
import { Command as CommandCore } from "cmdk";
import { cn } from "../lib/cn";

export const Command = React.forwardRef<
  React.ElementRef<typeof CommandCore>,
  React.ComponentPropsWithoutRef<typeof CommandCore>
>(({ className, ...props }, ref) => (
  <CommandCore
    ref={ref}
    className={cn("flex h-full w-full flex-col rounded-md bg-white", className)}
    {...props}
  />
));
Command.displayName = CommandCore.displayName;

//! add dialog stuffs here if needed
export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandCore.Input>,
  React.ComponentPropsWithoutRef<typeof CommandCore.Input>
  // V8 is yelling at me sorry, gotta disable this to work.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ className, children, ...props }, ref) => {
  return (
    <div className="flex items-center border-b px-3">
      <CommandCore.Input
        ref={ref}
        className={cn(
          "flex h-9 rounded-none w-full border-none bg-none py-3 text-sm outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
});
CommandInput.displayName = CommandCore.Input.displayName;

export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandCore.List>,
  React.ComponentPropsWithoutRef<typeof CommandCore.List>
>(({ className, ...props }, ref) => (
  <CommandCore.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));
CommandList.displayName = CommandCore.List.displayName;

export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandCore.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandCore.Empty>
>((props, ref) => (
  <CommandCore.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));
CommandEmpty.displayName = CommandCore.Empty.displayName;

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandCore.Group>,
  React.ComponentPropsWithoutRef<typeof CommandCore.Group>
>(({ className, ...props }, ref) => (
  <CommandCore.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-gray-500 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500",
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandCore.Group.displayName;

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandCore.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandCore.Separator>
>(({ className, ...props }, ref) => (
  <CommandCore.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandCore.Separator.displayName;

//! Cause for concern
export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandCore.Item>,
  React.ComponentPropsWithoutRef<typeof CommandCore.Item>
>(({ className, ...props }, ref) => (
  <CommandCore.Item
    ref={ref}
    className={cn(
      "h-8 px-3 relative flex cursor-default select-none items-center  gap-2 text-sm outline-none aria-selected:bg-black aria-selected:bg-opacity-10 rounded-md text-black data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandCore.Item.displayName;

export const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-gray-500", className)}
      {...props}
    />
  );
};
