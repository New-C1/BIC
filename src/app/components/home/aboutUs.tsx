import { GetServerSideProps } from 'next';

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <video
              src="/videos/BIC fr.mov"
              autoPlay
              loop
              muted
              className="w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Une Équipe Dédiée à Votre Santé</h3>
            <p>
              Nous sommes une équipe de spécialistes engagés, unissant expertise médicale et innovation technologique pour offrir des soins de qualité et un suivi personnalisé.
            </p>

            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-fingerprint"></i>
              </div>
              <h4 className="title">
                <a href="">Une Approche Humaine</a>
              </h4>
              <p className="description">
                Chaque patient est unique. Nous adaptons nos services pour répondre à vos besoins spécifiques et vous accompagner tout au long de votre parcours de santé.
              </p>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-gift"></i>
              </div>
              <h4 className="title">
                <a href="">Expertise Diagnostique</a>
              </h4>
              <p className="description">
                Nous avons fait le choix d'intégrer une platforme à la pointe de la technologie, répondant aux enjeux cliniques les plus complexes et permettant d'offrir des solutions fiables.
              </p>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-atom"></i>
              </div>
              <h4 className="title">
                <a href="">Partenariats Scientifiques</a>
              </h4>
              <p className="description">
                En collaboration avec des acteurs publics et privés, nous participons activement à la recherche appliquée pour faire progresser l’imagerie médicale adaptée à notre contexte socio-économique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default AboutUs;