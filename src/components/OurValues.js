import '../styles/OurValues.css';

function OurValues() {
  const values = [
    {
      icon: "fas fa-balance-scale",
      title: "Professional Excellence",
      description: "We maintain the highest standards of professional ethics and legal expertise in all our services.",
      points: [
        "Commitment to quality service",
        "Continuous professional development",
        "Result-oriented approach",
        "Industry best practices"
      ]
    },
    {
      icon: "fas fa-handshake",
      title: "Client-Centric Focus",
      description: "Our clients' success is our priority. We provide personalized attention and practical legal solutions.",
      points: [
        "Personalized attention",
        "Transparent communication",
        "Timely responsiveness",
        "Cost-effective solutions"
      ]
    },
    {
      icon: "fas fa-shield-halved",
      title: "Integrity & Trust",
      description: "We uphold the highest standards of integrity in our practice and build lasting relationships based on trust.",
      points: [
        "Ethical practices",
        "Transparent dealings",
        "Confidentiality",
        "Trust-based relationships"
      ]
    },
    {
      icon: "fas fa-scale-unbalanced-flip",
      title: "Legal Innovation",
      description: "We combine traditional legal wisdom with innovative approaches to address modern legal challenges.",
      points: [
        "Modern legal solutions",
        "Technology integration",
        "Creative problem-solving",
        "Adaptive strategies"
      ]
    }
  ];

  return (
    <section className="our-values">
      <div className="values-content">
        <div className="section-header">
          <span className="subtitle">Our Core Values</span>
          <h2>What Drives Us</h2>
          <div className="underline"></div>
          <p className="section-description">
            Our values form the foundation of our practice and guide us in delivering excellence in legal services.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon-wrapper">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <div className="icon-ring"></div>
              </div>
              
              <div className="value-content">
                <h3>{value.title}</h3>
                <p className="value-description">{value.description}</p>
                
                <ul className="value-points">
                  {value.points.map((point, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="values-footer">
          <div className="commitment-statement">
            <h4>Our Commitment to Excellence</h4>
            <p>
              At Hashmi Law Associates, these values aren't just words - they're the principles that guide every aspect 
              of our practice. We are committed to maintaining the highest standards of legal service while fostering 
              trust and delivering results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurValues; 