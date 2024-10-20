import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Footer from "./Footer";
import { ThreeDCardDemo } from "../Other/ThreeDCardDemo";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <ThreeDCardDemo />
    </BackgroundLines>
  );
}
