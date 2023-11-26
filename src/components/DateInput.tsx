import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { CalendarDays } from "lucide-react";
import { Calendar } from "./Date";
import dayjs from "dayjs";

interface DateInputProps {
  selected: Date;
  onChange: (date: Date) => void;
}

export const DateInput = ({ selected, onChange }: DateInputProps) => {
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div className="flex items-center justify-start text-neutral-500 font-semibold gap-2 w-full min-w-fit h-9 rounded-lg bg-neutral-100 focus:ring-1 ring-primary hover:bg-neutral-200 transition duration-75 ring-offset-1 px-3 py-2 focus:outline-none">
          <span>{dayjs(selected).format("MMM DD, YYYY")}</span>
          <CalendarDays size={16} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-fit ml-10">
        <div>
          <Calendar
            mode="single"
            selected={selected}
            onSelect={(date) => onChange(date!)}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
