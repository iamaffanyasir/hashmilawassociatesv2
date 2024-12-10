import '../styles/Internship.css';
import hero1 from '../images/hero1.jpg';

function Internship() {
  const internshipDetails = [
    {
      title: "Learning Opportunities",
      description: "Gain hands-on experience in various aspects of legal practice",
      icon: "fas fa-graduation-cap"
    },
    {
      title: "Mentorship",
      description: "Work directly with experienced lawyers and legal professionals",
      icon: "fas fa-user-tie"
    },
    {
      title: "Duration",
      description: "Flexible internship duration from 1 to 6 months",
      icon: "fas fa-calendar-alt"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="internship-page">
      <section 
        className="internship-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="internship-hero-content">
          <h1>Legal Internship Program</h1>
          <p>Join our team and gain valuable experience in legal practice</p>
        </div>
      </section>

      <section className="internship-intro">
        <div className="content-container">
          <div className="intro-text">
            <h2>About Our Internship Program</h2>
            <div className="underline"></div>
            <p className="highlight">
              We offer comprehensive internship opportunities for law students to gain practical 
              experience in various areas of legal practice.
            </p>
            <p>
              Our internship program is designed to provide hands-on experience in legal research, 
              documentation, case management, and court proceedings. Interns work closely with our 
              experienced lawyers across different practice areas.
            </p>
          </div>
          <div className="features-grid">
            {internshipDetails.map((detail, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={detail.icon}></i>
                </div>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="application-section">
        <div className="content-container">
          <div className="application-grid">
            <div className="application-form-container">
              <h2>Apply for Internship</h2>
              <div className="underline"></div>
              <p className="form-intro">
                Fill out the form below to apply for our internship program.
              </p>
              <form onSubmit={handleSubmit} className="application-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="university">University/College</label>
                  <input 
                    type="text" 
                    id="university" 
                    name="university" 
                    required 
                    placeholder="Enter your university name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="year">Year of Study</label>
                  <select id="year" name="year" required>
                    <option value="">Select year of study</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Preferred Duration</label>
                  <select id="duration" name="duration" required>
                    <option value="">Select duration</option>
                    <option value="1">1 Month</option>
                    <option value="2">2 Months</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="resume">Resume (PDF)</label>
                  <input 
                    type="file" 
                    id="resume" 
                    name="resume" 
                    accept=".pdf" 
                    required 
                    className="file-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Why do you want to intern with us?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Tell us about your interest and expectations"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Submit Application
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>

            <div className="requirements-container">
              <h2>Requirements & Eligibility</h2>
              <div className="underline"></div>
              <ul className="requirements-list">
                <li>
                  <i className="fas fa-check"></i>
                  <span>Must be a law student in 3rd year or above</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Strong academic background</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Good research and writing skills</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Proficiency in English</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Ability to work in a team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Internship; 