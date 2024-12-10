import '../styles/OurTeams.css';
import hero1 from '../images/hero1.jpg';

function OurTeams() {
  const teamStructure = [
    {
      title: "Trial Court Team",
      description: "Specialized advocates handling cases at district courts and trial courts.",
      expertise: [
        "Civil & Criminal Litigation",
        "Property Disputes",
        "Money Recovery",
        "Family Law Matters",
        "Consumer Cases",
        "Injunction Matters"
      ],
      icon: "fas fa-balance-scale"
    },
    {
      title: "High Court Team",
      description: "Expert advocates managing litigation at various High Courts.",
      expertise: [
        "Constitutional Matters",
        "Writ Petitions",
        "Civil & Criminal Appeals",
        "Arbitration Matters",
        "Company Law Cases",
        "Public Interest Litigation"
      ],
      icon: "fas fa-landmark"
    },
    {
      title: "Supreme Court Team",
      description: "Senior advocates representing cases at the Supreme Court of India.",
      expertise: [
        "Constitutional Law",
        "Special Leave Petitions",
        "Civil Appeals",
        "Criminal Appeals",
        "Review Petitions",
        "Complex Legal Matters"
      ],
      icon: "fas fa-gavel"
    },
    {
      title: "Back Office Team",
      description: "Supporting legal research and documentation.",
      expertise: [
        "Legal Research",
        "Documentation",
        "Case Management",
        "Client Coordination",
        "Administrative Support",
        "Compliance Management"
      ],
      icon: "fas fa-briefcase"
    }
  ];

  const specializedTeams = [
    {
      title: "Corporate Law Team",
      description: "Expert team handling corporate and commercial matters.",
      icon: "fas fa-building"
    },
    {
      title: "NGO Services Team",
      description: "Specialized team for NGO registration and compliance.",
      icon: "fas fa-hands-holding-heart"
    },
    {
      title: "Documentation Team",
      description: "Dedicated team for legal documentation and agreements.",
      icon: "fas fa-file-contract"
    }
  ];

  return (
    <div className="teams-page">
      <section 
        className="teams-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="teams-hero-content">
          <h1>Our Legal Teams</h1>
          <p>Expert Legal Teams Delivering Excellence Across Practice Areas</p>
        </div>
      </section>

      <section className="teams-intro">
        <div className="content-container">
          <div className="intro-text">
            <h2>Our Team Structure</h2>
            <div className="underline"></div>
            <p className="highlight">
              HLA has a versatile and efficient team of advocates/lawyers who are specially trained and have 
              experience in their specific area of law. Our team of advocates is divided into four tiers.
            </p>
            <p>
              We have a dedicated team of professionals such as corporate lawyers, company secretaries, 
              chartered accountants, Trade Mark Attorneys & Corporate Consultants with specific industry 
              expertise and works for collaboration with renowned Consultancy Firms, Law Firms & various 
              professionals across the country.
            </p>
          </div>
        </div>
      </section>

      <section className="team-structure">
        <div className="content-container">
          <h2>Our Legal Teams</h2>
          <div className="underline"></div>
          <p className="section-intro">
            Our multi-tiered team structure ensures specialized expertise and focused attention for every case.
          </p>
          <div className="teams-grid">
            {teamStructure.map((team, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">
                  <i className={team.icon}></i>
                </div>
                <div className="team-content">
                  <h3>{team.title}</h3>
                  <p>{team.description}</p>
                  <div className="expertise-list">
                    <h4>Key Areas of Focus:</h4>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="specialized-teams">
        <div className="content-container">
          <h2>Specialized Practice Teams</h2>
          <div className="underline"></div>
          <p className="section-intro">
            In addition to our core legal teams, we have specialized teams focusing on specific practice areas.
          </p>
          <div className="specialized-grid">
            {specializedTeams.map((team, index) => (
              <div key={index} className="specialized-card">
                <div className="specialized-icon">
                  <i className={team.icon}></i>
                </div>
                <h3>{team.title}</h3>
                <p>{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="content-container">
          <div className="cta-content">
            <h2>Work With Our Expert Teams</h2>
            <p>
              Let our experienced legal teams help you navigate complex legal challenges 
              and achieve your objectives.
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

export default OurTeams; 