import React, { useContext, useEffect } from 'react'
import { CountryContext } from '../context/CountryContext'
import { useDispatch } from 'react-redux'
import { options } from '@/lib/constants'
import { addCountryHotelCode } from '@/store/countryHotelSlice'

const useCountryCodeHotel = () => {
    const { countryData, setCountryData } = useContext(CountryContext)
    const code = countryData.code

    const dispatch = useDispatch();
    const fetchCountryHotel = async () => {
        const res = await fetch(
            `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${code}`,
            options
        );
        const data = await res.json();
        dispatch(addCountryHotelCode(data.data));
        console.log(data.data);

    };

    useEffect(() => {
        fetchCountryHotel();
    }, [countryData]);
}

export default useCountryCodeHotel