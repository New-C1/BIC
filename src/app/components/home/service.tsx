import { faDna, faHeartbeat, faHospitalUser, faNotesMedical, faPills, faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = () => {
    return (
        <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>un centre d’imagerie médicale qui allie innovation, humanité et excellence diagnostique. Nous croyons que chaque patient mérite un suivi clair et précis, et chaque médecin un partenaire de confiance.
</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon={faHeartbeat}  className="icon-service"></FontAwesomeIcon></div>
              <h4><a href="">Mammographie 3D & Angio-Mammographie</a></h4>
              <p>Dépistage et diagnostic précis des maladies du sein grâce à des technologies de pointe adaptées à chaque besoin.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon={faPills}  className="icon-service"></FontAwesomeIcon></div>
              <h4><a href="">Échographie & Élastographie ShearWave</a></h4>
              <p>Une solution non invasive pour examiner en temps réel les organes internes.Une technique avancée pour évaluer la rigidité des tissus et faciliter un diagnostic précis des anomalies.</p>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon={faWheelchair}  className="icon-service"></FontAwesomeIcon></div>
              <h4><a href="">Actes Interventionnels</a></h4>
              <p>Une technique écho et/ou radio-guidé à but diagnostique et thérapeutique. </p>
              <p>Biopsies, ponction et repérage. </p> 
            

            </div>
          </div>
         

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon={faDna}  className="icon-service"></FontAwesomeIcon></div>
              <h4><a href="">Radiologie Standard</a></h4>
              <p>Inclut les examens classiques comme la radiographie des genoux ou du thorax pour une prise en charge efficace.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon={faHospitalUser}  className="icon-service"></FontAwesomeIcon></div>
              <h4><a href="">Cone Beam</a></h4>
              <p>Des images radiographiques précises pour des soins dentaires optimaux et un diagnostic approfondi. Exploration en coupe des sinus.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon={faNotesMedical}  className="icon-service"></FontAwesomeIcon></div>
              <h4><a href="">IRM & Scanner</a></h4>
              <p>Imagerie de haute précision pour détecter, analyser et suivre l’évolution de pathologies complexes.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    );
}


export default Service