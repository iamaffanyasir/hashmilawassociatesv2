import '../styles/OurPractices.css';

function OurPractices() {
  const practices = [
    {
      title: "Civil Law Practice",
      icon: "fas fa-scale-balanced",
      description: "Comprehensive legal services including money recovery, property disputes, suits for specific performance, injunctions, and civil litigation across all courts in India.",
      services: [
        "Property & Estate Matters",
        "Recovery Disputes",
        "Injunction Matters",
        "Succession & Probate",
        "Partition Suits"
      ]
    },
    {
      title: "Criminal Law Practice",
      icon: "fas fa-gavel",
      description: "Expert handling of criminal matters including criminal breach of trust, economic offenses, and various criminal proceedings at all levels of courts.",
      services: [
        "Criminal Litigation",
        "Economic Offenses",
        "Criminal Appeals",
        "Bail Matters",
        "NDPS Cases"
      ]
    },
    {
      title: "Corporate Law",
      icon: "fas fa-building",
      description: "Specialized services for corporate entities including company registration, compliance, mergers & acquisitions, and corporate litigation.",
      services: [
        "Company Registration",
        "Corporate Compliance",
        "NCLT Matters",
        "Business Agreements",
        "Legal Due Diligence"
      ]
    },
    {
      title: "NGO & Trust Services",
      icon: "fas fa-hands-holding-heart",
      description: "Complete consultancy services for NGO registration, funding, legal compliance, and operational management across India.",
      services: [
        "NGO Registration",
        "FCRA Registration",
        "12A & 80G Registration",
        "Trust Formation",
        "Compliance Management"
      ]
    }
  ];

  return (
    <section className="our-practices">
      <div className="practices-content">
        <div className="section-header">
          <span className="subtitle">Areas of Practice</span>
          <h2>Our Practice Areas</h2>
          <div className="underline"></div>
          <p className="section-description">
            We provide litigation services under diverse areas of law before various courts, tribunals, and forums across India.
          </p>
        </div>

        <div className="practices-grid">
          {practices.map((practice, index) => (
            <div key={index} className="practice-card">
              <div className="practice-icon">
                <i className={practice.icon}></i>
              </div>
              <div className="practice-content">
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
                <ul className="services-list">
                  {practice.services.map((service, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      {service}
                    </li>
                  ))}
                </ul>
                <button className="learn-more">
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <div className="info-box">
            <h3>Our Court Presence</h3>
            <div className="courts-grid">
              <div className="court-item">
                <i className="fas fa-landmark"></i>
                <span>Supreme Court</span>
              </div>
              <div className="court-item">
                <i className="fas fa-building-columns"></i>
                <span>High Courts</span>
              </div>
              <div className="court-item">
                <i className="fas fa-scale-balanced"></i>
                <span>District Courts</span>
              </div>
              <div className="court-item">
                <i className="fas fa-gavel"></i>
                <span>Tribunals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPractices; 