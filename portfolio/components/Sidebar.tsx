import { useOutsideClick } from "@/hooks/use-outside-click";
import React from "react";
import Logo from "./Logo";
import { navBarData } from "@/constants";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  pathName: string;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, pathName }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(() => {
    onClose();
  });
  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodyColor border-1 border-1-hoverColor/50 shadow-xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div>
        <button
          onClick={onClose}
          className="hover:text-hoverColor hoverEffect"
          aria-label="Close sibar"
        ></button>
      </div>
      <nav className="flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2">
        <Logo title="Battulga" subtitle=".G" />
        {navBarData?.map((item) => (
          <Link
            key={item?.title}
            href={item?.href}
            className={`hover:text-hoverColor hoverEffect ${
              pathName === item?.href && "text-hoverColor"
            }`}
            onClick={onClose}
          >
            {item.title}
          </Link>
        ))}
        <Link
          href={"/resume.pdf"}
          target="_blank"
          rel="noopener noreferer"
          className="text-sm bg-lightSky/10 px-4 py-2  rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black  text-center hoverEffect"
          onClick={onClose}
        >
          Hire me
        </Link>
        <SocialLinks />
      </nav>
    </div>
  );
};

export default Sidebar;
