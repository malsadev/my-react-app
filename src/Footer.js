import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Make sure to create this CSS file
import { useTranslation } from 'react-i18next';

const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="container custom-footer-container" style={{ maxWidth: '100%' }}>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top custom-footer">
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none custom-brand">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap logo">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <p className="custom-text">&copy; 2024 ProjectBuddies. All rights reserved.</p>
        </div>

        <div className="col mb-3">
          <h5 className="custom-heading">{t('footer_contact_us')}</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="tel:+123456789" className="nav-link p-0 custom-nav-link">{t('footer_phone')}</a>
            </li>
            <li className="nav-item mb-2">
              <a href="mailto:info@example.com" className="nav-link p-0 custom-nav-link">{t('footer_email')}</a>
            </li>
            <li className="nav-item mb-2">
              <p className="mb-0">{t('footer_address')}</p>
              <p className="mb-0">{t('footer_address_line1')}</p>
              <p className="mb-0">{t('footer_address_line2')}</p>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="custom-heading">{t('footer_useful_links')}</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 custom-nav-link">{t('footer_home')}</a>
            </li>
            <li className="nav-item mb-2">
              <a href="/features" className="nav-link p-0 custom-nav-link">{t('footer_features')}</a>
            </li>
            <li className="nav-item mb-2">
              <a href="/pricing" className="nav-link p-0 custom-nav-link">{t('footer_gallery')}</a>
            </li>
            <li className="nav-item mb-2">
              <a href="/faqs" className="nav-link p-0 custom-nav-link">{t('footer_team')}</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
