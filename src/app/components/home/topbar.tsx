export default function Topbar() {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center flex-wrap">
          <i className="bi bi-envelope"></i>{" "}
          <a href="mailto:contact@example.com">drzeinebbelkhiria@gmail.com</a>
          <span><i className="bi bi-phone"></i> +216 53 008 108</span>
          <span><i className="bi bi-phone"></i> +216 57 132 305</span>
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
        
          <a href="https://www.facebook.com/profile.php?id=61574075916860" className="facebook">
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
