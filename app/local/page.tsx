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
      <div className="w-full flex justify-between items-center px-[100px] py-6 bg-transparent text-black text-lg  my-[100px]">
        <span className="w-2/3 px-10 text-4xl font-tomorrow font-semibold">
          Swift And Reliable Local And Interstate Delivery Within Nigeria
        </span>
        <span className="w-1/3">
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
