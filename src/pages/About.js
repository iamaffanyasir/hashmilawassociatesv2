import '../styles/About.css';
import AboutHero from '../components/AboutHero';
import AboutIntro from '../components/AboutIntro';
import OurValues from '../components/OurValues';
import OurTeam from '../components/OurTeam';

function About() {
  return (
    <div className="about-page">
      <AboutHero />
      <div className="content-container">
        <AboutIntro />
        <OurValues />
        <OurTeam />
      </div>
    </div>
  );
}

export default About;