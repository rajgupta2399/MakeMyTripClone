// pages/index.js
import Head from "next/head";
import { Montserrat } from "next/font/google"; // Import Montserrat font
import Banner from "@/components/component/Banner/Banner";
import { TabsDemo } from "@/components/component/AdvanceSearch/Tabs";
import FlightLanding from "@/components/component/FlightLanding/FlightLanding";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont", // Custom CSS variable for the font
});

export default function Home() {
  return (
    <>
      <Head>
        <title>MMT | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZ09AghB3cSOkwG6B2IUxeBTWPWDm_QZD7ROmr3o&usqp=CAE&s"
        />
      </Head>
      <div>
        <Banner />
        <TabsDemo />
        <FlightLanding />
      </div>
    </>
  );
}
