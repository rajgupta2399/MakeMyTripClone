"use client";

import { useState, useEffect } from "react";
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
import PlaneImage from "../../../../public/Assets/plane.png";
import HotelImage from "../../../../public/Assets/hotel.png";
import TrainImage from "../../../../public/Assets/train2.png";
import HomeImage from "../../../../public/Assets/homestay.png";

export default function Header() {
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
      } shadow-lg px-5 fixed top-0 left-0 right-0 z-50`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 py-3"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Link href={"/"}>
              <img
                alt=""
                src="https://pngimagesfree.com/wp-content/uploads/Make-My-Trip-Logo-PNG@.png"
                className=" h-10 w-auto"
              />
            </Link>
          </a>
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${
                theme === "light" ? "#1D232A" : "text-white"
              }`}
            >
              <Link
                href={"/Flights/"}
                className=" flex flex-col justify-center items-center gap-2 text-[16px] font-semibold"
              >
                {/**
                  <Image src={PlaneImage} width={32} height={32} />
                  */}
                FLIGHTS
              </Link>
            </PopoverButton>
            <PopoverPanel
              className={`absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            >
              {/* Product panel */}
            </PopoverPanel>
          </Popover>

          <Link
            href={"/Hotels/"}
            className={`${
              theme === "light" ? "#1D232A" : "text-white"
            } flex flex-col justify-center items-center gap-2 text-[16px] leading-6 font-semibold`}
          >
            {/**
                <Image src={HotelImage} width={32} height={32} />
                 */}
            HOTELS
          </Link>
          <a
            href="#"
            className={`text-sm font-semibold leading-6 ${
              theme === "light" ? "#1D232A" : "text-white"
            }`}
          >
            <Link
              href={"/Trains/"}
              className=" flex flex-col justify-center items-center gap-2 text-[16px] font-semibold"
            >
              {/**
                <Image src={TrainImage} width={32} height={32} />
                 */}
              TRAINS
            </Link>
          </a>
          <a
            href="#"
            className={`text-sm font-semibold leading-6 ${
              theme === "light" ? "#1D232A" : "text-white"
            }`}
          >
            <Link
              href={"/Homestays/"}
              className=" flex flex-col justify-center items-center gap-2 text-[16px] font-semibold"
            >
              {/**
                <Image src={HomeImage} width={32} height={32} />
                 */}
              HOMESTAYS
            </Link>
          </a>
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
                  TRAINS
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
