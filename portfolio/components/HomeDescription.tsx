"use client";

import { motion } from "framer-motion";
import { useTypeWriter } from "@/hooks/use-type-writer";
import { useEffect, useState } from "react";

const HomeDescription = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const description = `As an IT Engineer with over 10 years of experience, 
  I have developed and automated internal processes using 
  Microsoft Power Platform for 4 years. I have managed projects
   from start to finish and built teams for various projects. Recently, 
   I transitioned to full stack development, working as a 
   software engineer for 6 months with expertise in React. 
   Known for my strong communication skills and teamwork, 
   I am passionate about continuous growth and eager to contribute
    to meaningful projects.`;

  const { displayedText, isComplete } = useTypeWriter(description, 30);
  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <motion.p
      className="w-auto font-normal leading-7 mb-6 min-h-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onAnimationComplete={() => setHasLoaded(true)}
    >
      {hasLoaded
        ? displayedText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ color: "rgb(156 163 175)" }}
              animate={{
                color: isComplete ? "rgb(255 255 255)" : "rgb(156 163 175)",
              }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
            >
              {char}
            </motion.span>
          ))
        : displayedText}
    </motion.p>
  );
};

export default HomeDescription;
