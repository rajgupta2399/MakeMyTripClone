import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addHotelFacility } from "@/store/hotelFacilitySlice";
import { options } from "@/lib/constants";

const useHotelFacility = () => {
    const dispatch = useDispatch();
    const fetchHotelFacility = async () => {
        const res = await fetch(
            `https://api.liteapi.travel/v3.0/data/facilities`,
            options
        );
        const data = await res.json();
        dispatch(addHotelFacility(data.data));

    };

    useEffect(() => {
        fetchHotelFacility();
    }, []);
};

export default useHotelFacility;
