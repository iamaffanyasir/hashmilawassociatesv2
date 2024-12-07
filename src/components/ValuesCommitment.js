import '../styles/ValuesCommitment.css';

function ValuesCommitment() {
  const commitments = [
    {
      title: "Client Trust",
      description: "Building lasting relationships through trust and transparency in all our dealings.",
      icon: "fas fa-handshake"
    },
    {
      title: "Professional Growth",
      description: "Continuous learning and development to stay ahead of legal developments.",
      icon: "fas fa-chart-line"
    },
    {
      title: "Social Responsibility",
      description: "Contributing to society through ethical legal practice and community service.",
      icon: "fas fa-heart"
    }
  ];

  return (
    <section className="values-commitment">
      <div className="section-header">
        <span className="subtitle">Our Commitment</span>
        <h2>Our Commitment to Excellence</h2>
        <div className="underline"></div>
        <p className="section-description">
          We are committed to maintaining the highest standards of legal practice while serving our clients with dedication and integrity.
        </p>
      </div>

      <div className="commitment-grid">
        {commitments.map((commitment, index) => (
          <div key={index} className="commitment-card">
            <div className="commitment-icon">
              <i className={commitment.icon}></i>
            </div>
            <h3>{commitment.title}</h3>
            <p>{commitment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValuesCommitment; 