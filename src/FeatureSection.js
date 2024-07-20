import React from 'react';
import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';



const Container = styled.div`
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }

  .b-example-divider {
    width: 100%;
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
  }

  .b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
  }

  .bi {
    vertical-align: -.125em;
    fill: currentColor;
  }

  .nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
  }

  .nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .btn-bd-primary {
    --bd-violet-bg: #712cf9;
    --bd-violet-rgb: 112.520718, 44.062154, 249.437846;
    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-white);
    --bs-btn-bg: var(--bd-violet-bg);
    --bs-btn-border-color: var(--bd-violet-bg);
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: #6528e0;
    --bs-btn-hover-border-color: #6528e0;
    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
    --bs-btn-active-color: var(--bs-btn-hover-color);
    --bs-btn-active-bg: #5a23c8;
    --bs-btn-active-border-color: #5a23c8;
  }

  .bd-mode-toggle {
    z-index: 1500;
  }

  .bd-mode-toggle .dropdown-menu .active .bi {
    display: block !important;
  }

  .feature-icon {
    width: 4rem;
    height: 4rem;
    border-radius: .75rem;
  }

  .icon-square {
    width: 3rem;
    height: 3rem;
    border-radius: .75rem;
  }

  .text-shadow-1 { text-shadow: 0 .125rem .25rem rgba(0, 0, 0, .25); }
  .text-shadow-2 { text-shadow: 0 .25rem .5rem rgba(0, 0, 0, .25); }
  .text-shadow-3 { text-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .25); }

  .card-cover {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .feature-icon-small {
    width: 3rem;
    height: 3rem;
  }
`;

const FeatureSection = () => {

  const { t } = useTranslation();
  return (
    <Container id="features" className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">{t('exclusive_features_heading')}</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">{t('discover_heading')}</h2>
          <p className="text-body-secondary">{t('discover_text')}</p>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <div
                className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3"
                style={{ backgroundColor: 'white' }}
                aria-hidden="true"
              >
                <svg style={{ color: "gold", width: '40px', height: '40px' }} className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">{t('feature_discover_job_packages')}</h4>
              <p className="text-body-secondary">{t('feature_discover_job_packages_text')}</p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div
                className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3"
                aria-hidden="true"
              >
                <svg style={{ color: 'gold', width: '40px', height: '40px' }} className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" />
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">{t('feature_view_job_details')}</h4>
              <p className="text-body-secondary">{t('feature_view_job_details_text')}</p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div
                className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3"
                aria-hidden="true"
              >
                <svg style={{ color: 'gold', width: '40px', height: '40px' }} className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">{t('feature_schedule_service')}</h4>
              <p className="text-body-secondary">{t('feature_schedule_service_text')}</p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div
                className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3"
                aria-hidden="true"
              >
                <svg style={{ color: 'gold', width: '40px', height: '40px' }} className="bi" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">{t('feature_direct_communication')}</h4>
              <p className="text-body-secondary">{t('feature_direct_communication_text')}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>

  );
};

export default FeatureSection;
