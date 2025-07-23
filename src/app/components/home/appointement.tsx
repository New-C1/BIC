"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_tv2dg3l";
const TEMPLATE_ID = "template_1nnxzca";
const PUBLIC_KEY = "DG30p7Sn5EI_HyPDN";

const Appointment = () => {
  const form = useRef<HTMLFormElement>(null);

  // For feedback messages
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    if (!form.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setLoading(false);
          setSent(true);
          form.current?.reset();
          console.log("Email sent!", result);
        },
        (err) => {
          setLoading(false);
          setError("Erreur lors de l'envoi. Veuillez réessayer.");
          alert("Erreur EmailJS: " + JSON.stringify(err));
          console.error("EmailJS error:", err);
        }
      );



  };

  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Prendre un Rendez-vous</h2>
          <p>
            Nous facilitons votre prise de rendez-vous avec nos experts en imagerie médicale. Chaque consultation est traitée avec précision et attention pour répondre à vos besoins en diagnostic.
          </p>
        </div>

        <form ref={form} className="php-email-form" onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Votre Nom" minLength={4} required />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Votre Email" required />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Votre Téléphone" minLength={4} required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input type="date" name="date" className="form-control" id="date" required />
              <input type="time" name="time" className="form-control mt-2" id="time" required />

            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="department" id="department" className="form-select" required>
                <option value="">Sélectionnez le Département</option>
                <option value="Mammographie & Angio-Mammographie">Mammographie & Angio-Mammographie</option>
                <option value="Échographie">Échographie</option>
                <option value="Combiner Dentaire">Combiner Dentaire</option>
                <option value="Radiologie Standard">Radiologie Standard</option>
                <option value="Élastographie ShearWave">Élastographie ShearWave</option>
                <option value="IRM & Scanner">IRM & Scanner</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" className="form-select" required>
                <option value="">Sélectionnez le Médecin</option>
                <option value="Dr Zeineb Belkhiria">Dr Zeineb Belkhiria</option>
                {/*            <option value="Doctor 2">Doctor 2</option>
                <option value="Doctor 3">Doctor 3</option> */}
              </select>
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea className="form-control" name="message" placeholder="Message (Optionnel)"></textarea>
          </div>

          <div className="mb-3">
            {loading && <div className="loading">Envoi en cours...</div>}
            {error && <div className="error-message">{error}</div>}
            {sent && <div className="sent-message">Votre demande de rendez-vous a été envoyée avec succès. Merci !</div>}
          </div>

          <div className="text-center">
            <button type="submit" disabled={loading}>Prendre un Rendez-vous</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
