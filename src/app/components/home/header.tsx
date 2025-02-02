import Image from "next/image"
import Media from './media'
import Link from 'next/link';


export default function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">

        <Image
          src="/img/your-logo.png"
          alt="BIC Logo"
          width={50}
          height={50}
          className="img-fluid"
          priority
        />


        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#departments">Departments</a></li>
            <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
            <li className="dropdown"><a href="#"><span>Recherche et Formation</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Participations Scientifiques</a></li>
                <li className="dropdown">
  <Link href="/media"><span>Médias</span></Link>
</li>
                <li><a href="#">Conférences</a></li>
                <li><a href="#">Congrés Internationaux</a></li>
                <li><a href="#">Workshop</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

      </div>
    </header>
  );
}



