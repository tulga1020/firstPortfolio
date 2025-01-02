import PageLayout from "@/components/PageLayout";
// import Title from "@/components/Title";
import { serviceData } from "@/constants";
import { Separator } from "@radix-ui/react-select";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center w-full py-5 md:py-10">
      <PageLayout className="text-white">
        {/* <Title>Service I Provide</Title> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
          {serviceData?.map((item) => (
            <div
              key={item?._id}
              className="flex flex-col p-6 gap-5 bg-lightSky/5 border border-lightSky/20 hover:border-lightSky/30 rounded-lg shadow-md group hover:shadow-lg hoverEffect"
            >
              <div className="w-full flex flex-col items-left justify-between text-transparent text-lightSky gap-2 ">
                <p className="text-5xl font-extrabold text-outline group-hover:text-outline-hover hoverEffect">
                  {item?._id}
                </p>
                {/* <Link href={item?.href} target="_blank">
                  <ArrowUp className="rotate-45" />
                </Link> */}
                <h2 className="text-white text-xl font-semibold ">
                  {item?.title}
                </h2>
                <p className="text-white/80 text-sm md:text-base">
                  {item?.description}
                </p>
                <Separator className="w-full h-[1px] bg-white/20" />
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default ServicesPage;
