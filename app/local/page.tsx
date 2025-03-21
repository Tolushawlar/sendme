"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardFeature } from "@/components/CardFeatures";
import DedicatedServices from "@/components/ui/dedicatedServices";
import { Faq } from "@/components/Faq";

const LocalPage = () => {
  return (
    <div>
      <Header />

      <CardFeature />
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:px-[100px] py-6 bg-transparent text-black text-lg  lg:my-[120px]">
        <span className="w-2/3 lg:px-10 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl fontTomorrow">
          Swift And Reliable Local And Interstate Delivery Within Nigeria
        </span>
        <span className="w-2/3 lg:w-1/3 my-10 lg:mt-0 text-blue-900 font-bold">
          From pickup to doorstep delivery, we ensure your packages reach their
          destination in 48 to 78 hours
        </span>
      </div>
      <DedicatedServices />
      <div className="relative top-[150px]">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default LocalPage;
