import { HotelDetailsId } from "@/components/context/HotelDetailsId";
import useHotelDetails from "@/components/hooks/useHotelDetails";
import useHotelReview from "@/components/hooks/useHotelReview";
import { useParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonCard } from "../components/HotelCarousel/SkeletonCard";
import { Divider, Rating } from "@mui/material";
import Link from "next/link";
import HotelRoom from "../components/HotelRooms/HotelRoom";
import HotelLocation from "../components/HotelLocation.jsx/HotelLocation";
import Testimonial from "../components/Testimonial/Testimonial";
import { HotelSearchContext } from "@/components/context/HotelSearch";
import AdvanceSearchHotel from "@/components/component/AdvanceSearch/AdvanceSearchHotel";

const HotelDetails = () => {
  useHotelDetails();
  const { hotelId, setHotelId } = useContext(HotelDetailsId);
  const {
    checkInDate,
    checkOutDate,
    city,
    occupancy,
    guestNationality,
    currency,
    hotelIds,
    setHotelIds,
  } = useContext(HotelSearchContext);
  const params = useParams();
  const id = params ? params.id : null;

  useEffect(() => {
    if (id !== hotelId.id) {
      setHotelId({ id });
      setHotelIds({ id });
    }
  }, [id]);

  const { loading, error } = useHotelDetails();
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);

  // console.log(hotelDetail);

  const strongTagText = hotelDetail?.hotelDescription
    ? hotelDetail?.hotelDescription
        .match(/<strong>(.*?)<\/strong>/g)
        ?.map((tag) => tag.replace(/<\/?strong>/g, "")) || []
    : [];

  const dispatch = useDispatch();

  const handleWishlist = (item) => {
    // dispatch(addToWishList(item));
    // toast.success("Hotel Added To Wishlist");
  };

  console.log(checkInDate);
  console.log(checkOutDate);
  console.log(city);
  console.log(occupancy);
  console.log(guestNationality);
  console.log(currency);
  console.log(hotelIds.id);

  if (loading) {
    return (
      <div className=" my-14 mx-32">
        <div className=" flex gap-3 my-5">
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <div className=" flex gap-3 my-5">
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <div className=" flex gap-3 my-5">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  return (
    <div className=" text-white px-6 sm:px-8 md:px-10 lg:px-16 xl:px-16 2xl:px-28 mt-28 mb-8">
      <div className="centeralContainer mt-5 mb-5 border border-gray-700 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 bg-[#14181B] p-4 rounded-lg">
          {/* Left section with hotel images and details */}
          <div className="hotelImages w-full lg:w-[60%]">
            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <h1 className="text-2xl font-bold text-white">
                {hotelDetail?.name || "Hotel Name"}
              </h1>
              <Rating
                name="size-small"
                value={hotelDetail?.starRating || 4}
                readOnly
                className="text-yellow-400"
              />
            </div>

            <div className="images">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[490px] lg:h-[465px]">
                  <img
                    src={hotelDetail?.main_photo || "/placeholder.jpg"}
                    alt="Main Hotel"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-full lg:w-[238px] lg:h-[225px]">
                    <img
                      src={
                        hotelDetail?.hotelImages[1]?.url || "/placeholder.jpg"
                      }
                      alt="Hotel"
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative w-full lg:w-[238px] lg:h-[225px]">
                    <img
                      src={
                        hotelDetail?.hotelImages[5]?.url || "/placeholder.jpg"
                      }
                      alt="Hotel"
                      className="rounded-lg w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                      <Link href={`/Hotels/HotelDetails/MoreImages`}>
                        <span className="text-white font-semibold">
                          MORE IMAGES
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              {hotelDetail?.hotelDescription ? (
                <div
                  className="hotelDescription text-white"
                  dangerouslySetInnerHTML={{
                    __html: hotelDetail.hotelDescription,
                  }}
                />
              ) : (
                <div className="text-white mt-4 line-clamp-3">
                  Amenities: Luxury hotels offer high-end amenities like
                  designer bathrobes, spa-quality toiletries, and plush bedding.
                  Some hotels also have in-room hot tubs, fireplaces, and
                  private balconies.
                </div>
              )}
            </div>
          </div>

          {/* Right section with hotel info and reviews */}
          <div className="otherThings w-full lg:w-[40%] bg-[#1D232A] border border-gray-700 rounded-lg p-4 h-full">
            <h5 className="text-lg text-center font-bold mb-4">
              Hotel Important Information
            </h5>
            <p className="px-2 mb-4">
              {hotelDetail?.hotelImportantInformation ||
                "No important information available."}
            </p>

            <div className="flex flex-col gap-4 mb-4">
              <div className="flex items-center justify-between bg-[#292F36] p-3 rounded-lg">
                <div className="rating bg-[#0077b6] text-center px-4 py-3 rounded-lg font-bold">
                  {hotelDetail?.rating || "4.5"}
                </div>
                <div className="flex flex-col">
                  <Rating
                    name="size-small"
                    value={hotelDetail?.starRating || 4}
                    readOnly
                    className="text-yellow-400"
                  />
                  <p className="font-semibold">
                    ({hotelDetail?.reviewCount || 150}) Ratings
                  </p>
                </div>
                <Link
                  href="#testimonial"
                  smooth
                  duration={500}
                  className="text-[#0077b6] font-bold cursor-pointer"
                >
                  All Reviews
                </Link>
              </div>

              <div className="flex items-center bg-[#292F36] p-3 rounded-lg">
                <img
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/map-icon-dtls.png"
                  alt="Map"
                  className="w-12 mr-3"
                />
                <div>
                  <p>
                    {hotelDetail?.address},{" "}
                    {hotelDetail?.city || "Unknown City"}
                  </p>
                  <Link
                    href="#hotelLocation"
                    smooth
                    duration={500}
                    className="text-[#0077b6] cursor-pointer"
                  >
                    View on Map
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="w-full lg:w-2/3 text-white bg-red-600 border-2 border-red-600 py-2 px-4 font-semibold rounded-md"
                onClick={() => handleWishlist(hotelDetail)}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Rooms */}
      {/* <div className="hotelRoom pb-5">
        {hotelDetail && hotelDetail?.rooms && hotelDetail?.rooms.length > 0 ? (
          <>
            {hotelDetail?.rooms.map((item, index) => {
              return (
                <HotelRoom
                  key={index}
                  strongTagText={strongTagText} // Room-specific strong tag text
                />
              );
            })}

            <HotelRoom
              hotelDetail={hotelDetail}
              // You can pass more static props if needed
            /> 

            <></>
          </>
        ) : (
          <div>No rooms available</div>
        )}
      </div> */}

<div className="hotelRoom pb-5">
  {hotelDetail && hotelDetail?.rooms && hotelDetail?.rooms.length > 0 ? (
    hotelDetail.rooms.map((item, index) => (
      <HotelRoom
        key={index}
        item={item}
        strongTagText={strongTagText} // Room-specific strong tag text
      />
    ))
  ) : (
    <div>No rooms available</div>
  )}
</div>


      {/** Hotel Location Section */}
      <div>
        <div className="mt-5">
          <HotelLocation />
        </div>
      </div>

      <div>
        <div className="my-5 hidden sm:block md:block lg:block xl:block">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
