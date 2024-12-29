"use client";
import { profile } from "console";
import Image from "next/image";
import React from "react";
import hero from "../public/hero.jpg"; // Adjust the path to your image file
import { animate, delay, easeInOut, motion } from "motion/react";
import { init } from "next/dist/compiled/webpack/webpack";
const Photo = () => {
  const circleColors = ["#00ff99", "#00ff9950"];
  const circleVariants = {
    initial: {
      strokeDasharray: "24 10 0 0",
      rotate: 0,
      opacity: 0,
    },
    animate: (index: number) => ({
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
      opacity: 1,
      transition: {
        strokeDasharray: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        opacity: {
          duration: 0.4,
          delay: 2 + index * 0.4,
          ease: "easeIn",
        },
      },
    }),
  };
  return (
    <div className="relative w-full h-full  flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.0, duration: 0.4, ease: easeInOut },
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[420px] rounded-full mix-blend-lighten overflow-hidden">
            <Image
              src={hero}
              alt="heroImage"
              width={400}
              height={400}
              quality={100}
              className="object-contain w-full h-full"
              priority
            />{" "}
          </div>
        </motion.div>
        <svg
          className="w-[300px] lg:w-[506px] h-[300px] lg:h-[506px]"
          viewBox="0 0 506 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {circleColors.map((color, index) => (
            <motion.circle
              key={index}
              cx={253}
              cy={253}
              r={240 - index * 15}
              stroke={color}
              strokeWidth="round"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={circleVariants}
              initial="initial"
              animate="animate"
              custom={index}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default Photo;
