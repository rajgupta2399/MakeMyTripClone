import { CountryContext } from '@/components/context/CountryContext';
import React, { useContext } from 'react'
import { Rating } from '@mui/material';

const HotelCard = ({ hotelData }) => {
  const { countryData, setCountryData } = useContext(CountryContext)
  const { city, address, name, main_photo, rating, stars, zip } = hotelData;


  return (
    <div className="flex justify-center mb-5">
      <div className="py-4 bg-[#14181B] shadow-md rounded-xl cursor-pointer h-auto w-full max-w-[370px] md:max-w-[350px] lg:max-w-[370px]">
        <div className="overflow-hidden rounded-t-lg h-[200px] w-[340px]">
          <img
            alt={name}
            className="w-full object-cover px-3 rounded-md"
            src={
              main_photo ||
              "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
            }
          />
        </div>
        <div className="px-4 py-3 text-white">
          <h3 className="text-[18px] w-[280px] font-bold truncate">{name}</h3>
          <p className="text-[14px] text-gray-300 mt-1">
            {countryData.name}, {city}
          </p>
          <div className="flex items-center justify-between mt-2">
            <Rating name="size-medium" defaultValue={stars} readOnly />
            <p className="text-[14px] font-semibold">{rating} Rating</p>
          </div>
          <p className="mt-1 text-gray-400 text-[14px] truncate">
            {address}, {zip}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HotelCard