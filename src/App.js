import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact>
            <Homepage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
