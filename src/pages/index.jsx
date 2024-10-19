// pages/index.js
import Head from "next/head";
import { Montserrat } from "next/font/google"; // Import Montserrat font
import styles from "@/styles/Home.module.css";
import { ThreeDCardDemo } from "@/components/component/Other/ThreeDCardDemo";
import Banner from "@/components/component/Banner/Banner";
import AdvanceSearch from "@/components/component/AdvanceSearch/AdvanceSearch";
import ContentSwitcher from "@/components/component/AdvanceSearch/ContentSwitcher";
import { TabsDemo } from "@/components/component/AdvanceSearch/Tabs";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont", // Custom CSS variable for the font
});

export default function Home() {
  return (
    <>
      <Head>
        <title>MakeMyTrip App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Banner />
        <TabsDemo />
        {/* <AdvanceSearch /> */}
        {/* <ContentSwitcher /> */}
        <ThreeDCardDemo />
      </div>
    </>
  );
}
