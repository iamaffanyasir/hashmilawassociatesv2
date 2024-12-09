import { useState } from 'react';
import '../styles/InternshipPage.css';

function InternshipPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    course: '',
    year: '',
    duration: '',
    startDate: '',
    resume: null,
    coverLetter: '',
    areaOfInterest: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('Please upload a PDF file');
      e.target.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const benefits = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Learning & Development',
      description: 'Gain practical experience under the guidance of experienced lawyers'
    },
    {
      icon: 'fas fa-users',
      title: 'Mentorship',
      description: 'One-on-one mentoring from senior associates and partners'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Real Case Experience',
      description: 'Work on actual cases and contribute to legal research'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certification',
      description: 'Receive a detailed internship completion certificate'
    }
  ];

  const areasOfInterest = [
    'Civil Litigation',
    'Criminal Law',
    'Corporate Law',
    'Family Law',
    'Real Estate Law',
    'Intellectual Property',
    'Constitutional Law',
    'Banking & Finance'
  ];

  return (
    <div className="internship-page">
      <section className="internship-hero">
        <div className="hero-content">
          <span className="hero-subtitle">Join Our Team</span>
          <h1>Legal Internship Program</h1>
          <p>Join one of India's leading law firms and gain valuable experience in various aspects of legal practice</p>
        </div>
      </section>

      <section className="benefits-section">
        <div className="content-container">
          <h2>Why Choose Our Internship Program?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <i className={benefit.icon}></i>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="internship-content">
        <div className="content-container">
          <div className="info-section">
            <h2>Program Overview</h2>
            <p>Our internship program is designed to provide law students with practical exposure to various aspects of legal practice. You'll work closely with our experienced team on real cases while developing essential legal skills.</p>
            
            <div className="eligibility-box">
              <h3>Eligibility Criteria</h3>
              <ul>
                <li>Currently enrolled in a recognized law program</li>
                <li>Strong academic record</li>
                <li>Excellent research and writing skills</li>
                <li>Good communication abilities</li>
                <li>Keen interest in litigation practice</li>
              </ul>
            </div>

            <div className="program-features">
              <h3>What You'll Learn</h3>
              <ul>
                <li>Legal Research and Writing</li>
                <li>Court Procedures and Documentation</li>
                <li>Client Consultation Skills</li>
                <li>Case Strategy Development</li>
                <li>Legal Technology Tools</li>
              </ul>
            </div>
          </div>

          <div className="application-form">
            <h2>Apply Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="university">University/College</label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="course">Course</label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="year">Current Year</label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="areaOfInterest">Area of Interest</label>
                  <select
                    id="areaOfInterest"
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Area</option>
                    {areasOfInterest.map((area, index) => (
                      <option key={index} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="duration">Internship Duration</label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Duration</option>
                    <option value="1">1 Month</option>
                    <option value="2">2 Months</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="startDate">Preferred Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group file-input">
                <label htmlFor="resume">Resume</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                />
                <span className="file-format">Accepted format: PDF only (Max size: 5MB)</span>
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  placeholder="Tell us why you'd be a great fit for this internship..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InternshipPage; 