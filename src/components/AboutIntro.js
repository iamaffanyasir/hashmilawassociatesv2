import '../styles/AboutIntro.css';  // Make sure this is imported

function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="about-intro-content">
        <div className="section-header">
          <span className="subtitle">Our Story</span>
          <h2>Who We Are</h2>
          <div className="underline"></div>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <p className="highlight">
              We are a team of dedicated legal professionals providing comprehensive services to domestic and international clients, including individuals, multinational corporations, and public & private companies across India.
            </p>
            
            <div className="info-blocks">
              <div className="info-block">
                <h3>Our Mission</h3>
                <p>To provide excellent legal services while maintaining the highest standards of professional ethics and integrity. We strive to offer practical solutions to complex legal challenges faced by our clients.</p>
              </div>
              
              <div className="info-block">
                <h3>Our Approach</h3>
                <p>We believe that in the context of present world economic order, the legal profession plays a more valuable and constructive role than ever before. Our team strives for legal excellence while appreciating the commercial environment.</p>
              </div>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Successful Cases</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Legal Experts</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Office Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro; 