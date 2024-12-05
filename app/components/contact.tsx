import React from "react";

function Contact() {
  return (
    <div className="w-full h-auto px-4 py-8 flex flex-col  items-center">
      <div className=" w-full items-center flex flex-wrap justify-center mb-12">
        <div className="flex flex-wrap items-center w-full">
          <div className="w-1/3 justify-items-center grid  ">
            <img
              src="/mail.svg"
              className="w-[25px] h-[25px] md:w-auto md:h-auto"
              alt="mail"
            />
            <p className="font-JOST md:text-xl text-[0.6rem] font-thin tracking-normal  ">
              smilescansolutions@gmail.com
            </p>
          </div>

          <div className="w-1/3 justify-items-center grid  ">
            <img
              src="/Phone.svg"
              className="w-[25px] h-[25px] md:w-auto md:h-auto"
              alt="phone number"
            />
            <p className="font-JOST md:text-xl text-[0.6rem] font-thin tracking-normal  ">
              + 216 22 199 437
            </p>
          </div>

          <div className="w-1/3 justify-items-center grid  ">
            <img
              src="/clock.svg"
              className="w-[25px] h-[25px] md:w-auto md:h-auto"
              alt="work time"
            />
            <p className="font-JOST md:text-xl text-[0.6rem] font-thin tracking-normal  ">
              {"Lundi -> Vendredi  9h->17h"}
            </p>
          </div>
        </div>
        <button className="bg-[#030C2B] text-white items-center py-2 px-4 rounded-xl self-end mt-4 flex">
          Suivez mon actualité sur facebook
          <img src="/facebook.svg" alt="work time" />
        </button>
      </div>

      <div className="drop-shadow-2xl bg-white w-full max-w-[1100px] rounded-lg flex flex-col md:flex-row  md:space-y-0 md:space-x-4 ">
        <div className="rounded-l-lg flex flex-col w-full md:w-2/5 p-4 bg-[#030C2B] bg-cover sm:flex hidden">
          <div className="flex items-center justify-center">
            <div className="content-center">
              <img src="/contact.svg" alt="" />
            </div>
          </div>

          <div className="flex flex-col  items-start justify-center flex-grow font-poppins text-white text-base space-y-4">
            <div className="flex items-center">
              <img
                src="/bxs_phone-call.svg"
                alt="Phone Logo"
                className="w-4 h-4 mr-1"
              />
              <span>+216 22 199 437</span>
            </div>
            <div className="flex items-center">
              <img
                src="/ic_sharp-email.svg"
                alt="Email Logo"
                className="w-4 h-4 mr-2 mt-3"
              />
              <span className="mt-3">smilescansolution@gmail.com</span>
            </div>
            <div className="flex items-center mt-4">
              <img
                src="/carbon_location-filled.svg"
                alt="location Logo"
                className="w-4 h-4 mr-2"
              />
              <span className="mt-1">12 Avenue Habib Bourguiba Hammem-Lif</span>
            </div>
          </div>
          <div className="flex space-x-2 justify-start items-end mb-6">
            <div className="items-center justify-center flex w-[30px] h-[30px] bg-black text-white rounded-full">
              <img src="/facebook.svg" alt="Twitter logo" />
            </div>
            <a
              href="https://www.instagram.com/naccache.smile.scan.solution/"
              target="_blank"
            >
              <div className="items-center justify-center flex w-[30px] h-[30px] bg-white text-white rounded-full">
                <img src="/instagram.svg" alt="Instagram logo" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-3/5 px-12 pt-6">
          <div className="flex  py-8 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border-b border-gray-500  border-l-0 border-r-0 border-t-0"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border-b border-gray-500  border-l-0 border-r-0 border-t-0"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-b border-gray-500  border-l-0 border-r-0 border-t-0"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phoneNumber" className="mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="border-b border-gray-500  border-l-0 border-r-0 border-t-0"
              />
            </div>
          </div>

          <div className="flex flex-col w-full mt-10 space-y-4">
            <label htmlFor="message" className="mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message.."
              rows={1}
              className="border-b border-gray-500  border-l-0 border-r-0 border-t-0"
            />
          </div>
          <button className="bg-black text-white py-2 px-10 rounded self-end my-24 ">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
