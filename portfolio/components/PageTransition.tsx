"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const PageTransition = ({ children, className }: Props) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      {" "}
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className={className}
        ></motion.div>
        {children}
      </div>
      ;
    </AnimatePresence>
  );
};

export default PageTransition;
