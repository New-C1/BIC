"use client";
import React from "react";

import "./Trainings.css"; // Import the CSS file for custom scrollbar styles

const Trainings = () => {
  const { t } = useTranslation();

  const trainingPrograms = [
    {
      imageSrc: "/assets/academy/tech.svg",
      alt: "JavaScript Essentials",
      title: t("academy.javascriptEssentials"),
      description: t("academy.javascriptEssentialsDescription"),
      duration: t("academy.5days"),
      link: "javascript-training",
    },
    {
      imageSrc: "/assets/academy/tech.svg",
      alt: "React Techniques",
      title: t("academy.reactTechniques"),
      description: t("academy.reactTechniquesDescription"),
      link: "react",
    },
    {
      imageSrc: "/assets/academy/tech.svg",
      alt: "HTML5/CSS3",
      title: "HTML5/CSS3",
      description: t("academy.htmlcssDescription"),
      link: "html5-css3",
    },
    {
      imageSrc: "/assets/academy/tech.svg",
      alt: "ISO 9001 Quality",
      title: t("academy.isoQuality"),
      description: t("academy.isoQualityDescription"),
      link: "iso-9001",
    },
    {
      imageSrc: "/assets/academy/tech.svg",
      alt: "UX/UI Design",
      title: t("academy.uiux"),
      description: t("academy.uiuxDescription"),
      link: "ux-ui",
    },
  ];

  return (
    <section id="academy-trainings" className="w-full h-full bg-white flex flex-col items-center justify-center p-6 md:p-12 mt-3">
      <header className="text-center md:text-left md:ml-[50px]">
        <h1 className="mt-2 mb-4 text-[#005162] text-center font-bold text-[48px] md:text-[64px] font-spartan leading-tight">
          {t("academy.ourTrainings")}
        </h1>
        <p className="text-gray-700 font-light text-[18px] text-center w-[90%] mx-auto font-spartan">
          {t("academy.ourTrainingsDescription")}
        </p>
      </header>

      <div className="mt-6 w-full flex md:flex-wrap h-[320px] justify-start md:justify-center flex-nowrap overflow-x-auto hide-scrollbar">
        {trainingPrograms.map((program, index) => (
          <article
            key={index}
            className="w-[254px] md:w-[220px] m-4 bg-white shadow-md rounded-[40px] flex flex-col items-start justify-between p-6 relative flex-shrink-0"
          >
            <div className="flex items-center space-x-2">
              <figure className="flex items-start">
                <img
                  src={program.imageSrc}
                  alt={program.alt}
                  className="w-[40px] h-[40px]"
                />
                <figcaption className="sr-only">{program.alt}</figcaption>
              </figure>
              <h3 className="text-black font-bold text-left text-[20px] md:text-[20px] font-spartan leading-tight">
                {program.title}
              </h3>
            </div>
            <p className="text-black font-light text-left text-[16px] md:text-[16px] font-spartan flex-grow">
              {program.description}
            </p>
            <p className="text-black font-medium text-left text-[14px] md:text-[16px] font-spartan">
              {t("academy.duration")} <span className="font-light">{t("academy.5days")}</span>
            </p>
            <div className="flex justify-end w-full">
              <a
                className="text-blue-500 text-end text-[14px] md:text-[16px] font-spartan cursor-pointer hover:underline"
                href={`/training/${program.link}`}
              >
                {t("academy.seeTraining")} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Trainings;