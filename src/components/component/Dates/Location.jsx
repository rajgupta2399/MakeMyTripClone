"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
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
import { options } from "@/lib/constants";

export function Location() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [countryCode, setCountryCode] = useState([]);

  const fetchCountryCode = async () => {
    const res = await fetch(
      "https://api.liteapi.travel/v3.0/data/countries?timeout=4",
      options
    );
    const data = await res.json();
    setCountryCode(data.data);
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="sm:w-[200px] justify-between w-full"
        >
          {value
            ? countryCode.find((country) => country.code === value)?.name
            : "Select country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[230px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countryCode.map((country) => (
                <CommandItem
                  key={country.code}
                  value={country.code} // Assuming 'code' is the unique identifier
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {country.code},{country.name}{" "}
                  {/* Assuming 'name' is the display name */}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
