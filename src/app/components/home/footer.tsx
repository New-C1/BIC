const footer = () => {
    return (
<footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>BIC</h3>
            <p>
            Centre de Radiologie El Hakim <br/>
            Étage (-1) <br />
            Voie X2 - Cité El Khadra<br/>
              Tunis 1003 <br/><br/>
              <strong>Phone:</strong> +216 55 941 086<br/>
              <strong>Email:</strong> drzeinebbelkhiria@gmail.com<br/>
            </p>
          </div>

           <div className="col-lg-2 col-md-6 footer-links">
           
          </div> 

           <div className="col-lg-3 col-md-6 footer-links">
            {/* <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul> */}
          </div> 

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Blogs</h4>
            <p>Restez informé des dernières avancées en radiologie, imagerie médicale et sénologie. Découvrez nos articles et conseils dédiés à la santé de la femme.</p>
            <form action="" method="post">
                <input type="email" name="email"/>
                <input type="submit" value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>BIC</span></strong>. All Rights Reserved
        </div>
        
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">

        <a href="https://www.facebook.com/zeineb.belkhiria.3" className="facebook"><i className="bx bxl-facebook"></i></a>
        
        <a href="https://tn.linkedin.com/in/zeineb-belkhiria" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
    );
}

export default footer