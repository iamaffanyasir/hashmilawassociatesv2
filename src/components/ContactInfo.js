import '../styles/ContactInfo.css';

function ContactInfo() {
  const contactDetails = [
    {
      title: "Phone",
      primary: "+91 98100 35635",
      secondary: "+91 11 4155 5635",
      icon: "fas fa-phone"
    },
    {
      title: "Email",
      primary: "info@hashmilawassociates.com",
      secondary: "contact@hashmilawassociates.com",
      icon: "fas fa-envelope"
    },
    {
      title: "Working Hours",
      primary: "Monday - Saturday",
      secondary: "10:00 AM - 6:00 PM",
      icon: "fas fa-clock"
    }
  ];

  return (
    <section className="contact-info">
      <div className="section-header">
        <span className="subtitle">Contact Information</span>
        <h2>How to Reach Us</h2>
        <div className="underline"></div>
      </div>

      <div className="contact-grid">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon">
              <i className={detail.icon}></i>
            </div>
            <div className="contact-details">
              <h3>{detail.title}</h3>
              <p>{detail.primary}</p>
              <p>{detail.secondary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo; 