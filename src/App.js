// {
//   /* The following line can be included in your src/index.js or App.js file */
// }
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

// import BasicExample from './BasicExample'; // Import the Navbar component
import CollapsibleExample from './CollapsibleExample';
// import HeroImage from './HeroImage';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import FooterComponent from './Footer';
import MainComponent from './GalleryAndTeam';
import SearchUi from './SearchUi';
import Product from './Product';
import Checkout from './checkout';

import { useTranslation } from 'react-i18next';



function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      {/* <h2>{t('Welcome to React')}</h2> */}
      {/* <BasicExample /> Include the Navbar at the top */}
      {/* <Router>
        <Switch>
          <Route path="/" element={<App/>} />
          <Route path="/explore" element={<SearchUi/>} />
        </Switch>
      </Router> */}
      <CollapsibleExample />
      {/* <HeroImage /> */}
      <HeroSection />
      <FeatureSection />
      <MainComponent />
      <FooterComponent />
      {/* <Checkout />   */}
      {/* <Product /> */}
      {/* <SearchUi /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
