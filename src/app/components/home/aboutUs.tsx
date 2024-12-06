import { GetServerSideProps } from 'next';

const AboutUs = () => {
    return (
        <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
          </div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Une Équipe Dédiée à Votre Santé</h3>
            <p>Nous sommes une équipe de spécialistes engagés, unissant expertise médicale et innovation technologique pour offrir des soins de qualité et un suivi personnalisé.</p>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-fingerprint"></i></div>
              <h4 className="title"><a href="">Une Approche Humaine</a></h4>
              <p className="description">Chaque patient est unique. Nous adaptons nos services pour répondre à vos besoins spécifiques et vous accompagner tout au long de votre parcours de santé.</p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-gift"></i></div>
              <h4 className="title"><a href="">Expertise Diagnostique</a></h4>
              <p className="description">Grâce à une radiologie spécialisée, nous proposons des diagnostics fiables, précis et personnalisés, adaptés aux attentes des médecins prescripteurs.</p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-atom"></i></div>
              <h4 className="title"><a href="">Partenariats Scientifiques</a></h4>
              <p className="description">En collaboration avec des acteurs publics et privés, nous participons activement à la recherche appliquée pour faire progresser l’imagerie médicale.              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default AboutUs