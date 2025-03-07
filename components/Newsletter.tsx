"use client";

import { ComplaintForm } from "./user/complaint-form";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#F17E2E] p-8 md:p-12 text-center text-white relative bottom-[150px]"
    >
      <div className="absolute top-[100px] right-[200px] h-[5vh] opacity-30 3xl:h-[732px] bg-green-800 w-[50px] 3xl:w-[718px] hidden xl:block"></div>
      <div className="absolute top-[120px] right-[220px] h-[5vh] opacity-30 3xl:h-[732px] bg-black w-[50px] 3xl:w-[718px] hidden xl:block"></div>
      <div className="absolute top-[140px] right-[250px] h-[5vh] opacity-30 3xl:h-[732px] bg-blue-800 w-[50px] 3xl:w-[718px] hidden xl:block"></div>
      <div>
        <h2 className="text-2xl md:text-5xl font-bold mb-4">
          Get in Touch With Us
        </h2>
        <p className="text-lg mb-8 mt-8">
          Stay in the loop with everything you need to know.
        </p>
      </div>

      {/* <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="flex items-center text-lg">
          <AiFillPhone className="mr-3 text-2xl" />
          <span className="font-bold hidden md:inline">Phone Number:</span> +234
          906 642 8296
        </div>
        <div className="flex items-center text-lg">
          <AiFillMail className="mr-3 text-2xl" />
          <span className="font-bold hidden md:inline">Email:</span>{" "}
          contact@boslightmulti-serviceslimited.com
        </div>
        <div className="flex items-center text-lg text-center">
          <AiFillHome className="mr-3 text-2xl" />
          <p className="w-[300px] md:w-[400px]">
            Aminu Street, opposite former lotto central hospital, Lotto busstop
            Ogun State
          </p>
        </div>
      </div> */}

      <ComplaintForm />
    </section>
  );
}
