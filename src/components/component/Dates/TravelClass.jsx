"use client";

import React, { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function TravelClass() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  // Travel class options
  const travelClasses = ["Economy", "Premium Economy", "Business", "First Class"];

  const handleSelect = (value) => {
    setSelectedValue(value);
    setOpen(false); // Close the popover after selection
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="sm:w-[200px] justify-between w-full"
        >
          {selectedValue ? selectedValue : "Select Travel Class..."}{" "}
          {/* Display selected travel class */}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[230px] p-0">
        <Command>
          <CommandInput placeholder="Search travel class..." />
          <CommandList>
            <CommandEmpty>No travel class found.</CommandEmpty>
            <CommandGroup>
              {travelClasses.map((travelClass) => (
                <CommandItem
                  key={travelClass}
                  value={travelClass}
                  onSelect={() => handleSelect(travelClass)}
                >
                  {travelClass}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
