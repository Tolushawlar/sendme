import Link from "next/link";
import { Logo } from "./Logo";
// import { AiFillPhone, AiFillSignature } from "react-icons/ai";

export function Footer() {
  return (
    <footer className="relative py-12 bg-white">
      {/* Background heart watermark */}
      {/* <div className="absolute right-0 top-0 opacity-10">
        <div className="h-96 w-96 bg-[url('/placeholder.svg')] bg-contain bg-center bg-no-repeat" />
      </div> */}

      <div className="container ">
        <div className="mb-5 flex flex-col md:flex-row items-start justify-evenly">
          <div className="w-auto md:w-[100vw]">
            {/* Logo */}
            <div className="mb-1 flex items-center gap-2">
              <Logo />
            </div>
            <h3 className="mt-1  text-gray-600">Light up your world</h3>

            <div className="mt-5 flex flex-col">
              <p className="font-bold text-3xl">Address</p>
              <p className="lg:max-w-[30vw]  max-w-[100vw] text-[20px]  text-gray-600">
                Aminu Street, opposite former lotto central hospital, Lotto
                busstop Ogun State
              </p>
            </div>

            <div className="mt-6 flex flex-col">
              <p className="font-bold text-3xl">Contact</p>
              <p className="lg:max-w-[30vw] max-w-[100vw] text-[20px]  text-gray-600">
                contact@boslightmulti-serviceslimited.com
              </p>
              <p className="lg:max-w-[30vw] max-w-[100vw]  text-[20px] mt-1  text-gray-600">
                +234 906 642 8296
              </p>
            </div>

            {/* Copyright */}
            <div className="lg:flex hidden mt-7 text-md text-gray-500">
              © 2025 Boslight. All rights reserved.
            </div>
          </div>

          {/* <div className="flex flex-col items-center justify-center">
            <h3 className=" md:text-xl mt-3 text-black fontTomorrow flex flex-row items-center justify-center ">
              <AiFillPhone className="mr-3" /> 09066428296
            </h3>
            <h3 className=" md:text-xl mt-1 text-black fontTomorrow flex flex-row items-center justify-center ">
              <AiFillSignature className="mr-3" />{" "}
              contact@boslightmulti-serviceslimited.com
            </h3>
          </div> */}
          <div className="flex flex-row lg:justify-evenly lg:w-[100vw] w-[80vw] justify-between  lg:mt-0 mt-5">
            {/* Navigation */}
            <nav className="mt-3 mb-8">
              <ul className="flex flex-col items-start flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600">
                <p className="font-bold text-2xl">Home</p>
                <li className="">
                  <Link href="#" className="hover:text-gray-900 fontTomorrow">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 fontTomorrow">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 fontTomorrow">
                    FAQ‘s
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 fontTomorrow">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className="mt-3 mb-8 ">
              <ul className="flex flex-col items-start flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600">
                <p className="font-bold text-2xl">Social</p>
                <li className="">
                  <p className="hover:text-gray-900 fontTomorrow cursor-pointer">
                    Facebook
                  </p>
                </li>
                <li>
                  <p className="hover:text-gray-900 fontTomorrow cursor-pointer">
                    Instagram
                  </p>
                </li>
                <li>
                  <p className="hover:text-gray-900 fontTomorrow cursor-pointer">
                    Twitter
                  </p>
                </li>
              </ul>
            </nav>
          </div>


            {/* Copyright */}
            <div className="mt-5 lg:hidden text-md text-gray-500">
              © 2025 Boslight. All rights reserved.
            </div>

        </div>
      </div>
    </footer>
  );
}
