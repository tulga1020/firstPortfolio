import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky">
        <Link href={"https://www.linkedin.com/in/battulga-ganbaatar-93400a99/"}>
          <span className="text-lightSky/80  hover:text-hoverColor hoverEffect">
            <Linkedin size={24} />
          </span>
        </Link>
      </div>
      <div className="border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky">
        <Link href={"https://www.facebook.com/gBattulga"}>
          <span className=" text-lightSky/80 hover:text-hoverColor hoverEffect">
            <Facebook size={24} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
