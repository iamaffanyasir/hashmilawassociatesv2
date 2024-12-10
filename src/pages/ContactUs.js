import '../styles/ContactUs.css';
import hero1 from '../images/hero1.jpg';

function ContactUs() {
  const contactInfo = [
    {
      title: "Office Address",
      details: [
        "229-A Pocket-12 Jasola",
        "New Delhi-110025",
        "Old Lawyers chamber Supreme Court of India New Delhi-110001",
        "Delhi High Court Bar Association Sher Shah Road, New Delhi-110053",
        "Patiala House Court Bar Association New Delhi-110001"
      ],
      icon: "fas fa-location-dot"
    },
    {
      title: "Contact Details",
      details: [
        "+91 8588895750",
        "+91 9891224152 (WhatsApp)",
        "info@adalegal.co.in",
        "hashmi.adil@adalegal.co.in",
        "adv.adil.hashmi@gmail.com"
      ],
      icon: "fas fa-phone"
    },
    {
      title: "Working Hours",
      details: [
        "Monday - Saturday",
        "9:30 AM - 6:30 PM",
        "Sunday - Closed"
      ],
      icon: "fas fa-clock"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-page">
      <section 
        className="contact-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our legal experts for professional assistance</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="content-container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <div className="underline"></div>
              <p className="form-intro">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    placeholder="Enter message subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Enter your message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>

            <div className="contact-info-container">
              <h2>Contact Information</h2>
              <div className="underline"></div>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">
                      <i className={info.icon}></i>
                    </div>
                    <h3>{info.title}</h3>
                    <ul>
                      {info.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;