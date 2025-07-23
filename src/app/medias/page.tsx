"use client";

import React from 'react';
import Header from '../components/home/header';
import Footer from '../components/home/footer';
import Topbar from '../components/home/topbar';
import Image from 'next/image';

const mediasData = [
  {
    date: 'Mai 2025',
    eventName: "Interview Avec RTCI",
    activityType: 'Interview Radio',
    description: 'À l’occasion du lancement officiel de l’Alliance Africaine pour la Santé Globale des Femmes en Oncologie (#AWGHO), prévu le vendredi 16 mai 2025, Dr Zaineb Belkhiria, radiologue et secrétaire de l’Alliance, était l’invitée de l’émission "Autour de Midi" sur RTCI avec Mehdi Haouas',
    videoUrl: 'https://www.youtube.com/embed/zc41iCEW9AQ?si=kA1OvyUEWMGh91NL'
  }
  ,
  {
    date: 'Mai 2023',
    eventName: "Caravane de santé avec l'institut SALAH azaiez",
    activityType: 'Consultation externe avancée',
    description: 'Mammographie, échographie et biopsie',
    videoSrc: '/img/medias/whatsapp1.mp4',
  },
  {
    date: 'Octobre 2024',
    eventName: 'Village Octobre Rose Congo Pointe Noire',
    activityType: 'Dépistage et diagnostic cancer du sein',
    description: 'Campagne de sensibilisation avec échographie et biopsie orientée à Pointe-Noire au Congo.',
    images: ['/img/medias/whatsapp3-1.jpg', '/img/medias/whatsapp3-2.jpg', '/img/medias/whatsapp3-3.jpg'],
  },
  {
    date: 'Septembre 2024',
    eventName: 'Cours Supérieur de Sénologie',
    activityType: 'Conférence',
    description: 'Cours avancé sur l’imagerie du sein triple négatif, formations interactives avec spécialistes internationaux.',
    images: ['/img/medias/whatsapp4-1.jpg', '/img/medias/whatsapp4-2.jpg', '/img/medias/whatsapp4-3.jpg'],
  },
  {
    date: 'Février 2023',
    eventName: 'Breast Cancer Update',
    activityType: 'Séminaire',
    description: 'Rencontre internationale à Dubaï avec des spécialistes du cancer du sein, échanges sur les dernières avancées.',
    images: ['/img/medias/whatsapp5-1.jpg', '/img/medias/whatsapp5-2.jpg', '/img/medias/whatsapp5-3.jpg'],
  },
  {
    date: 'Février 2025',
    eventName: 'Master Class Angio Mammographie',
    activityType: 'Formation Diplomante',
    description: 'Workshop diplômant à l’American Hospital de Dubaï sur l’angio-mammographie, participation d’experts renommés.',
    images: ['/img/medias/whatsapp6-1.jpg', '/img/medias/whatsapp6-2.jpg', '/img/medias/whatsapp6-3.jpg'],
  },
  {
    date: 'Novembre 2025',
    eventName: 'Workshop AMINA',
    activityType: 'Séminaire',
    description: 'Participation au consortium national d’intelligence artificielle appliquée à l’imagerie du sein.',
    images: ['/img/medias/whatsapp7-1.jpg', '/img/medias/whatsapp7-2.jpg', '/img/medias/whatsapp7-3.jpg'],
  },
  {
    date: 'Juin 2024',
    eventName: 'Master Class Macro Biopsie Barcelone',
    activityType: 'Formation',
    description: 'Workshop et master class en sénologie interventionnelle, macro biopsie, échanges pratiques et théoriques approfondis.',
    images: ['/img/medias/whatsapp8-1.jpg', '/img/medias/whatsapp8-2.jpg', '/img/medias/whatsapp8-3.jpg'],
  },
];

export default function MediasPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main className="container medias-page py-5">
        <h2 className="section-title text-center mb-5">Médias & Évènements</h2>
        {mediasData.map((media, index) => (
          <div key={index} className="media-event mb-5 p-4 shadow-sm rounded bg-white">
            <h3 className="event-name mb-2">{media.eventName}</h3>
            <p className="date-type mb-1"><strong>{media.date}</strong> - {media.activityType}</p>
            <p className="description mb-3">{media.description}</p>
            {media.videoUrl ? (
              <div className="video-responsive mb-3">
                <iframe
                  width="100%"
                  height="315"
                  src={media.videoUrl}
                  title={media.eventName}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded"
                ></iframe>
              </div>
            ) : media.videoSrc ? (
              <video controls width="100%" className="rounded mb-3">
                <source src={media.videoSrc} type="video/mp4" />
                Votre navigateur ne prend pas en charge la vidéo.
              </video>
            ) : (
              <div className="row">
                {media.images?.map((src, imgIdx) => (
                  <div key={imgIdx} className="col-12 col-md-4 mb-3">
                    <Image
                      src={src}
                      alt={`${media.eventName} image ${imgIdx + 1}`}
                      width={500}
                      height={300}
                      className="img-fluid rounded"
                    />
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </main>
      <Footer />

      <style jsx>{`
        .medias-page {
          background-color: #f1f7fd;
        }
        .event-name {
          color: #bcacd4;
        }
        .date-type, .description {
          color: #555;
        }
        @media (max-width: 768px) {
          .media-event {
            padding: 15px;
          }
          .section-title {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
