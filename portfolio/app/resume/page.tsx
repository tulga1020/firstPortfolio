"use client";
import { motion } from "motion/react";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
      {
        role: "General Manager",
        company: "Cressenn LLC",
        period: "2019-2023",
        description: `I was responsible for overseeing all operations of the company, including managing staff, developing`,
        highlights: ["Microsoft 365", "Conference System"],
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Bachelor",
        school: "Huree Information technology University",
        period: "2004-2008",
        major: "Computer Science",
      },
      {
        degree: "Certificate",
        school: "Pinecone Academy",
        period: "2023 - 2024",
        major: "Full Stack Development",
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
    bio: "I am a wide knowledge software developer and IT engineer with a passion for creating innovative solutions. I have a strong foundation in computer science and am constantly learning new technologies to stay ahead in the field. I am a team player who enjoys collaborating with others to achieve common goals.",
    interest: ["Reading", "Traveling", "Coding", "Basketball", "Soccer"],
    languages: ["Mongolian", "English", "Korean"],
  },
};

const Resume = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center"
        >
          <TabsList className="flex md:flex-col h-full justify-center bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-small md:text-base rounded-md flex items-center justify-center"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon size={20} className="w-4 h-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1min-h-[400px] w-full">
            <TabsContent className="w-full" value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent?.experience?.title}
              </motion.h2>
              <div className="space-y-6 w-full">
                {tabContent?.experience?.items?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="p-4 border border-lightSky/20 rounded-lg shadow-md group hover:shadow-lg hoverEffect gap-8"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex flex-col items-start justify-between">
                        <h3 className="text-white text-2xl font-semibold">
                          {item?.role}
                        </h3>
                        <p className="text-muted-foreground text-lg font-semibold">
                          {item?.company}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar size={20} className="w-4 h-4  mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="text-white/80">{item?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item?.highlights?.map((highlights, index) => (
                        <Badge key={index} variant="secondary">
                          {highlights}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent className="w-full" value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent?.education?.title}
              </motion.h2>
              <div className="space-y-6 w-full">
                {tabContent?.education?.items?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="p-4  border border-lightSky/20 rounded-lg shadow-md group hover:shadow-lg hoverEffect"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start flex-col justify-between">
                        <h3 className="text-white text-2xl font-semibold">
                          {item?.degree}
                        </h3>
                        <p className="text-muted-foreground text-lg font-semibold">
                          {item?.school}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar size={20} className="w-4 h-4  mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="text-white/80">{item?.major}</p>
                    {/* <div>
                      {item?.highlights?.map((highlights, index) => (
                        <Badge key={index} className="mr-2">
                          {highlights}
                        </Badge>
                      ))}
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent className="w-full" value="skills">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent?.skills?.title}
              </motion.h2>
              <div className="space-y-6 w-full">
                {tabContent?.skills?.items?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className=" p-4  border border-lightSky/20 rounded-lg shadow-md group hover:shadow-lg hoverEffect"
                  >
                    <div className="flex  items-start justify-between mb-4">
                      <div className="flex flex-col items-start justify-between">
                        <h3 className="text-white text-2xl font-semibold">
                          {item?.title}
                        </h3>
                        <p className="text-muted-foreground text-lg font-semibold gap-2">
                          {item?.skills?.map((skills, index) => (
                            <Badge key={index} className="mr-2">
                              {skills}
                            </Badge>
                          ))}
                        </p>
                      </div>
                      {/* <div className="flex items-center text-muted-foreground">
                        <Calendar size={20} className="w-4 h-4  mr-2" />
                        {item?.period}
                      </div> */}
                    </div>
                    {/* <p className="text-white/80">{item?.description}</p>
                    <div>
                      {item?.highlights?.map((highlight, index) => (
                        <Badge key={index} className="mr-2">
                          {highlight}
                        </Badge>
                      ))}
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent className="w-full" value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent?.about?.title}
              </motion.h2>
              <div className="space-y-6 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4  border border-lightSky/20 rounded-lg shadow-md group hover:shadow-lg hoverEffect gap-10"
                >
                  <p className="text-white/80">{tabContent?.about?.title}</p>
                  <p className="text-white/80">{tabContent?.about?.bio}</p>
                  <div>
                    {tabContent?.about?.languages?.map((interest, index) => (
                      <Badge
                        key={index}
                        variant={"destructive"}
                        className="mr-2"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    {tabContent?.about?.interest?.map((interest, index) => (
                      <Badge key={index} variant={"secondary"} className="mr-2">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default Resume;
