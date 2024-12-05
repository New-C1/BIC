import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030C2B] w-full pb-6" role="contentinfo">
      <div className="flex justify-center ">
        <img src="/logo.svg" alt="Logo" className="" />
      </div>
      <div className="border-t-[1.95px] border-[#FFFFFF] w-full lg:w-[90%] sm:mx-auto mt-4 lg:mt-[10.42px]"></div>

      <div className="  mt-6 flex flex-col items-center w-full ">
        <nav className="flex  w-full    items-center">
          <Link
            href="#Prestation"
            className="text-white w-1/4 justify-items-center grid"
          >
            Prestations
          </Link>
          <Link
            href="#Modalités"
            className="text-white w-1/4 justify-items-center grid"
          >
            Modalités
          </Link>
          <Link
            href="#Tarifs"
            className="text-white w-1/4 justify-items-center grid"
          >
            Tarifs
          </Link>
          <Link
            href="#àpropos"
            className="text-white w-1/4 justify-items-center grid"
          >
            à Propos
          </Link>
        </nav>
        <div className=" space-y-5 self-start sm:ps-20   mt-4">
          <h3 className="text-white text-lg font-semibold">Reach Us</h3>
          <div className="flex items-center mt-2">
            <img
              src="/bxs_phone-call.svg"
              alt="Phone Logo"
              className="w-4 h-4 mr-1"
            />
            <p className="text-white">+ 216 22 199 437</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src="/ic_sharp-email.svg"
              alt="Email Logo"
              className="w-4 h-4 mr-2 mt-3"
            />
            <p className="text-white">smilescansolution@gmail.com</p>
          </div>
          <div className="flex items-center mt-2">
            <img
              src="/carbon_location-filled.svg"
              alt="location Logo"
              className="w-4 h-4 mr-2"
            />
            <p className="text-white w-96">
              12 Avenue Habib Bourguiba Hammem-Lif
            </p>
          </div>
        </div>
        <div className="border-t-[1.95px] border-[#FFFFFF] w-full lg:w-[90%] sm:mx-auto mt-4 lg:mt-[10.42px]"></div>
        <div className="flex items-center mt-2">
          <p className="text-white ">
            Designed and Developed by{" "}
            <a
              href="https://www.in-no-think.com"
              style={{ textDecoration: "underline" }}
              target="_blank"
            >
              InnoThink IT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
