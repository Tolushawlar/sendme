/* eslint-disable react/jsx-key */
import Image from "next/image";
import { ComplaintForm } from "./user/complaint-form";
// import { AiFillHome, AiFillPhone, AiFillSignature } from "react-icons/ai";

const cardData = [
  {
    imageSrc: "/bg7.jpeg",
    title: "Tailored Financing",
    description:
      "If you have specialized financing needs, speak to one of our representatives today",
  },
  {
    imageSrc: "/bg6.jpeg",
    title: "Quick and Easy Loans",
    description: "Apply online in minutes and get a decision fast.",
  },
  {
    imageSrc: "/bg8.jpeg",
    title: "Investment Services",
    description:
      "We offer a wide range of investement opportunities accross various industry",
  },
];

export function Newsletter() {
  return (
    <div id="services" className="min-h-screen p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Let´s handle your financial needs with speed
        </h1>
        <p className="text-sm text-gray-600 mb-12">
          Apply online today and let us help you achieve your financial goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {cardData.map((card, index) => (
            <div
              className={`grid grid-cols-1 md:grid-cols-0 gap-4 ${
                index === 2 ? "md:col-span-2 md:flex md:justify-center" : ""
              }`}
            >
              <div
                key={card.title}
                className="bg-white rounded-3xl p-6 shadow-sm max-h-[500px]"
              >
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={400}
                    height={30}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                {/* <a href="#" className="text-blue-500 text-sm font-semibold">
                  Read Post →
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <div
          id="contact"
          className="bg-[#E17153] rounded-3xl p-8 md:p-12 text-center"
        >
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              Get in Touch With Us
            </h2>
            {/* <h3 className=" md:text-xl mt-10 text-white flex flex-row items-center justify-center fontTomorrow ">
              {" "}
              <AiFillPhone className="mr-1 md:mr-0" />{" "}
              <span className="hidden md:flex ml-5  md:mr-1 font-bold fontTomorrow">
                Phone Number:{" "}
              </span>{" "}
              +234 906 642 8296
            </h3>
            <h3 className=" md:text-xl mt-1 text-white flex flex-row md:items-center md:justify-center md:w-auto w-[500px] fontTomorrow ">
              <AiFillSignature className="mt-1 md:mt-0 w-[23px] h-[23px]" />
              <span className="hidden md:flex ml-5  md:mr-1 font-bold fontTomorrow">
                Email:
              </span>{" "}
              contact@boslightmulti-serviceslimited.com
            </h3>
            <h3 className=" md:text-xl mt-1 text-white   flex flex-row md:items-center md:justify-center">
              <AiFillHome className="mt-1 md:mt-0 w-[20px] h-[20px]" />{" "}
              <span className="hidden md:flex  md:mr-0 font-bold fontTomorrow">
                Location:
              </span>{" "}
              <p className="fontTomorrow text-left w-[350px] md:w-[800px] md:ml-0 ml-1 md:ml-5 mr-[-80px]">
                Aminu Street, opposite former lotto central hospital, Lotto
                busstop Ogun State
              </p> 
            </h3>*/}
            <p className="text-white text-lg mb-8 mt-8">
              Stay in the loop with everything you need to know.
            </p>
          </div>
          <ComplaintForm />
          {/* <form className="flex gap-4 max-w-xl mx-auto bg-white rounded-full">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-full border-r-0 p-6"
            />
            <Button className="mt-[0.1px] md:w-[200px] w-[85px] bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6 px-8 font-semibold">
              Subscribe
            </Button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
