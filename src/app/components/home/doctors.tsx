import Image from 'next/image';

const Doctors = () => {
  return (
    <section id="doctors" className="doctors">
      <div className="container">

        <div className="section-title">
          <h2>Médecins</h2>
          <p>
            Dr Zeineb Belkhiria vous accueille dans notre centre pour des services spécialisés en imagerie médicale. 
            Grâce à son expertise et son engagement, bénéficiez d'un accompagnement personnalisé et professionnel.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
            <div className="doctor-image">
  <Image width="300" height="350" src="/img/doctors/dr-belkiria.jpg" alt="Dr Zaineb Belkhiria" />
</div>

              <div className="member-info">
                <h4>Dr Zeineb Belkhiria</h4>
                <span>Radiologue spécialisée en imagerie mammaire et interventionnelle</span>
                <p>
                  Spécialiste en imagerie féminine et oncologique avec 7 ans d'expérience dans le secteur privé. 
                  Médecin scientifiquement et socialement engagée.
                </p>
                <div className="social">
                 
                  <a href="https://www.facebook.com/profile.php?id=61574075916860"><i className="ri-facebook-fill"></i></a>
                 
                  <a href="https://tn.linkedin.com/in/zeineb-belkhiria"><i className="ri-linkedin-box-fill"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Doctors;





























/* import  Image from 'next/image';

const Doctors = () => {
    return (
        <section id="doctors" className="doctors">
      <div className="container">

        <div className="section-title">
          <h2>Doctors</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
              <div className="pic"><Image  width="173" height="173"src="/img/doctors/doctors-1.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Medical Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
              <div className="pic"><Image  width="173" height="173"src="/img/doctors/doctors-2.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Anesthesiologist</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><Image  width="173" height="173"src="/img/doctors/doctors-3.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>Cardiology</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><Image  width="173" height="173"src="/img/doctors/doctors-4.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Neurosurgeon</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    );
};

export default Doctors; */