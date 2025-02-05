"use client"
import Image from "next/image"
import { useState } from "react";
type Departement = {title:string,italicPara:string,paragraph:string,image:string}
const departement :string[] = ["Cardiology","Neurology","Hepatology","Pediatrics","Eye Care"]
const DepartementDetail : {title:string,paragraph:string,image:string}[] = [
  { 
    title:"Mammographie 3D & Angio-Mammographie",
    
    paragraph:"La mammographie 3D, combinée à une fonctionnalité exclusive sur nos machines haute définition, offre une efficacité diagnostique supérieure grâce à une technologie d'IA innovante de traitement d'image. L'angio-Mammographie permet une imagerie du sein avec injection de produit de contraste permettant de démasquer des anomalies subtiles pour un diagnostic précoce et précis. ",
    image:"/img/departments-1.jpg"
  },
  { 
    title:"Échographie & Élastographie ShearWave",
    
    paragraph:"L'échographie est une méthode d'imagerie douce et rapide, permettant d'observer en temps réel les organes internes, les tissus mous, et de surveiller efficacement l'état de santé global. l'élastographie shearWave est une fonctionalité unique sur notre systéme permettant une supériorité diagnostique dans les cas les plus complexes. ",
    image:"/img/departments-2.jpg"
  },
  { 
    title:"Actes Interventionnels",
    
    paragraph:"Il s'agit d'interventions percutanées réalisées en ambulatoire, à visée diagnostique, comme les biopsies, ou thérapeutique, sous guidage échographique ou scanner. En sénologie, certains actes sont effectués dans le cadre du repérage pré-thérapeutique, tels que la pose de harpons et de clips sous contrôle échographique ou mammographique, permettant d'identifier avec précision les lésions cibles avant le traitement.",
    image:"/img/departments-3.jpg"
  },
  { 
    title:"Radiologie Standard",
    
    paragraph:"La radiologie standard regroupe les examens d'imagerie essentiels comme les radiographies du thorax ou des articulations. Ce service permet une évaluation rapide et efficace des pathologies courantes.",
    image:"/img/departments-4.jpg"
  },
  { 
    title:"Cone Beam",
   
    paragraph:"Le Cone Beam est une technologie d'imagerie médicale utilisée principalement pour examiner la dentition, les sinus et l'ossature maxillo-faciale. Il permet de réaliser une étude détaillée des structures en une seule acquisition, avec une irradiation généralement inférieure à celle des scanners traditionnels, ce qui le rend particulièrement utile pour diagnostiquer des pathologies dans ces zones.",
    image:"/img/departments-5.jpg"
  },
  { 
    title:"IRM & Scanner",
    
    paragraph:"Les examens d’IRM et de scanner offrent une imagerie médicale avancée, capable de détecter et de surveiller les pathologies les plus complexes pour une prise en charge optimale.",
    image:"/img/departments-6.jpg"
  }

]
const Departement = () => {
    const [view,setView] = useState(0)
    return (
        <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Departments</h2>
            <p>Découvrez nos départements dédiés à l'imagerie médicale de pointe, conçus pour répondre à vos besoins de santé avec précision et efficacité. Notre équipe d'experts utilise les dernières technologies pour vous offrir des services personnalisés et des diagnostics fiables. Chaque département est spécialisé pour garantir une prise en charge optimale et adaptée à chaque patient.</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
          {DepartementDetail.map((dep,index)=> (
                  <li className="nav-item" key="dep" onClick={()=>setView(index)}>
                  <a className={`nav-link ${view === index ?"active" : "" } show`} href={"#tab-"+index+1} >{dep.title}</a>
                </li>
          ))}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{DepartementDetail[view].title}</h3>
                     
                      <p>{DepartementDetail[view].paragraph}</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <Image  width="306" height="267"src={DepartementDetail[view].image} alt="" className="Image -fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Departement