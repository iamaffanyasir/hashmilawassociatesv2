import '../styles/OurValues.css';

function OurValues() {
  const values = [
    {
      icon: "fas fa-balance-scale",
      title: "Professional Excellence",
      description: "We maintain the highest standards of professional ethics and legal expertise in all our services. Our commitment to excellence drives every aspect of our practice.",
      points: [
        "Highest ethical standards",
        "Expert legal counsel",
        "Professional development",
        "Quality service delivery"
      ]
    },
    {
      icon: "fas fa-handshake",
      title: "Client Focus",
      description: "Our priority is understanding and meeting our clients' needs with practical legal solutions that address their specific challenges.",
      points: [
        "Personalized attention",
        "Timely responses",
        "Clear communication",
        "Result-oriented approach"
      ]
    },
    {
      icon: "fas fa-gavel",
      title: "Legal Integrity",
      description: "We uphold the highest standards of legal practice with unwavering integrity and transparency in all our client interactions.",
      points: [
        "Transparent dealings",
        "Ethical practices",
        "Honest communication",
        "Trust building"
      ]
    },
    {
      icon: "fas fa-users",
      title: "Team Collaboration",
      description: "Our multi-tiered team works together seamlessly to provide comprehensive legal solutions across all practice areas.",
      points: [
        "Integrated approach",
        "Knowledge sharing",
        "Cross-functional teams",
        "Collaborative solutions"
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
              <div className="value-icon">
                <i className={value.icon}></i>
              </div>
              <div className="value-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
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
      </div>
    </section>
  );
}

export default OurValues; 