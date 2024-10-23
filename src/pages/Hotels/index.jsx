import TransitionEffect from "@/components/component/Animation/TransitionEffect ";
import { BackgroundLinesDemo } from "@/components/component/Footer/BackgroundLinesDemo";
import { ThreeDCardDemo } from "@/components/component/Other/ThreeDCardDemo";
import Head from "next/head";
import React from "react";

const Page = () => {
  return (
    <>
      <Head>
        <title>MMT | Flight Booking</title>
        <meta name="description" content="any-description" />
      </Head>
      <TransitionEffect />
      <div>
        <BackgroundLinesDemo />
      </div>
    </>

  );
};

export default Page;
