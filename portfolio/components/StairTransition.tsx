"use client";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <div className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none flex z-20">
          <Stairs />
        </div>{" "}
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
