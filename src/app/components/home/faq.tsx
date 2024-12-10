"use client"
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Questions Fréquemment Posées</h2>
          <p>
          Nous répondons à vos interrogations les plus courantes concernant les examens de radiologie, d'imagerie de la femme et de sénologie. N’hésitez pas à nous contacter pour toute question supplémentaire ou pour prendre rendez-vous.
          </p>
        </div>

        <div className="faq-list">
          <Accordion style={{border:"none"}}>
            <AccordionItem >
              <AccordionItemHeading style={{border:"none"}} >
                <AccordionItemButton className="accordion-item">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>
                  <span style={{marginLeft:"5px",color:"black",fontWeight:"600",fontSize:"16px"}}> À partir de quel âge doit-on faire une mammographie de dépistage ?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel 
              style={{background:"white"}}
              >
                <p>
                La mammographie de dépistage est généralement recommandée à partir de l'âge de 40 ans, même en l'absence de symptômes. Toutefois, si vous présentez des antécédents familiaux de cancer du sein, une consultation précoce est conseillée pour évaluer le risque et adapter le suivi.


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-item">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>{" "}
                  <span style={{marginLeft:"5px",color:"black",fontWeight:"600",fontSize:"16px"}}>Une échographie mammaire peut-elle remplacer une mammographie ?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel 
              style={{background:"white"}}
              >
                <p>
                Non, l'échographie mammaire ne remplace pas la mammographie. Ce sont des examens complémentaires. La mammographie reste le moyen principal de dépistage du cancer du sein, tandis que l'échographie est utilisée pour approfondir l'analyse en cas de seins denses ou d'anomalie détectée.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-item">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>
                  <span style={{marginLeft:"5px",color:"black",fontWeight:"600",fontSize:"16px"}}>Quels sont les signes qui doivent m’alerter pour consulter en sénologie ?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel 
              style={{background:"white"}}
              >
                <p>
                Vous devriez consulter si vous remarquez :

Une boule ou une masse dans le sein;
Un écoulement anormal du mamelon;
Une modification de la forme ou de la taille du sein;
Une douleur persistante ou des changements de la peau (rougeur, rétraction).

                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-item">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>{" "}
                  <span style={{marginLeft:"5px",color:"black",fontWeight:"600",fontSize:"16px"}}>L'exposition aux rayons X d'une mammographie est-elle dangereuse ?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel 
              style={{background:"white"}}
              >
                <p>
                La dose de rayons X utilisée lors d’une mammographie est très faible et sans danger pour la plupart des femmes. Les bénéfices du dépistage précoce du cancer du sein surpassent largement les risques liés à cette exposition minime.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={{border:"none"}}>
              <AccordionItemHeading style={{border:"none"}}>
                <AccordionItemButton className="accordion-item" style={{border:"none"}}>
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>
                  <span style={{marginLeft:"5px",color:"#343a40",fontWeight:"600",fontSize:"16px"}}>Doit-on prendre des précautions particulières avant une IRM mammaire ?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel
                style={{background:"white"}}
              >
                <p>
                Oui, pour une IRM mammaire, il est conseillé de :

Éviter de porter des objets métalliques;
Informer votre radiologue si vous êtes enceinte ou si vous avez des implants métalliques;
Planifier l’examen entre le 7ᵉ et le 14ᵉ jour du cycle menstruel pour une meilleure précision.

                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
