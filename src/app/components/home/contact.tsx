"use client";

import { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleFakeSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents actual form submission
    setMessageSent(true); // Show success message

    // Hide the message after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            N'hésitez pas à nous contacter pour toute question ou prise de rendez-vous.
            Nous sommes à votre écoute pour vous offrir les meilleurs soins en imagerie médicale et sénologie.
          </p>
        </div>
      </div>

      <div>
        <iframe
          style={{ border: 0, width: '100%', height: '350px' }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1595.999836280515!2d10.194301!3d36.825689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYuODI1Njg5LCAxMC4xOTQzMDE=!5e0!3m2!1sfr!2stn!4v1710353820000"
        />
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Adresse :</h4>
                <p>Centre Médical El Hakim <br /> 
                Sous-sol (-1) <br /> 
                Voie X2 - Cité El Khadra - Tunis 1003</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email :</h4>
                <p>drzeinebbelkhiria@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Téléphone :</h4>
                <p>+216 53 008 108</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            {/* Prevent real submission, show fake message */}
            <form className="php-email-form" onSubmit={handleFakeSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" placeholder="Votre Nom" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" placeholder="Votre Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" placeholder="Objet" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" placeholder="Votre Message" required></textarea>
              </div>

              {/* ✅ Fake success message */}
              {messageSent && (
                <div className="alert alert-success fade-in">
                  ✅ Votre message a été envoyé avec succès !
                </div>
              )}

              <div className="text-center">
                <button type="submit" className="btn btn-primary">Envoyer le Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 🔹 CSS to make success message visible */}
      <style jsx>{`
        .alert {
          margin-top: 15px;
          padding: 10px;
          border-radius: 5px;
          background-color: #d4edda;
          color: #155724;
          text-align: center;
          font-weight: bold;
          transition: opacity 0.5s ease-in-out;
        }
        .fade-in {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Contact;
