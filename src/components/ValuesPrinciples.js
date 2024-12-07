import '../styles/ValuesPrinciples.css';

function ValuesPrinciples() {
  const principles = [
    {
      title: "Professional Excellence",
      description: "We maintain the highest standards of professional ethics and legal expertise in all our services.",
      points: [
        "Commitment to continuous learning and improvement",
        "Adherence to professional standards",
        "Focus on quality service delivery",
        "Expert legal counsel"
      ],
      icon: "fas fa-star"
    },
    {
      title: "Client-Centric Approach",
      description: "Our clients' interests are at the heart of everything we do.",
      points: [
        "Personalized attention to each case",
        "Clear and regular communication",
        "Result-oriented solutions",
        "Timely service delivery"
      ],
      icon: "fas fa-users"
    },
    {
      title: "Ethical Practice",
      description: "Upholding the highest standards of legal ethics and integrity.",
      points: [
        "Transparent dealings",
        "Honest communication",
        "Ethical decision making",
        "Trust building"
      ],
      icon: "fas fa-balance-scale"
    }
  ];

  return (
    <section className="values-principles">
      <div className="section-header">
        <span className="subtitle">Our Principles</span>
        <h2>Guiding Principles</h2>
        <div className="underline"></div>
        <p className="section-description">
          Our core values reflect our commitment to excellence, integrity, and client satisfaction in every aspect of our legal practice.
        </p>
      </div>

      <div className="principles-grid">
        {principles.map((principle, index) => (
          <div key={index} className="principle-card">
            <div className="principle-icon">
              <i className={principle.icon}></i>
            </div>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
            <ul className="principle-points">
              {principle.points.map((point, idx) => (
                <li key={idx}>
                  <i className="fas fa-check"></i>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValuesPrinciples; 