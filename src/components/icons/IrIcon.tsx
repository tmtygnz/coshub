import React from "react";
import { cn } from "../../lib/cn";

export const IrIcon = ({className="w-8 h-8"}: {className?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect width="64" height="64" rx="10" fill="url(#paint0_linear_25_2)" />
      <path
        d="M27.8111 18.8182V45H22.2756V18.8182H27.8111ZM32.2631 45V25.3636H37.543V28.7898H37.7475C38.1055 27.571 38.7063 26.6506 39.5501 26.0284C40.3938 25.3977 41.3654 25.0824 42.4648 25.0824C42.7376 25.0824 43.0316 25.0994 43.3469 25.1335C43.6623 25.1676 43.9393 25.2145 44.1779 25.2741V30.1065C43.9222 30.0298 43.5685 29.9616 43.1168 29.902C42.6651 29.8423 42.2518 29.8125 41.8768 29.8125C41.0756 29.8125 40.3597 29.9872 39.729 30.3366C39.1069 30.6776 38.6126 31.1548 38.2461 31.7685C37.8881 32.3821 37.7092 33.0895 37.7092 33.8906V45H32.2631Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_25_2"
          x1="32"
          y1="0"
          x2="32"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EA6711" />
          <stop offset="1" stopColor="#FF5002" />
        </linearGradient>
      </defs>
    </svg>
  );
};
