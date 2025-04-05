"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("mobile-menu-active");
  };

  const handleScrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("mobile-menu-active");

    if (pathname === "/") {
      // We're already on home, scroll directly
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home first
      router.push("/");

      // Delay scroll until route changes
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Allow router.push to complete
    }
  };

  const goToPage = (route: string) => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("mobile-menu-active");
    router.push(route);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Image
          src="/img/your-logo.png"
          alt="BIC Logo"
          width={50}
          height={50}
          className="img-fluid"
          priority
        />

        <nav id="navbar" className={`navbar ${isMobileMenuOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li><a className="nav-link scrollto" onClick={() => handleScrollToSection("#hero")}>Accueil</a></li>
            <li><a className="nav-link scrollto" onClick={() => handleScrollToSection("#about")}>Infos</a></li>
            <li><a className="nav-link scrollto" onClick={() => handleScrollToSection("#services")}>Services</a></li>
            <li><a className="nav-link scrollto" onClick={() => handleScrollToSection("#departments")}>Départements</a></li>
            <li><a className="nav-link scrollto" onClick={() => handleScrollToSection("#doctors")}>Médecins</a></li>
            <li><Link className="nav-link" href="/medias" onClick={() => goToPage("/medias")}>Médias</Link></li>
            <li><a className="nav-link scrollto" onClick={() => handleScrollToSection("#contact")}>Contact</a></li>
          </ul>
        </nav>

        <div className="mobile-nav-toggle" onClick={toggleMobileMenu}>
          <i className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"}`}></i>
        </div>

        <a className="appointment-btn scrollto" onClick={() => handleScrollToSection("#appointment")}>
          Rendez-Vous
        </a>
      </div>
    </header>
  );
}
