import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./Command";
import { cn } from "../lib/cn";
import { Dot } from "lucide-react";

interface ComboBoxValue {
  value: number;
  label: string;
}

export const Combobox = ({
  data,
  selected,
  setSelectedData,
}: {
  data: Array<ComboBoxValue>;
  selected: number;
  setSelectedData: (data: number) => void;
  disabled?: boolean;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <div
          className={cn(
            "h-9 px-4 py-2 rounded-lg bg-neutral-100 font-semibold text-neutral-500 transition duration-75 ",
            open && "ring-1 ring-offset-1 ring-primary transition"
          )}
        >
          <span className="w-full text-left whitespace-nowrap text-ellipsis overflow-hidden  justify-start flex">
            {data.find((data) => data.value == selected) ? (
              data.find((data) => data.value == selected)?.label
            ) : (
              <>Select a value</>
            )}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Command className="m max-h-[calc(100vh-500px)] overflow-y-auto">
          <CommandInput>Search here...</CommandInput>
          <CommandEmpty>There is no such thing</CommandEmpty>
          <CommandGroup>
            {data.map((data) => (
              <CommandItem
                key={data.value}
                value={data.label}
                onSelect={() => {
                  console.log(data.label);
                  setSelectedData(data.value);
                  setOpen(false);
                }}
              >
                <Dot
                  size={22}
                  className={
                    data.value == selected ? "opacity-100" : "opacity-0"
                  }
                />
                {data.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
