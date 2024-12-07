import '../styles/TeamMembers.css';

function TeamMembers() {
  const teamMembers = [
    {
      name: "Adil Hashmi",
      position: "Managing Partner",
      expertise: "Corporate & Commercial Law",
      experience: "15+ years of experience",
      education: "LL.B., University of Delhi",
      image: "/images/team/adil-hashmi.jpg"
    },
    {
      name: "Sarah Khan",
      position: "Senior Associate",
      expertise: "Civil Litigation",
      experience: "10+ years of experience",
      education: "LL.M., National Law University",
      image: "/images/team/sarah-khan.jpg"
    },
    {
      name: "Rajesh Kumar",
      position: "Senior Counsel",
      expertise: "Constitutional Law",
      experience: "12+ years of experience",
      education: "LL.B., Faculty of Law, DU",
      image: "/images/team/rajesh-kumar.jpg"
    }
  ];

  return (
    <section className="team-members">
      <div className="section-header">
        <span className="subtitle">Meet Our Team</span>
        <h2>Legal Experts</h2>
        <div className="underline"></div>
        <p className="section-description">
          Our team consists of experienced advocates and legal professionals with diverse expertise across various practice areas.
        </p>
      </div>

      <div className="members-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <div className="member-details">
                <p><strong>Expertise:</strong> {member.expertise}</p>
                <p><strong>Experience:</strong> {member.experience}</p>
                <p><strong>Education:</strong> {member.education}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMembers; 