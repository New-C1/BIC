import React from "react";

export default function About() {
  return (
    <div id="àPropos" className="flex flex-wrap justify-center bg-[#53E8FF]  bg-opacity-40 md:h-auto	 lg:px-10 px-4 lg:pt-6 pt-4 rounded-xl xl:mx-14 md:mx-10 mx-4 pb-1">
      <div className="sm:w-4/5 w-1/2  ">
        <h1 className="lg:text-3xl sm:text-lg text-[0.625rem] font-bold md:mb-6  font-JOST">
          A propos
        </h1>

        <p className=" lg:text-lg md:text-sm text-[0.6rem]  text-pretty text-black font-JOST xl:leading-loose">
          Naccache Smile Scan Solutions, c&#39;est l&#39;histoire imprégnée et inspirée
          de ces traits de caractère qui me définissent tant, la rigueur et la
          minutie.
        </p>
        <p className=" lg:text-lg md:text-sm text-[0.6rem]  text-pretty text-black font-JOST xl:leading-loose hidden md:block">
          Mon savoir-faire, acquis depuis plus de 10 ans dans le secteur de la
          prothèse dentaire, me permet aujourd&#39;hui d&#39;accompagner au mieux les
          laboratoires dans le cadre de la sous-traitance. Je partage avec vous
          mon expérience afin de vous faire gagner du temps et faire, ensemble,
          du travail de qualité.
        </p>
        <p className=" lg:text-lg md:text-sm text-[0.6rem]  text-pretty text-black font-JOST xl:leading-loose md:hidden">
          Mon savoir-faire, acquis depuis plus de 10 ans dans le secteur de la
          prothèse dentaire, me permet aujourd&#39;hui d&#39;accompagner au mieux les
          laboratoires dans le cadre de la sous-traitance.
        </p>

        <p className=" lg:text-lg md:text-sm text-[0.6rem]  text-pretty text-black font-JOST xl:leading-loose">
          Si vous avez une question, un besoin particulier, n&#39;hésitez pas à
          prendre contact. Je suis à votre écoute.
        </p>
        <h3 className="lg:text-lg md:text-sm text-black text-[0.6rem]   lg:mt-10 mt-1 font-JOST font-black">
          Ghassen NACCACHE
        </h3>
      </div>
      <div className="sm:w-1/5 w-1/2  ">
        <img
          className=" sm:-translate-y-10 -translate-y-4  sm:translate-x-3 scale-125"
          src="/naccache.svg"
          alt="Image"
        />
      </div>
    </div>
  );
}
