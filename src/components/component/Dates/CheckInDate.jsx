"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext } from "react";
import { HotelSearchContext } from "@/components/context/HotelSearch";

export function CheckInDate() {
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const [date, setDate] = React.useState(getCurrentDate());

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

  const handleDateSelect = (selectedDate) => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      setDate(formattedDate);
      setCheckInDate(formattedDate);
    }
  };

  // console.log(date);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "sm:w-[280px] justify-start text-left font-normal w-full mt-1",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date ? new Date(date) : undefined} // Convert string back to Date
          onSelect={handleDateSelect}
          initialFocus
          disabled={(date) => date < new Date()} // Disable past dates
        />
      </PopoverContent>
    </Popover>
  );
}
