import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
// import HomePage from './components/HomePage';
import UsedTechnologies from './components/UsedTechnologies';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';

// ? importamos Bootstrap

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={AboutMe}/>
      <Route path="/contact" exact component={Contact}/>
    </Router>
  );
}

export default App;
