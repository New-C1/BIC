import Image from 'next/image'

const gallerie = () => {
    return (
        <section id="gallery" className="gallery">
      <div className="container">

        <div className="section-title">
          <h2>Gallerie</h2>
          <p>Situé à Cité El Khadra - Voie X2, Tunis 1003, notre Centre d'imagerie mammaire vous accueille du lundi au vendredi, de 8h à 19h, et 2 samedis par mois de 9h à 13h.</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                <Image width="351" height="263" src="/img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                <Image width="351" height="263" src="/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                <Image width="351" height="263" src="/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                <Image width="351" height="263" src="/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
          </div>
        <div className="row g-0">

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                <Image width="351" height="263" src="/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                <Image  width="351" height="263" src="/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                <Image  width="351" height="263" src="/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                <Image  width="351" height="263" src="/img/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}

export default gallerie