import '../styles/TrafficChallans.css';
import hero1 from '../images/hero1.jpg';

function TrafficChallans() {
  const services = [
    {
      title: "Traffic Challan Resolution",
      description: "Expert assistance in resolving traffic challans and violations",
      icon: "fas fa-car"
    },
    {
      title: "Legal Representation",
      description: "Professional representation in traffic courts and hearings",
      icon: "fas fa-gavel"
    },
    {
      title: "Documentation Support",
      description: "Help with paperwork and documentation for challan disputes",
      icon: "fas fa-file-alt"
    }
  ];

  return (
    <div className="challans-page">
      <section 
        className="challans-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="challans-hero-content">
          <h1>Traffic Challan Services</h1>
          <p>Professional assistance for all your traffic challan related matters</p>
        </div>
      </section>

      <section className="challans-services">
        <div className="content-container">
          <div className="section-header">
            <h2>Our Services</h2>
            <div className="underline"></div>
            <p className="section-intro">
              We provide comprehensive legal assistance for traffic challan matters, ensuring 
              efficient resolution and professional representation.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="content-container">
          <div className="section-header">
            <h2>How We Help</h2>
            <div className="underline"></div>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>Review of your traffic challan case and assessment of available options</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Documentation</h3>
              <p>Collection and preparation of necessary documents and evidence</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Legal Action</h3>
              <p>Professional representation and resolution of your traffic challan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="challan-form-section">
        <div className="content-container">
          <div className="section-header">
            <h2>Submit Your Challan Details</h2>
            <div className="underline"></div>
            <p className="section-intro">
              Fill in the details of your traffic challan for quick assistance
            </p>
          </div>

          <div className="form-container">
            <form className="challan-form">
              <div className="form-grid">
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
                  <label htmlFor="vehicleNumber">Vehicle Number</label>
                  <input 
                    type="text" 
                    id="vehicleNumber" 
                    name="vehicleNumber" 
                    required 
                    placeholder="Enter vehicle registration number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="challanNumber">Challan Number</label>
                  <input 
                    type="text" 
                    id="challanNumber" 
                    name="challanNumber" 
                    placeholder="Enter challan number (if available)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="challanDate">Challan Date</label>
                  <input 
                    type="date" 
                    id="challanDate" 
                    name="challanDate" 
                    required 
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="details">Challan Details</label>
                <textarea 
                  id="details" 
                  name="details" 
                  rows="4" 
                  required 
                  placeholder="Please provide details about the traffic challan"
                ></textarea>
              </div>

              <div className="form-group full-width">
                <label htmlFor="challanImage">Upload Challan Image (Optional)</label>
                <input 
                  type="file" 
                  id="challanImage" 
                  name="challanImage" 
                  accept="image/*,.pdf"
                  className="file-input"
                />
              </div>

              <button type="submit" className="submit-button">
                Submit Details
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="content-container">
          <div className="contact-content">
            <h2>Need Assistance with Traffic Challans?</h2>
            <p>Contact us for professional legal support in resolving your traffic challans</p>
            <button className="contact-button">
              Contact Us Now
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrafficChallans; 