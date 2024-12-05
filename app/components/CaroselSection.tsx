import React from "react";
import { Carousel } from "flowbite-react";

const images = [
  {
    id: 1,
    src: "/anatomie-complete-format-carre.png",
    title: "Anatomie complète jumelée",
  },
  {
    id: 2,
    src: "/bridge-complet-sur-implant-2.png",
    title: "Bridge transvissé sur implant",
  },
  {
    id: 3,
    src: "/Couronne-a-incrustation-vestibulaire-format-carre.png",
    title: "Couronne à incrustation vestibulaire",
  },
  {
    id: 4,
    src: "/element-unitaire.png",
    title: "Element unitaire  d'anatomie réduite",
  },
];
export default function CaroselSection() {
  return (
    <div id="Modalités" className="bg-[#030C2B] mt-9 sm:mt-0 rounded-xl xl:mx-14 md:mx-10 mx-6 h-auto">
      {/* Logo (Image on the top left) */}
      <div className="hidden sm:block sm:justify-start  justify-center">
        <img src="/logo.svg" alt="Logo" className=" h-auto" />
      </div>
      <div className="flex flex-wrap justify-center ">
        {/* Content (Image and Text) */}
        <div className="xl:w-1/2 h-96 w-full">
          {/* Image on the left */}
          <Carousel indicators={false} leftControl="">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <img
                  className="w-1/2 h-1/2 md:w-1/3 md:h-1/3"
                  src={image.src}
                  alt={image.title}
                />
                <p className="text-center text-lg  text-white font-JOST mb-16">
                  {image.title}
                </p>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Text on the right */}
        <div className="text-left xl:w-1/2 xl:px-32 px-6  w-full pb-6">
          <p className="text-white text-base font-light	font-JOST">
            Naccache Smile Scan Solutions se spécialise dans la conception sur
            mesure de prothèses dentaires conjointes afin de répondre de manière
            personnalisée aux besoins de chaque client.
            <br/>  
            Nous offrons une vaste gamme de solutions, allant des cas les plus
            simples tels que les couronnes unitaires aux situations plus
            complexes, comme les bridges complets sur implant.
          </p>

        
        </div>
      </div>
    </div>
  );
}
