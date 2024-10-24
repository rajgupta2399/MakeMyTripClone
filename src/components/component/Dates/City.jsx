"use client";

import * as React from "react";
import { useState, useEffect, useContext } from "react";
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
import { CountryContext } from "@/components/context/CountryContext";
import { HotelCityContext } from "@/components/context/HotelCityContext";
import { HotelSearchContext } from "@/components/context/HotelSearch";

export function City() {
  const { countryData } = useContext(CountryContext);
  const { hotelCityData, setHotelCityData } = useContext(HotelCityContext);
  const code = countryData.code;
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState({ city: "New Delhi" });
  const [cityCode, setCityCode] = useState([]);
  const {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    city,
    setCity,
    occupancy,
    setOccupancy,
    guestNationality,
    setGuestNationality,
    currency,
    setCurrency,
    hotelIds,
    setHotelIds,
  } = useContext(HotelSearchContext);

  // Fetch the cities using the selected country code
  const fetchCountryCode = async () => {
    try {
      const res = await fetch(
        `https://api.liteapi.travel/v3.0/data/cities?countryCode=${code}&timeout=4`,
        options
      );
      const data = await res.json();
      setCityCode(data.data);
      // console.log(data.data);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  useEffect(() => {
    if (code) fetchCountryCode();
  }, [code]);

  const handleClick = (city) => {
    setSelectedCity(city); // Set selected city using the city object
    setOpen(false); // Close the popover after selection
    setHotelCityData(city);
  };
  setCity(selectedCity.city);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="sm:w-[200px] justify-between w-full"
        >
          {selectedCity.city ? selectedCity.city : "Select city..."}{" "}
          {/* Display city */}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[230px] p-0">
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {cityCode.map((city) => (
                <CommandItem
                  key={city.city} // Use city as key
                  value={city.city}
                  onSelect={() => handleClick(city)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCity.city === city.city
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {city.city} {/* Display the city name */}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
