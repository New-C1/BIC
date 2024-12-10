import { GetServerSideProps } from 'next';

const Appointment = () => {
  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Prendre un Rendez-vous</h2>
          <p>Nous facilitons votre prise de rendez-vous avec nos experts en imagerie médicale. Chaque consultation est traitée avec précision et attention pour répondre à vos besoins en diagnostic.</p>
        </div>

        <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Votre Nom" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Votre Email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Votre Téléphone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Date du Rendez-vous" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="department" id="department" className="form-select">
                <option value="">Sélectionnez le Département</option>
                <option value="Department 1">Mammographie & Angio-Mammographie</option>
                <option value="Department 2">Échographie</option>
                <option value="Department 3">Combiner Dentaire</option>
                <option value="Department 3">Radiologie Standard</option>
                <option value="Department 3">Élastographie ShearWave</option>
                <option value="Department 3">IRM & Scanner</option>
              </select>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" className="form-select">
                <option value="">Sélectionnez le Médecin</option>
                <option value="Doctor 1">Doctor 1</option>
                <option value="Doctor 2">Doctor 2</option>
                <option value="Doctor 3">Doctor 3</option>
              </select>
              <div className="validate"></div>
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea className="form-control" name="message" placeholder="Message (Optionnel)"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Votre demande de rendez-vous a été envoyée avec succès. Merci !</div>
          </div>
          <div className="text-center"><button type="submit"> Prendre un Rendez-vous</button></div>
        </form>
      </div>
    </section>
  );
}

export default Appointment