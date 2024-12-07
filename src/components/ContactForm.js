import { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    caseType: '',
    preferredTime: '',
    message: ''
  });

  const caseTypes = [
    'Civil Law',
    'Criminal Law',
    'Corporate Law',
    'Family Law',
    'Property Law',
    'Other'
  ];

  const timeSlots = [
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-form">
      <div className="section-header">
        <span className="subtitle">Get in Touch</span>
        <h2>Schedule a Consultation</h2>
        <div className="underline"></div>
        <p className="section-description">
          Fill out the form below to schedule a consultation with our legal experts. We'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Brief subject of your inquiry"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="caseType">Case Type *</label>
            <select
              id="caseType"
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
              required
            >
              <option value="">Select case type</option>
              {caseTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="preferredTime">Preferred Time Slot</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            >
              <option value="">Select preferred time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your case briefly"
              required
              rows="6"
            ></textarea>
          </div>
        </div>

        <div className="form-footer">
          <p className="required-note">* Required fields</p>
          <button type="submit" className="submit-button">
            Send Message
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm; 