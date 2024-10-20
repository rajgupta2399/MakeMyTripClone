// pages/location.js
import React from "react";
import { Location } from "./Location";
import { options } from "@/lib/constants";

export default function LocationPage({ countries }) {
  return <Location countries={countries} />;
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.liteapi.travel/v3.0/data/countries?timeout=4",
    options
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      countries: data.data || [],
    },
  };
}
