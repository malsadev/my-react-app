import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const resources = {
//   en: {
//     translation: {
//       "Welcome to React": "Welcome to React and react-i18next",

//     }
//   },
//   fr: {
//     translation: {
//       "Welcome to React": "Bienvenue à React et react-i18next"
//     }
//   }
// };
const resources = {
  en: {
    translation: {
      // Existing translations...
      "hero_heading": "Simplify Your Projects with ProjectBuddies",
      "hero_text": "Discover skilled professionals for any project—residential, commercial, industrial, or public. Browse job packages tailored to your needs for quality service at competitive rates and on your schedule. ProjectBuddies connects you with trusted specialists like handymen, landscapers, plumbers, and more, ensuring a seamless experience from start to finish.",
      "explore_button": "Explore Job Packages",
      "exclusive_features_heading": "Exclusive Features",
      "discover_heading": "Discover What Makes ProjectBuddies Stand Out",
      "discover_text": "ProjectBuddies is your ultimate partner in project management. We simplify the process of finding skilled professionals for any project, whether it's residential, commercial, or industrial.",
      "feature_discover_job_packages": "Discover Job Packages",
      "feature_discover_job_packages_text": "Explore job options using filters for different property types and services.",
      "feature_view_job_details": "View Job Details",
      "feature_view_job_details_text": "Read descriptions, view pictures, and check prices and reviews.",
      "feature_schedule_service": "Schedule Service",
      "feature_schedule_service_text": "Select and book services with an interactive calendar and secure payments.",
      "feature_direct_communication": "Direct Communication",
      "feature_direct_communication_text": "Access customer support directly for personalized assistance.",
      // New translations for the team section
      "team_heading": "Meet Our Team",
      "team_member_john_doe": "John Doe",
      "team_member_john_doe_text": "John is our dedicated project manager, with a knack for coordinating seamless workflows and ensuring deadlines are met effectively.",
      "team_member_jane_smith": "Jane Smith",
      "team_member_jane_smith_text": "Jane brings expertise in customer relations, ensuring every interaction with ProjectBuddies is both professional and supportive.",
      "team_member_michael_johnson": "Michael Johnson",
      "team_member_michael_johnson_text": "Michael is our technical guru, specializing in platform development and ensuring ProjectBuddies remains at the forefront of innovation.",
      // New translations for the navbar
      "navbar_brand": "ProjectBuddies",
      "navbar_features": "Features",
      "navbar_gallery": "Gallery",
      "navbar_team": "Team",
      "navbar_explore_projects": "Explore Projects",
      "navbar_language": "Language",
      "navbar_english": "English",
      "navbar_french": "French",
      "footer_contact_us": "Contact Us",
      "footer_phone": "Phone: +1 (234) 567-89",
      "footer_email": "Email: projecto@buddies.com",
      "footer_address": "Address:",
      "footer_address_line1": "123 Main Street,",
      "footer_address_line2": "Springfield, IL 62701",
      "footer_useful_links": "Useful Links",
      "footer_home": "Home",
      "footer_features": "Features",
      "footer_gallery": "Gallery",
      "footer_team": "Team"
    }
  },
  fr: {
    translation: {
      // Existing translations...
      "hero_heading": "Simplifiez vos projets avec ProjectBuddies",
      "hero_text": "Découvrez des professionnels qualifiés pour tout projet - résidentiel, commercial, industriel ou public. Parcourez les offres de services adaptées à vos besoins pour un service de qualité à des tarifs compétitifs et selon votre emploi du temps. ProjectBuddies vous connecte avec des spécialistes de confiance tels que des bricoleurs, des paysagistes, des plombiers, et bien plus encore, garantissant une expérience fluide du début à la fin.",
      "explore_button": "Explorer les offres de services",
      "exclusive_features_heading": "Fonctionnalités Exclusives",
      "discover_heading": "Découvrez ce qui rend ProjectBuddies unique",
      "discover_text": "ProjectBuddies est votre partenaire idéal en gestion de projet. Nous simplifions le processus de recherche de professionnels qualifiés pour tout projet, qu'il soit résidentiel, commercial ou industriel.",
      "feature_discover_job_packages": "Découvrir les offres de services",
      "feature_discover_job_packages_text": "Explorez les options de travail en utilisant des filtres pour différents types de propriétés et services.",
      "feature_view_job_details": "Voir les détails du travail",
      "feature_view_job_details_text": "Lisez les descriptions, voyez les images et vérifiez les prix et les avis.",
      "feature_schedule_service": "Planifier un service",
      "feature_schedule_service_text": "Sélectionnez et réservez des services avec un calendrier interactif et des paiements sécurisés.",
      "feature_direct_communication": "Communication directe",
      "feature_direct_communication_text": "Accédez directement au support client pour une assistance personnalisée.",
      // New translations for the team section
      "team_heading": "Rencontrez notre équipe",
      "team_member_john_doe": "John Doe",
      "team_member_john_doe_text": "John est notre chef de projet dédié, avec un talent pour coordonner des flux de travail harmonieux et garantir que les délais sont respectés efficacement.",
      "team_member_jane_smith": "Jane Smith",
      "team_member_jane_smith_text": "Jane apporte son expertise en relations clients, garantissant que chaque interaction avec ProjectBuddies soit à la fois professionnelle et accueillante.",
      "team_member_michael_johnson": "Michael Johnson",
      "team_member_michael_johnson_text": "Michael est notre gourou technique, spécialisé dans le développement de plateformes et garantissant que ProjectBuddies reste à la pointe de l'innovation.",
      // New translations for the navbar
      "navbar_brand": "ProjectBuddies",
      "navbar_features": "Fonctionnalités",
      "navbar_gallery": "Galerie",
      "navbar_team": "Équipe",
      "navbar_explore_projects": "Explorer les projets",
      "navbar_language": "Langue",
      "navbar_english": "Anglais",
      "navbar_french": "Français",
      // Existing translations...
      "footer_contact_us": "Contactez-nous",
      "footer_phone": "Téléphone : +1 (234) 567-89",
      "footer_email": "Email : projecto@buddies.com",
      "footer_address": "Adresse :",
      "footer_address_line1": "123 rue Principale,",
      "footer_address_line2": "Springfield, IL 62701",
      "footer_useful_links": "Liens utiles",
      "footer_home": "Accueil",
      "footer_features": "Fonctionnalités",
      "footer_gallery": "Galerie",
      "footer_team": "Équipe"
    }
  }
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;