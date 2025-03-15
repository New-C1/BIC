"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("mobile-menu-active");
  };

  const closeMobileMenu = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("mobile-menu-active");

    // Force hash change for scrolling
    setTimeout(() => {
      router.push(sectionId);
    }, 50);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">

        {/* Logo */}
        <Image
          src="/img/your-logo.png"
          alt="BIC Logo"
          width={50}
          height={50}
          className="img-fluid"
          priority
        />

        {/* Navbar */}
        <nav id="navbar" className={`navbar ${isMobileMenuOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li><a className="nav-link scrollto active" href="#hero" onClick={() => closeMobileMenu("#hero")}>Accueil</a></li>
            <li><a className="nav-link scrollto" href="#about" onClick={() => closeMobileMenu("#about")}>Infos</a></li>
            <li><a className="nav-link scrollto" href="#services" onClick={() => closeMobileMenu("#services")}>Services</a></li>
            <li><a className="nav-link scrollto" href="#departments" onClick={() => closeMobileMenu("#departments")}>Départements</a></li>
            <li><a className="nav-link scrollto" href="#doctors" onClick={() => closeMobileMenu("#doctors")}>Médecins</a></li>
            <li><a className="nav-link scrollto" href="#contact" onClick={() => closeMobileMenu("#contact")}>Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="mobile-nav-toggle" onClick={toggleMobileMenu}>
          <i className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"}`}></i>
        </div>

        {/* Appointment Button */}
        <a href="#appointment" className="appointment-btn scrollto" onClick={() => closeMobileMenu("#appointment")}>
          Rendez-Vous
        </a>

      </div>
    </header>
  );
}
