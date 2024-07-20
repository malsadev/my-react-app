import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GalleryAndTeam.css';
import JohnDoe from './assets/tutor-8.jpg'
// https://www.google.com/url?sa=i&url=https%3A%2F%2Foodp.ca%2Fteacher%2Fjohn-doe%2F&psig=AOvVaw18AMrDKnHEHemuR7WeEpvZ&ust=1720840807506000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICfltrFoIcDFQAAAAAdAAAAABAE
import JaneSmith from './assets/john-doe.jpg'
//https://www.google.com/url?sa=i&url=https%3A%2F%2Ffranchisematch.com%2Fhome%2Fjohn-doe%2F&psig=AOvVaw18AMrDKnHEHemuR7WeEpvZ&ust=1720840807506000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICfltrFoIcDFQAAAAAdAAAAABAb'
import MichaelJohnson from './assets/team-1.jpg'
//https://www.google.com/url?sa=i&url=https%3A%2F%2Ffotomuralesmexico.com%2Fmember%2Fjohn-doe%2F&psig=AOvVaw18AMrDKnHEHemuR7WeEpvZ&ust=1720840807506000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICfltrFoIcDFQAAAAAdAAAAABAn
// import { useScript } from 'react-script-hook';
import gallery1 from './assets/istockphoto-1279269349-612x612.jpg'
//https://media.istockphoto.com/id/1279269349/photo/paintig-an-old-furniture-at-home.jpg?s=612x612&w=0&k=20&c=FmPzzFW00uvaxXv8KgVGOjrF8NEK4w9YVkkskfYCDnM='
import gallery2 from './assets/home-checklist-hero.jpeg'
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hippo.com%2Flearn-center%2Fhome-maintenance-checklist&psig=AOvVaw1j5oHP_60sisSHvJtd_scj&ust=1720838676930000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjKrua9oIcDFQAAAAAdAAAAABAZ
import gallery3 from './assets/photo-1581578017426-04fbc2b0511e.avif'
//https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhome-maintenance&psig=AOvVaw3M5bHBoji8pXhb9GhvBaxj&ust=1720842580036000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiOkKfMoIcDFQAAAAAdAAAAABA7
import gallery4 from './assets/84497-Hero-Images-Batch_4_Superside_D1.png'
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zolo.ca%2Fblog%2Fhome-maintenance-checklist&psig=AOvVaw3M5bHBoji8pXhb9GhvBaxj&ust=1720842580036000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqGAoTCKiOkKfMoIcDFQAAAAAdAAAAABCKAQ


import { useTranslation } from 'react-i18next';


const MainComponent = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/bootstrap.bundle.min.js';
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      console.log('Bootstrap script loaded.');
    };

    script.onerror = (error) => {
      console.error('Error loading Bootstrap script:', error);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main id="gallery" className="custom-main">
      <div id="myCarousel" className="carousel slide mb-6 custom-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="bd-placeholder-img"
              src={gallery3} // Replace with your image path
              alt="Description of image 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Preserve aspect ratio and cover the container
            />
            <div className="container">
              <div className="carousel-caption text-start"></div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="bd-placeholder-img"
              src={gallery2} // Replace with your image path
              alt="Description of image 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Preserve aspect ratio and cover the container
            />
            <div className="container">
              <div className="carousel-caption"></div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="bd-placeholder-img"
              src={gallery4} // Replace with your image path
              alt="Description of image 3"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Preserve aspect ratio and cover the container
            />
            <div className="container">
              <div className="carousel-caption text-end"></div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev custom-carousel-control" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-carousel-control" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div id="team" className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle custom-team-image"
              src={JohnDoe}
              alt="John Doe"
              width="140"
              height="140"
            />
            <h2 className="fw-normal custom-team-heading">{t('team_member_john_doe')}</h2>
            <p className="custom-team-text">{t('team_member_john_doe_text')}</p>
          </div>
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle custom-team-image"
              src={JaneSmith}
              alt="Jane Smith"
              width="140"
              height="140"
            />
            <h2 className="fw-normal custom-team-heading">{t('team_member_jane_smith')}</h2>
            <p className="custom-team-text">{t('team_member_jane_smith_text')}</p>
          </div>
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle custom-team-image"
              src={MichaelJohnson}
              alt="Michael Johnson"
              width="140"
              height="140"
            />
            <h2 className="fw-normal custom-team-heading">{t('team_member_michael_johnson')}</h2>
            <p className="custom-team-text">{t('team_member_michael_johnson_text')}</p>
          </div>
        </div>
      </div>
    </main>

  );
}

export default MainComponent;