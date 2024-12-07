import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DisclaimerModal from './components/DisclaimerModal';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OurValuesPage from './pages/OurValuesPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <DisclaimerModal />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-values" element={<OurValuesPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
