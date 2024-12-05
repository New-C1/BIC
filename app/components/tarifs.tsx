import React from 'react';

const PriceList = () => {
  return (
    <div id='Tarifs' className="flex items-center justify-center h-auto py-16 md:py-8 ">
      <div className="w-[90%] sm:w-1/3 h-4/5 bg-[#030C2B] text-white p-4 sm:p-8 rounded-[20px] shadow-md">
        <h2 className="text-xl sm:text-3xl mt-6 sm:mt-10 font-bold mb-4 sm:mb-8 text-center">TARIFS</h2>
        <ul className="list-disc pl-2 sm:pl-4 text-sm mt-10 sm:mt-20">
          <li className="flex justify-between mb-2 sm:mb-4">
            <span>Couronne zircone sur implant</span>
            <span>180 TND</span>
          </li>
          <li className="flex justify-between mb-2 sm:mb-4">
            <span>Chape/CIV</span>
            <span>60 TND</span>
          </li>
          <li className="flex justify-between mb-2 sm:mb-4">
            <span>Couronne en zircone stratifié</span>
            <span>135 TND</span>
          </li>
          <li className="flex justify-between mb-2 sm:mb-4">
            <span>Inlay-Core</span>
            <span>55 TND</span>
          </li>
          <li className="flex justify-between mb-2 sm:mb-4">
            <span>Wax-up/Mock-up</span>
            <span>25 TND</span>
          </li>
          <li className="flex justify-between mb-2 sm:mb-4">
            <span>Couronne provisoire</span>
            <span>45 TND</span>
          </li>
          <li className="flex justify-between mb-2 sm:mb-4">
            <span>Modèle 3D(haut + bas)</span>
            <span>80 TND</span>
          </li>
          <li className="flex justify-between mb-2 sm:mb-4">
            <span>SCan Numerique</span>
            <span>50 TND</span>
          </li>
          <li className="flex justify-between">
            <span>Fraisage</span>
            <span>50 TND par dent</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceList;
