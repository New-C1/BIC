import Image from 'next/image';
import React from 'react';

const hero = () => {
  return (
    <section id="Prestation">
      <div className="flex flex-row justify-center mt-36">
        <img
          src="/smilescan.svg"
          alt=""
          className="justify-center w-[690px] h-[341px]"
          id='heropho'
        />
      </div>
      <div className="flex flex-col sm:flex-row">
        {/* Left half with WeeLance title and content */}
        <div className="flex flex-col font-extralight justify-center max-w-2xl mx-auto">
          <p className="font-JOST sm:text-xl  text-xs leading-6 sm:w-[447px] w-80 sm:pl-8 sm:pr-4">
            La mission de Naccache Smile Scan Solutions est de soulager les laboratoires de prothèses dentaires lors des fluctuations de travail, en proposant de traiter de façon numérique la modélisation de vos prothèses. <br/>
            Fluidité, régularité et disponibilité seront les piliers de notre collaboration.
          </p>
        </div>

        {/* Right half with image (hidden on small screens) */}
        <div className="hidden sm:flex justify-center items-center w-1/2 -mt-10">
          <Image
            src="/hero2 Background Removed.png" // Replace with your actual image path
            alt="Mobile app interface"
            width={782} // Replace with actual image width as needed
            height={568} // Replace with actual image height as needed
          />
        </div>
      </div>
    </section>
  );
};

export default hero;
