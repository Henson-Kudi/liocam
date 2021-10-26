import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SinglePlan from './components/SinglePlan';
import Bungalow from './components/Bungalow';
import ScrollToTop from './components/ScrollToTop'
import Duplex from './components/Duplex';
import Apartment from './components/Apartments'
import OtherPlans from './components/OtherPlans'
import Store from './components/Store';
import SingleProduct from './components/SingleProduct';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import SingleService from './components/SingleService';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav/>
        <ScrollToTop>
          <Switch>

            <Route path='/' exact>
              <Homepage/>
            </Route>

            <Route path='/bungalow-designs' exact>
              <Bungalow/>
            </Route>

            <Route path='/duplex-designs' exact>
              <Duplex/>
            </Route>

            <Route path='/apartment-designs' exact>
              <Apartment/>
            </Route>

            <Route path='/other-designs' exact>
              <OtherPlans/>
            </Route>

            <Route path='/liocam-store' exact>
              <Store/>
            </Route>

            <Route path='/about-us' exact>
              <AboutUs/>
            </Route>

            <Route path='/our-services' exact>
              <Services bgc='rgba(0, 0, 0, 0.2)'/>
            </Route>

            <Route path='/our-services/:title' exact>
              <SingleService/>
            </Route>

            <Route path='/contact-us' exact>
              <ContactUs/>
            </Route>

            <Route path='/privacy-policy' exact>
              <PrivacyPolicy/>
            </Route>

            <Route path='/liocam-store/:id' exact>
              <SingleProduct/>
            </Route>

            <Route path='/designs/:category/:id' exact>
              <SinglePlan/>
            </Route>

          </Switch>
        </ScrollToTop>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
