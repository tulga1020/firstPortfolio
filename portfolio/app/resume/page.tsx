"use client";
import { motion } from "motion/react";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Code2, GraduationCap, User } from "lucide-react";

import React from "react";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];
const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Software Developer",
        company: "GrapeCity Mongolia LLC",
        period: "2024",
        description: `My role involves full stack development for business needs. I design, develop, and maintain
web applications, ensuring seamless userexperiences and robust server functionality. My expertise spans various programming languages,
frameworks, and databases, allowing me to handle all aspects of a project.`,
        highlights: ["Angular JS", "JAVA", "Oracle"],
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Bachelor of Computer Science",
        school: "Huree Information technology University",
        period: "2004-2008",
      },
      {
        certificate: "Full Stack Development",
        school: "Pinecone Academy",
        period: "2023 - 2024",
      },
    ],
  },
  skills: {
    title: "Skills",
    items: [
      {
        title: "Frontend",
        skills: ["React", "Angular", "Next.js"],
      },
      {
        title: "Backend",
        skills: ["Node.js", "Express", "Java"],
      },
      {
        title: "Database",
        skills: ["MongoDB", "SQL", "Oracle"],
      },
    ],
  },
  about: {
    title: "About me",
    items: [
      {
        description:
          "I am a wide knowledge software developer and IT engineer with a passion for creating innovative solutions. I have a strong foundation in computer science and am constantly learning new technologies to stay ahead in the field. I am a team player who enjoys collaborating with others to achieve common goals.",
      },
    ],
  },
};

const Resume = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col mf:flex-row gap-6 md:gap-10 justify-center"
        >
          <TabsList className="flex md:flex-col h-full justify-center bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state-active]:bg-hoverColor hover:bg-lightSky/50 text-sm sm:text-small md:text-base rounded-md flex items-center justify-center"
              >
                <div className="flex items-center gap-1.5 md:w-[50%]">
                  <item.icon size={20} className="w-4 h-4 md:h-5 md:w-5" />
                  <span>{item.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div>
            <TabsContent className="w-full" value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.experience?.title}
              </motion.h2>
              {/* <div className="space-y-6">
                {tabContent.experience?.items?.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-lightSky/5 border border-lightSky/20 rounded-lg shadow-md group hover:shadow-lg hoverEffect"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-lightSky text-lg font-semibold">
                        {item?.role}
                      </h3>
                      <p className="text-muted-foreground text-xl font-semibold">
                        {item?.company}
                      </p>
                      <p className="text-white/80">{item?.description}</p>
                      <ul className="list-disc list-inside text-white/80">
                        {item?.highlights?.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div> */}
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default Resume;
