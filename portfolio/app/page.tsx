import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { Download } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import Photo from "@/components/Photo";
import HomeDescription from "@/components/HomeDescription";

export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center gap-5 md:gap-7">
          <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-center">
            <h3 className="font-semibold tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-1 text-white">
              Hello I&apos;m{" "}
            </h2>
            <h1 className="text-lightSky text-5xl md:text-6xl tracking-normal mb-1 ">
              Battulga Ganbaatar
            </h1>
          </div>
          <div className="w-full h-[170px] md:h-[140px] relative mb-10">
            <HomeDescription />
          </div>
          <Button className="w-64 bg-transparent rounded-full border border-lightSky/50 text-lightSky/80 hover:bg-hoverColor hover:text-black hover:bg-lightSky/100 hoverEffect h-11">
            Download Resume <Download />{" "}
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
