import '../styles/ContactPage.css';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import OfficeLocations from '../components/OfficeLocations';

function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHero />
      <div className="content-container">
        <ContactInfo />
        <ContactForm />
        <OfficeLocations />
      </div>
    </div>
  );
}

export default ContactPage; 