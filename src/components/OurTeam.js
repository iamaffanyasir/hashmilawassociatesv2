import '../styles/OurTeam.css';

function OurTeam() {
  const teams = [
    {
      title: "Trial Court Team",
      description: "Specialized advocates handling cases at district courts and trial courts.",
      expertise: [
        "Civil & Criminal Litigation",
        "Property Disputes",
        "Commercial Matters",
        "Family Law Cases",
        "Consumer Disputes",
        "Recovery Suits"
      ],
      icon: "fas fa-balance-scale"
    },
    {
      title: "High Court Team",
      description: "Expert lawyers managing litigation at various High Courts across India.",
      expertise: [
        "Constitutional Matters",
        "Writ Petitions",
        "Commercial Appeals",
        "Arbitration Matters",
        "Company Law Cases",
        "Regulatory Disputes"
      ],
      icon: "fas fa-landmark"
    },
    {
      title: "Supreme Court Team",
      description: "Senior advocates representing cases at the Supreme Court of India.",
      expertise: [
        "Constitutional Law",
        "Corporate Appeals",
        "Public Interest Litigation",
        "Special Leave Petitions",
        "Regulatory Matters",
        "Complex Litigation"
      ],
      icon: "fas fa-gavel"
    },
    {
      title: "Corporate Legal Team",
      description: "Specialists in corporate law, compliance, and business transactions.",
      expertise: [
        "Corporate Advisory",
        "Due Diligence",
        "Contract Management",
        "Regulatory Compliance",
        "Mergers & Acquisitions",
        "Corporate Restructuring"
      ],
      icon: "fas fa-building"
    }
  ];

  return (
    <section className="our-team">
      <div className="team-content">
        <div className="section-header">
          <span className="subtitle">Our Legal Teams</span>
          <h2>Expert Legal Teams</h2>
          <div className="underline"></div>
          <p className="section-description">
            Our team of advocates is strategically divided into specialized groups to provide focused expertise across different courts and practice areas, ensuring comprehensive legal solutions for our clients.
          </p>
        </div>

        <div className="teams-grid">
          {teams.map((team, index) => (
            <div key={index} className="team-section">
              <div className="team-header">
                <div className="team-icon">
                  <i className={team.icon}></i>
                </div>
                <div className="team-title">
                  <h3>{team.title}</h3>
                  <p>{team.description}</p>
                </div>
              </div>
              <div className="expertise-area">
                <ul>
                  {team.expertise.map((item, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      <span>{item}</span>
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

export default OurTeam; 