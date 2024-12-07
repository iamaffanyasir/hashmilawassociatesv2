import '../styles/TeamStructure.css';

function TeamStructure() {
  const teams = [
    {
      title: "Trial Court Team",
      description: "Our trial court team handles cases at district courts and trial courts across various jurisdictions.",
      responsibilities: [
        "Civil & Criminal Litigation",
        "Property Disputes",
        "Family Law Matters",
        "Consumer Cases",
        "Recovery Suits"
      ]
    },
    {
      title: "High Court Team",
      description: "Specialized team managing litigation at various High Courts across India.",
      responsibilities: [
        "Constitutional Matters",
        "Writ Petitions",
        "Commercial Appeals",
        "Arbitration Matters",
        "Regulatory Disputes"
      ]
    },
    {
      title: "Supreme Court Team",
      description: "Expert advocates representing cases at the Supreme Court of India.",
      responsibilities: [
        "Constitutional Law",
        "Corporate Appeals",
        "Public Interest Litigation",
        "Special Leave Petitions",
        "Complex Litigation"
      ]
    }
  ];

  return (
    <section className="team-structure">
      <div className="section-header">
        <span className="subtitle">Our Structure</span>
        <h2>Team Structure</h2>
        <div className="underline"></div>
        <p className="section-description">
          Our legal team is strategically structured to provide specialized expertise across different courts and practice areas.
        </p>
      </div>

      <div className="structure-grid">
        {teams.map((team, index) => (
          <div key={index} className="structure-section">
            <h3>{team.title}</h3>
            <p>{team.description}</p>
            <ul className="responsibilities-list">
              {team.responsibilities.map((item, idx) => (
                <li key={idx}>
                  <i className="fas fa-check"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamStructure; 