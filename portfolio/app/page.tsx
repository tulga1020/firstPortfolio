import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { Download } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import Photo from "@/components/Photo";
import HomeDescription from "@/components/HomeDescription";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center gap-5 md:gap-7">
          <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-center">
            <h2 className="text-3xl md:text-5xl mb-1 text-white">
              Hello I&apos;m{" "}
            </h2>
            <h1 className="text-lightSky text-5xl md:text-6xl tracking-normal mb-1 ">
              Battulga Ganbaatar
            </h1>
            <h3 className="font-semibold tracking-wider mb-1">
              Software Engineer
            </h3>
          </div>
          <div className="w-full h-[170px] md:h-[140px] relative mb-10 md:mb-40 sm:mb-35">
            <div className="absolute top-0 left-0 md:h-[140px] h-full">
              <HomeDescription />
            </div>
          </div>

          <Button className="w-64 bg-transparent rounded-full border border-lightSky/50 text-lightSky/80 hover:bg-hoverColor hover:text-black hover:bg-lightSky/100 hoverEffect h-11 sm:mt-12">
            <Link
              href={"/resume.pdf"}
              target="_blank"
              rel="noopener noreferer"
              className="flex items-center justify-center gap-2"
            >
              {" "}
              Download Resume <Download />{" "}
            </Link>
          </Button>
          <SocialLinks />
          <Statistics />
        </div>
        {/* photo  */}
        <Photo />
      </Container>
    </div>
  );
}
