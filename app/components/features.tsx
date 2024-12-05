import React from "react";

const FeatureBox = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-auto">
      <div className="flex-1 max-w-md mx-4 mb-4 sm:mb-0">
        {/* Feature Box 1 */}
        <div className="bg-white p-6 sm:p-8 rounded flex flex-col items-center">
          <div className="flex items-center mb-3 sm:mb-4">
            <img src="/Phone.svg" alt="Icon 1" className="mr-2 w-6 h-6 sm:w-8 sm:h-8" />
            <div className="text-lg font-bold">Avant toute chose</div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            Un premier échange téléphonique s&#39;avère crucial pour appréhender vos
            attentes. Nous serions ravis de discuter avec vous afin de mieux
            cerner vos besoins. Cette démarche nous permettra d&#39;ajuster notre
            approche de manière personnalisée pour garantir une collaboration
            qui réponde parfaitement à vos attentes.
          </p>
          <button className="bg-[#030C2B] text-white px-4 py-2 rounded">
            Encore Plus
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-4">
        {/* Feature Box 2 */}
        <div className="bg-white p-6 sm:p-8 rounded flex flex-col items-center">
          <div className="flex items-center mb-3 sm:mb-4">
            <img src="/Check.svg" alt="Icon 2" className="mr-2 w-6 h-6 sm:w-8 sm:h-8" />
            <div className="text-lg font-bold"> Contrôle des empreintes</div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            Lorsqu&#39;une empreinte ne permet pas la réalisation de la prothèse
            (espace insuffisant, limites cervicales peu claires, mauvais
            enregistrement de l&#39;occlusion, etc.), je prendrai l&#39;initiative de
            vous en informer par téléphone afin de trouver des solutions
            ensemble.
          </p>
          <button className="bg-[#030C2B] text-white px-4 py-2 rounded">
            Encore Plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
