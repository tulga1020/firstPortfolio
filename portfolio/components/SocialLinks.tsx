import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <Link href={"https://www.linkedin.com/in/battulga-ganbaatar-93400a99/"}>
        <span>
          <Linkedin size={24} />
        </span>
      </Link>
      <Link href={"https://www.facebook.com/gBattulga"}>
        <span>
          <Facebook size={24} />
        </span>
      </Link>
    </div>
  );
};

export default SocialLinks;
