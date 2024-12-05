import React from 'react'

export default function Offre() {
  return (
    <div className="flex flex-wrap justify-center bg-[#53E8FF]  bg-opacity-40 md:h-64 sm:h-56 h-[110px]  lg:h-96	 lg:px-10 lg:pt-10 px-4 pt-2 rounded-xl xl:mx-14 md:mx-10 mx-6">
      <div className="w-1/3 lg:mt-4">
        <h1 className="lg:text-3xl sm:text-lg text-[0.625rem]  font-bold mb-1 lg:mb-6 text-nowrap  font-JOST">
          Offre de bienvenue
        </h1>
        <h1 className="lg:text-3xl sm:text-lg text-[0.625rem] font-bold lg:mb-3 mb-1 font-JOST text-nowrap">
          25% de réduction
        </h1>
        <h2 className="lg:text-xl sm:text-sm text-[0.55rem] text-gray-600 mb-1 lg:mb-8 font-JOST text-nowrap">
          sur les 10 premières conceptions.
        </h2>
        <button className="bg-[#030C2B] text-white text-[0.6rem] px-4 mb-1 text-nowrap py-1 rounded-md lg:mb-10">
          Me contacter
        </button>
        <p className="sm:text-sm text-[0.55rem] text-gray-500 text-nowrap mb-1 font-JOST">
          *Offre réservée aux nouveaux clients
        </p>
      </div>
      <div className="w-2/3 ">
        <img
          className="  relative lg:left-20 left-8 lg:bottom-20 bottom-6"
          src="/teeth-offer.svg"
          alt="Image"
        />
      </div>
    </div>
  );
}
