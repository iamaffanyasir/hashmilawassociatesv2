import '../styles/Footer.css';

function Footer() {
  const footerSections = {
    'Practice Areas': {
      type: 'links',
      items: [
        'Civil Law Practice',
        'Criminal Law Practice',
        'Family & Divorce Law',
        'Corporate Law Practice',
        'Consumer & Competition Laws',
        'Cyber Laws',
        'Trade Mark & Copyright',
        'Bankruptcy & Insolvency',
        'NGO & Trust Services'
      ]
    },
    'Legal Services': {
      type: 'links',
      items: [
        'Legal Consultancy',
        'Commercial Contracts',
        'Registration & Incorporation',
        'Documentation Services',
        'Litigation Services',
        'Corporate Services',
        'NGO Registration',
        'FCRA Registration',
        'Trademark Registration'
      ]
    },
    'Courts We Serve': {
      type: 'links',
      items: [
        'Supreme Court of India',
        'Delhi High Court',
        'National Company Law Tribunal',
        'Consumer Forums',
        'Debt Recovery Tribunal',
        'Central Administrative Tribunal',
        'Competition Commission',
        'Arbitration Tribunals'
      ]
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-company">
            <h3>Hashmi Law Associates Pvt. Ltd.</h3>
            <p>A New Delhi-based fully independent Commercial Litigation Law Firm dedicated to providing comprehensive legal services for domestic and international clients.</p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <a href="tel:+911141040055">011-41040055</a>
                  <a href="tel:+918588895750">+91 8588895750</a>
                  <a href="tel:+919891224152">+91 9891224152 (WhatsApp)</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <a href="mailto:info@adalegal.co.in">info@adalegal.co.in</a>
                  <a href="mailto:hashmi.adil@adalegal.co.in">hashmi.adil@adalegal.co.in</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-location-dot"></i>
                <div>
                  <p>Old Lawyers Chamber, Supreme Court of India</p>
                  <p>New Delhi-110001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([title, section]) => (
            <div key={title} className="footer-section">
              <h4>{title}</h4>
              <ul>
                {section.items.map((item, index) => (
                  <li key={index}>
                    <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                      <i className="fas fa-chevron-right"></i>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-content">
          <div className="branch-offices">
            <h4>Branch Offices</h4>
            <div className="offices-grid">
              <div className="office-item">
                <h5>Delhi High Court</h5>
                <p>Bar Association, Sher Shah Road</p>
                <p>New Delhi-110053</p>
              </div>
              <div className="office-item">
                <h5>Patiala House Court</h5>
                <p>Bar Association</p>
                <p>New Delhi-110001</p>
              </div>
              <div className="office-item">
                <h5>Saket Court</h5>
                <p>Chamber No. 685, Lawyers Chamber</p>
                <p>New Delhi</p>
              </div>
              <div className="office-item">
                <h5>Jasola</h5>
                <p>229-A Pocket-12</p>
                <p>New Delhi-110025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-content">
          <div className="bottom-left">
            <p>&copy; {new Date().getFullYear()} Hashmi Law Associates Pvt. Ltd.. All rights reserved.</p>
            <p>Registered under the Companies Act 2013</p>
          </div>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
          <div className="bottom-right">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/disclaimer">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;