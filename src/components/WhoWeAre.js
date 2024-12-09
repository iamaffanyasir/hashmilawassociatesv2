import '../styles/WhoWeAre.css';

function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="who-we-are-content">
        <div className="section-header">
          <span className="subtitle">Welcome to Hashmi Law Associates Pvt. Ltd.</span>
          <h2>Who We Are</h2>
          <div className="underline"></div>
        </div>
        
        <div className="content-grid">
          <div className="main-content">
            <div className="intro-text">
              <p className="highlight">
                We are a New Delhi-based fully independent Commercial Litigation Law Firm dedicated to Legal Services for domestic and international clients, which include individual, multinational, public, and private companies and other corporate entities, across the country.
              </p>
              <p className="sub-highlight">
                Our team believes that in the context of present world economic order, the legal profession plays a more valuable and constructive role than ever before.
              </p>
            </div>
            
            <div className="features">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <div className="feature-content">
                  <h3>Legal Excellence</h3>
                  <p>Our team strives for legal excellence as well as appreciates the commercial and corporate environment in which its clients operate.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="feature-content">
                  <h3>Expert Team</h3>
                  <p>HLA has a versatile and efficient team of advocates/lawyers who are specially trained and have experience in their specific area of law.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="feature-content">
                  <h3>Professional Network</h3>
                  <p>We collaborate with renowned Consultancy Firms, Law Firms & various professionals across the country to provide comprehensive legal services.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="side-content">
            <div className="expertise-box">
              <h3>Our Expertise</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Trial Court Expertise</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>High Court Litigation</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Supreme Court Practice</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Corporate Legal Services</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>NGO & Trust Services</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Documentation Services</span>
                </li>
              </ul>
            </div>

            <div className="expertise-box">
              <h3>Courts We Serve</h3>
              <ul>
                <li>
                  <i className="fas fa-gavel"></i>
                  <span>Supreme Court of India</span>
                </li>
                <li>
                  <i className="fas fa-gavel"></i>
                  <span>Delhi High Court</span>
                </li>
                <li>
                  <i className="fas fa-gavel"></i>
                  <span>National Company Law Tribunal</span>
                </li>
                <li>
                  <i className="fas fa-gavel"></i>
                  <span>Consumer Forums</span>
                </li>
                <li>
                  <i className="fas fa-gavel"></i>
                  <span>Debt Recovery Tribunal</span>
                </li>
                <li>
                  <i className="fas fa-gavel"></i>
                  <span>Arbitration Tribunals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre; 