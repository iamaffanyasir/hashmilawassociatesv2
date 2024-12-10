import '../styles/OurPractices.css';

function OurPractices() {
  const practices = [
    {
      title: "Civil Law Practice",
      icon: "fas fa-scale-balanced",
      description: "Comprehensive legal services in civil litigation, property disputes, and commercial matters.",
      services: [
        "Property & Estate Matters",
        "Money Recovery Suits",
        "Injunction Matters",
        "Contract Disputes",
        "Commercial Litigation",
        "Succession & Probate"
      ]
    },
    {
      title: "Criminal Law Practice",
      icon: "fas fa-gavel",
      description: "Expert handling of criminal matters from investigation to trial and appeals.",
      services: [
        "Criminal Trials & Appeals",
        "White Collar Crimes",
        "Economic Offenses",
        "Criminal Writs",
        "Bail Matters",
        "NDPS Cases"
      ]
    },
    {
      title: "Corporate Law",
      icon: "fas fa-building",
      description: "End-to-end corporate legal solutions for businesses and organizations.",
      services: [
        "Company Formation",
        "Corporate Compliance",
        "Mergers & Acquisitions",
        "NCLT Matters",
        "Due Diligence",
        "Business Agreements"
      ]
    },
    {
      title: "Family Law",
      icon: "fas fa-users",
      description: "Sensitive handling of family matters with expertise and compassion.",
      services: [
        "Divorce Proceedings",
        "Child Custody",
        "Maintenance Cases",
        "Domestic Violence",
        "Marriage Registration",
        "Property Division"
      ]
    },
    {
      title: "NGO & Trust Services",
      icon: "fas fa-hands-holding-heart",
      description: "Specialized services for non-profit organizations and trusts.",
      services: [
        "NGO Registration",
        "FCRA Registration",
        "12A & 80G Registration",
        "Trust Formation",
        "Legal Compliance",
        "Annual Filings"
      ]
    },
    {
      title: "Intellectual Property",
      icon: "fas fa-lightbulb",
      description: "Protection and enforcement of intellectual property rights.",
      services: [
        "Trademark Registration",
        "Copyright Protection",
        "Patent Filing",
        "IP Litigation",
        "Brand Protection",
        "IP Due Diligence"
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
            Comprehensive legal services across diverse practice areas, delivered with expertise and professional excellence.
          </p>
        </div>

        <div className="practices-grid">
          {practices.map((practice, index) => (
            <div key={index} className="practice-card">
              <div className="practice-header">
                <div className="practice-icon">
                  <i className={practice.icon}></i>
                </div>
                <h3>{practice.title}</h3>
              </div>
              
              <p className="practice-description">{practice.description}</p>
              
              <div className="services-list">
                {practice.services.map((service, idx) => (
                  <div key={idx} className="service-item">
                    <i className="fas fa-check"></i>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              
              <button className="learn-more">
                Learn More
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPractices; 