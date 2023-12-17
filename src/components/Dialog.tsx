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

const DialogHeader = ({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"w-full flex items-center justify-between px-4 py-2 bg-neutral-100 ",
			className
		)}
		{...props}
	>
		{children}
		<DialogCore.Close>
			<Button padding="sm">
				<X size={16} />
			</Button>
		</DialogCore.Close>
	</div>
);
DialogHeader.displayName = "DialogHeader";

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogCore.Title>,
	React.ComponentPropsWithoutRef<typeof DialogCore.Title>
>(({ className, ...props }, ref) => (
	<DialogCore.Title
		ref={ref}
		className={cn(
			"font-semibold leading-none tracking-tight",
			className
		)}
		{...props}
	/>
));
DialogTitle.displayName = DialogCore.Title.displayName;

const DialogContent = forwardRef<
	React.ElementRef<typeof DialogCore.Content>,
	React.ComponentPropsWithoutRef<typeof DialogCore.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogCore.Content
			className={cn(
				className,
				"overflow-clip data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white border rounded-lg"
			)}
			ref={ref}
			{...props}
		>
			{children}
		</DialogCore.Content>
	</DialogPortal>
));
DialogContent.displayName = DialogCore.Content.displayName;
export { Dialog, Trigger, DialogContent, DialogHeader, DialogTitle };
