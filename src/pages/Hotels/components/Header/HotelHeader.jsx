"use client";

import { useState, useEffect, useContext } from "react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import MoonIcon from "@/components/ui/MoonIcon";
import SunIcon from "@/components/ui/SunIcon";
import Link from "next/link";
import Image from "next/image";
import PlaneImage from "../../../../../public/Assets/plane.png";
import HotelImage from "../../../../../public/Assets/hotel.png";
import TrainImage from "../../../../../public/Assets/train2.png";
import HomeImage from "../../../../../public/Assets/homestay.png";
import HolidayImage from "../../../../../public/Assets/beach.png";
import { CountryContext } from "@/components/context/CountryContext";

export default function HotelHeader() {
  const { countryData, setCountryData } = useContext(CountryContext);
  const Countryname = countryData.name;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 120 && currentScrollY < 150) {
          setHeaderVisible(false); // Hide header when scrolling down
        } else if (currentScrollY >= 150) {
          setHeaderVisible(false); // Completely hide header
        } else {
          setHeaderVisible(true); // Show header when scrolling up or less than 120px
        }

        // Show header when scrolling up
        if (currentScrollY < lastScrollY) {
          setHeaderVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ${
        theme === "light"
          ? "bg-white text-[#1D232A]"
          : "bg-[#1D232A] text-white"
      } shadow-md sm:px-16 fixed top-0 left-0 right-0 z-50`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 py-3"
      >
        <div className="flex lg:flex-1 gap-4">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Link href={"/"}>
              <img
                alt=""
                src="https://pngimagesfree.com/wp-content/uploads/Make-My-Trip-Logo-PNG@.png"
                className=" h-8 w-auto"
              />
            </Link>
          </a>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="font-bold border-b-2 dark:border-white dark:text-white hover:text-[#ED3237] transition-all delay-100 ease-in-out whitespace-nowrap w-[110px] overflow-hidden text-ellipsis text-center">
              {Countryname}
            </p>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              theme === "light" ? "text-gray-700" : "text-white"
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ml-20">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md font-semibold leading-0 ">
              <Link
                href="/Hotels"
                className="text-md font-semibold leading-0 hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
              >
                <i class="fa-solid fa-house px-2 pb-1 no-underline"></i>
                Dashboard
              </Link>
            </PopoverButton>
          </Popover>

          <Link
            href="/Hotels/Wishlist"
            className="text-md font-semibold leading-0  hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
          >
            <i class="fa-solid fa-heart px-2 no-underline"></i>
            WishList
          </Link>
          <Link
            href="/MyBooking"
            className="text-md font-semibold leading-0  hover:text-red-600 transition ease-in-out delay-100 cursor-pointer no-underline	"
          >
            <i class="fa-solid fa-bed px-2 no-underline"></i>
            MyBookings
          </Link>
        </PopoverGroup>

        {/* Theme Switcher Icon */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={toggleTheme} className="p-2">
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6 #1D232A" />
            ) : (
              <SunIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          className={`${
            theme === "light"
              ? "bg-white text-[#1D232A]"
              : "bg-[#1D232A] text-white"
          }  fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://pngimagesfree.com/wp-content/uploads/Make-My-Trip-Logo-PNG@.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className={`${
                      theme === "light"
                        ? "bg-white text-[#1D232A]"
                        : "bg-[#1D232A] text-white"
                    } "group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7`}
                  >
                    <Link
                      href={"/Flights/"}
                      className=" flex justify-center items-center gap-14 text-[12px] font-bold"
                    >
                      <Image src={PlaneImage} width={32} height={32} />
                      FLIGHTS
                    </Link>
                  </DisclosureButton>
                </Disclosure>
                <Link
                  href={"/Hotels/"}
                  className={`${
                    theme === "light"
                      ? "bg-white text-[#1D232A]"
                      : "bg-[#1D232A] text-white"
                  } flex items-center gap-14 text-[12px] font-bold -mx-3 rounded-lg px-3 py-2 `}
                >
                  <Image src={HotelImage} width={32} height={32} />
                  HOTELS
                </Link>
                <Link
                  href={"/Trains/"}
                  className={`${
                    theme === "light"
                      ? "bg-white text-[#1D232A]"
                      : "bg-[#1D232A] text-white"
                  } flex items-center gap-14 text-[12px] font-bold -mx-3 rounded-lg px-3 py-2 `}
                >
                  <Image src={TrainImage} width={32} height={32} />
                  TRAINS
                </Link>
                <Link
                  href={"/Homestays/"}
                  className={`${
                    theme === "light"
                      ? "bg-white text-[#1D232A]"
                      : "bg-[#1D232A] text-white"
                  } flex items-center gap-14 text-[12px] font-bold -mx-3 rounded-lg px-3 py-2 `}
                >
                  <Image src={HomeImage} width={32} height={32} />
                  HOMESTAYS
                </Link>

                <Link
                  href={"/Destination/"}
                  className={`${
                    theme === "light"
                      ? "bg-white text-[#1D232A]"
                      : "bg-[#1D232A] text-white"
                  } flex items-center gap-14 text-[12px] font-bold -mx-3 rounded-lg px-3 py-2 `}
                >
                  <Image src={HolidayImage} width={32} height={32} />
                  HOLIDAYS
                </Link>
              </div>
              <div className="flex justify-between align-middle items-center">
                <div className="py-6">
                  <a
                    href="#"
                    className={`${
                      theme === "light"
                        ? "bg-white text-[#1D232A]"
                        : "bg-[#1D232A] text-white"
                    }  -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 `}
                  >
                    Log in
                  </a>
                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end">
                  <button onClick={toggleTheme} className="p-2">
                    {theme === "light" ? (
                      <MoonIcon className="h-6 w-6 #1D232A" />
                    ) : (
                      <SunIcon className="h-6 w-6 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
