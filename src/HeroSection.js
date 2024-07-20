import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import HeroImage from './assets/mrh-blog-your-home-maintenance-services-checklist.webp';
// https://www.mrhandyman.com/us/en-us/mr-handyman/_assets/expert-tips/images/Local-blogs-images/mrh-blog-your-home-maintenance-services-checklist.webp
import './Hero.css';
import { useTranslation } from 'react-i18next';


function HeroSection() {
  const { t } = useTranslation();

  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/explore');
  };

  return (
    <div className="container col-xxl-8 px-4 py-5 custom-hero-container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={HeroImage}
            className="d-block mx-lg-auto img-fluid custom-hero-image"
            alt={t('hero_image_alt')}
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold custom-hero-heading lh-1 mb-3">
            {t('hero_heading')}
          </h1>
          <p className="lead custom-hero-text">
            {t('hero_text')}
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 custom-hero-btn"
              aria-label={t('explore_button')}
            >
              {t('explore_button')}
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HeroSection;


