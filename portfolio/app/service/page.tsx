import PageLayout from "@/components/PageLayout";
// import Title from "@/components/Title";
import { serviceData } from "@/constants";

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col w-full py-5 md:py-10">
      <PageLayout className="text-white">
        {/* <Title>Service I Provide</Title> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
          {serviceData?.map((item) => (
            <div
              key={item?._id}
              className="flex flex-col p-6 gap-5 bg-lightSky/5 border border-lightSky/30 rounded-lg shadow-md group hover:shadow-lg hoverEffect"
            >
              <div className="">
                <p className="text-lightSky text-5xl font-extrabold">
                  {item?._id}
                </p>
                <p className="text-lightSky text-xl font-semibold">
                  {item?.title}
                </p>
                <p className="text-white/80">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default ServicesPage;
