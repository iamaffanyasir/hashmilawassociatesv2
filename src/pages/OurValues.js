import '../styles/OurValues.css';
import hero1 from '../images/hero1.jpg';

function OurValues() {
  const coreValues = [
    {
      title: "Professional Excellence",
      description: "We maintain the highest standards of professional ethics and legal expertise in all our services.",
      points: [
        "Expert legal counsel across practice areas",
        "Continuous professional development",
        "Industry best practices implementation",
        "Quality-driven approach"
      ],
      icon: "fas fa-scale-balanced"
    },
    {
      title: "Client-First Approach",
      description: "Understanding and meeting our clients' needs with practical and effective legal solutions.",
      points: [
        "Personalized attention to each case",
        "Regular case status updates",
        "Transparent communication",
        "Cost-effective solutions"
      ],
      icon: "fas fa-handshake"
    },
    {
      title: "Integrity & Trust",
      description: "Building lasting relationships based on trust, transparency, and ethical practices.",
      points: [
        "Ethical business conduct",
        "Professional confidentiality",
        "Trust-based relationships",
        "Transparent dealings"
      ],
      icon: "fas fa-shield-halved"
    },
    {
      title: "Legal Innovation",
      description: "Combining traditional legal wisdom with innovative approaches to modern challenges.",
      points: [
        "Modern legal solutions",
        "Technology integration",
        "Creative problem-solving",
        "Adaptive strategies"
      ],
      icon: "fas fa-lightbulb"
    }
  ];

  const expertise = [
    {
      title: "Multi-Tier Legal Team",
      description: "Specialized teams for Trial Courts, High Courts, Supreme Court, and Corporate Law.",
      icon: "fas fa-users"
    },
    {
      title: "Pan-India Network",
      description: "Strong network of legal professionals and consultants across the country.",
      icon: "fas fa-globe-asia"
    },
    {
      title: "Comprehensive Services",
      description: "End-to-end legal solutions across diverse practice areas.",
      icon: "fas fa-briefcase"
    }
  ];

  return (
    <div className="values-page">
      <section 
        className="values-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="values-hero-content">
          <h1>Our Core Values</h1>
          <p>Delivering Excellence Through Professional Ethics and Expertise</p>
        </div>
      </section>

      <section className="values-intro">
        <div className="content-container">
          <div className="intro-text">
            <h2>What Drives Us</h2>
            <div className="underline"></div>
            <p className="highlight">
              In today's evolving legal landscape, we believe in maintaining the highest standards of 
              professional ethics while delivering innovative legal solutions to our clients.
            </p>
            <p>
              Our team believes that in the context of present world economic order, the legal profession 
              plays a more valuable and constructive role than ever before. The changes in the economic 
              climate, especially in India, have brought about a transformation in the traditional role 
              of lawyers.
            </p>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="content-container">
          <h2>Our Core Values</h2>
          <div className="underline"></div>
          <p className="section-intro">
            These fundamental values shape our approach to legal practice and guide us in delivering 
            exceptional service to our clients.
          </p>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <div className="value-content">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <ul className="value-points">
                    {value.points.map((point, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-expertise">
        <div className="content-container">
          <h2>Our Expertise</h2>
          <div className="underline"></div>
          <p className="section-intro">
            Our values are reinforced by our extensive expertise and comprehensive legal services 
            across multiple jurisdictions.
          </p>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-cta">
        <div className="content-container">
          <div className="cta-content">
            <h2>Experience Our Values in Action</h2>
            <p>
              Let us demonstrate how our values and expertise combine to deliver exceptional 
              legal services and positive outcomes for our clients.
            </p>
            <button className="cta-button">
              Contact Us Today
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurValues;