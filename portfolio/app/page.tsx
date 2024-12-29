import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { Download } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-center">
            <h3 className="font-semibold tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">
              Hello I&apos;m{" "}
            </h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal ">
              BATTULGA Ganbaatar
            </h1>
          </div>
          <p className="w-auto md:max-w-[500px] text-white/50 font-thin leadin">
            As an IT Engineer with over 10 years of experience, I have developed
            and automated internal processes using Microsoft Power Platform for
            4 years. I have managed projects from inception to completion and
            built teams for various projects. Recently, I transitioned to full
            stack development, working as a software engineer for 6 months, with
            expertise in both front-end and back-end development using React.
            Known for my strong communication skills and teamwork, I am
            passionate about continuous growth and eager to contribute to
            meaningful projects.
          </p>
          <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11">
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
