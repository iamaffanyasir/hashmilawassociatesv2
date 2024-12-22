import '../styles/AboutUs.css';
import hero1 from '../images/hero1.jpg';
import { useEffect } from 'react';

function AboutUs() {
  useEffect(() => {
    document.body.style.overflow = 'unset';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const milestones = [
    {
      year: "15+",
      title: "Years of Experience",
      description: "Providing comprehensive legal services across India with expertise and dedication"
    },
    {
      year: "4",
      title: "Specialized Teams",
      description: "Dedicated teams for Trial Courts, High Courts, Supreme Court, and Corporate Law"
    },
    {
      year: "Pan India",
      title: "Professional Network",
      description: "Extensive network of legal professionals and consultants across the country"
    }
  ];

  const expertise = [
    {
      title: "Legal Excellence",
      description: "Our team strives for legal excellence while appreciating the commercial and corporate environment in which our clients operate.",
      icon: "fas fa-scale-balanced"
    },
    {
      title: "Professional Network",
      description: "We collaborate with renowned Consultancy Firms, Law Firms & various professionals across the country to provide comprehensive legal services.",
      icon: "fas fa-handshake"
    },
    {
      title: "Comprehensive Services",
      description: "From litigation to corporate advisory, we provide end-to-end legal solutions across diverse practice areas including civil, criminal, and corporate law.",
      icon: "fas fa-briefcase"
    }
  ];

  return (
    <div className="about-page">
      <section 
        className="about-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="about-hero-content">
          <div className="hero-text">
            <h1>About Hashmi Law Associates</h1>
            <p>A New Delhi-based fully independent Commercial Litigation Law Firm dedicated to excellence in legal services</p>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="content-container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Our Journey</h2>
              <div className="underline"></div>
              <p className="highlight">
                We are a Law Firm Registered under the Companies Act 2013 and have our Registered Office in New Delhi. 
                Our team of practicing advocates from Delhi High Courts & Supreme Court of India provides comprehensive 
                legal services to domestic and international clients.
              </p>
              <p>
                Our team believes that in the context of present world economic order, the legal profession plays a more 
                valuable and constructive role than ever before. The changes in the economic climate in the world, especially 
                in India, have brought about a change in the traditional role of the lawyer. Today, lawyers are more engaged 
                in international business and finance procedures than ever before.
              </p>
              <p>
                The need for professional services has emerged to address the complex issues of international trade and 
                International corporate matters, especially with the growth in e-commerce. Thus our team of lawyers strives 
                for legal excellence as well as appreciates the commercial and corporate environment in which its clients operate.
              </p>
            </div>
            <div className="milestones">
              {milestones.map((milestone, index) => (
                <div key={index} className="milestone-card">
                  <div className="milestone-header">
                    <h3>{milestone.year}</h3>
                    <h4>{milestone.title}</h4>
                  </div>
                  <p>{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="our-expertise">
        <div className="content-container">
          <div className="section-header">
            <h2>Our Expertise</h2>
            <div className="underline"></div>
            <p className="section-intro">
              We have a special team of lawyers/advocates who operates exclusively in litigation at various stages from 
              the institution of the case, its pleadings, evidence, investigation, trial, revision, appellate, etc. in 
              diverse areas of law.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="expertise-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-structure">
        <div className="content-container">
          <div className="section-header">
            <h2>Our Team Structure</h2>
            <div className="underline"></div>
            <p className="section-intro">
              Our multi-tiered team structure ensures specialized expertise and focused attention for every case, 
              combining experience with efficiency to deliver exceptional legal services.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-info">
              <div className="team-description">
                <p>
                  HLA has a versatile and efficient team of advocates/lawyers who are specially trained and have 
                  experience in their specific areas of law. Our team structure is designed to provide comprehensive 
                  legal support at every level of the judicial system.
                </p>
              </div>
              <div className="team-tiers">
                <div className="tier-card">
                  <div className="tier-header">
                    <i className="fas fa-balance-scale"></i>
                    <h4>Trial Court Team</h4>
                  </div>
                  <ul className="tier-features">
                    <li>Specialized in district courts and trial courts</li>
                    <li>Handling civil and criminal litigation</li>
                    <li>Expert in procedural law and evidence</li>
                    <li>Focus on trial advocacy and case preparation</li>
                  </ul>
                </div>

                <div className="tier-card">
                  <div className="tier-header">
                    <i className="fas fa-landmark"></i>
                    <h4>High Court Team</h4>
                  </div>
                  <ul className="tier-features">
                    <li>Expert advocates for appellate litigation</li>
                    <li>Constitutional and administrative law matters</li>
                    <li>Writ jurisdiction cases</li>
                    <li>Regulatory and compliance matters</li>
                  </ul>
                </div>

                <div className="tier-card">
                  <div className="tier-header">
                    <i className="fas fa-gavel"></i>
                    <h4>Supreme Court Team</h4>
                  </div>
                  <ul className="tier-features">
                    <li>Senior advocates with extensive experience</li>
                    <li>Constitutional and significant legal matters</li>
                    <li>Special Leave Petitions</li>
                    <li>Complex multi-jurisdictional cases</li>
                  </ul>
                </div>

                <div className="tier-card">
                  <div className="tier-header">
                    <i className="fas fa-briefcase"></i>
                    <h4>Back Office Team</h4>
                  </div>
                  <ul className="tier-features">
                    <li>Legal research and documentation</li>
                    <li>Case strategy and analysis</li>
                    <li>Client coordination and support</li>
                    <li>Administrative and operational support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;