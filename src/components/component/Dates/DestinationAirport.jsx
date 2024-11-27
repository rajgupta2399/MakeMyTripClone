"use client";

import React, { useState, useEffect, useContext } from "react";
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
import { ArrivalAirportContext } from "@/components/context/ArrivalAirportContex";

export function DestinationAirports() {
  const { arrivalAirportData, setArrivalAirportData } = useContext(
    ArrivalAirportContext
  );
  const [open, setOpen] = useState(false);
  const [iataCodes, setIataCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState(null);

  // Fetch the IATA codes
  const fetchIataCodes = async () => {
    try {
      const res = await fetch(
        "https://api.liteapi.travel/v3.0/data/iataCodes?timeout=4",
        options
      );
      const data = await res.json();
      setIataCodes(data.data); // Update with fetched data
    } catch (error) {
      console.error("Error fetching IATA codes:", error);
    }
  };

  useEffect(() => {
    fetchIataCodes();
  }, []);

  const handleSelect = (code) => {
    setSelectedCode(code); // Set the selected IATA code
    setOpen(false); // Close the popover
    setArrivalAirportData(code);
  };

  // console.log(arrivalAirportData.code);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="sm:w-[200px] w-full justify-between overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {selectedCode ? selectedCode.name : "Select airport..."}{" "}
          {/* Display selected airport */}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[230px] p-0">
        <Command>
          <CommandInput placeholder="Search airport..." />
          <CommandList>
            <CommandEmpty>No airport found.</CommandEmpty>
            <CommandGroup>
              {iataCodes.map((code) => (
                <CommandItem
                  key={code.code} // Use IATA code as key
                  value={code.name}
                  onSelect={() => handleSelect(code)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCode?.code === code.code
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {code.name} {/* Display airport name */}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
