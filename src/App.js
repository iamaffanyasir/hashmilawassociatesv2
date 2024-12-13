import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DisclaimerModal from './components/DisclaimerModal';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurValues from './pages/OurValues';
import OurTeams from './pages/OurTeams';
import ContactUs from './pages/ContactUs';
import Internship from './pages/Internship';
import Footer from './components/Footer';
import Retainership from './pages/Retainership';
import NewsUpdates from './pages/NewsUpdates';
import TrafficChallans from './pages/TrafficChallans';
import Articles from './pages/Articles';

function App() {
  return (
    <Router>
      <div className="App">
        <DisclaimerModal />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-values" element={<OurValues />} />
          <Route path="/our-team" element={<OurTeams />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/internships" element={<Internship />} />
          <Route path="/retainership" element={<Retainership />} />
          <Route path="/news" element={<NewsUpdates />} />
          <Route path="/traffic-challans" element={<TrafficChallans />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
