export default function Topbar() {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope"></i>{" "}
          <a href="mailto:contact@example.com">contact@bic.com</a>
          <i className="bi bi-phone"></i> +216 55 941 086
          <i className="bi bi-phone"></i> +216 57 132 305
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
        
          <a href="https://www.facebook.com/zeineb.belkhiria.3" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          
          <a href="https://tn.linkedin.com/in/zeineb-belkhiria" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
