import '../styles/Retainership.css';
import hero1 from '../images/hero1.jpg';

function Retainership() {
  return (
    <div className="retainership-page">
      <section 
        className="retainership-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="retainership-hero-content">
          <h1>Retainership Programme</h1>
          <p>Delivering Excellence in Legal Services</p>
        </div>
      </section>

      <section className="retainership-definition">
        <div className="content-container">
          <div className="section-content">
            <h2>What is Retainership?</h2>
            <div className="underline"></div>
            <p>
              A "retainer" refers to an individual or firm retained by a company or organization to provide expert advice on complex matters such as 
              labor laws, provident fund issues, arbitration, civil and criminal cases, or intellectual property matters etc. Unlike regular employees, 
              retainers are not required to maintain daily attendance or adhere to fixed working hours. Instead, they charge a retainer fee for their 
              services.
            </p>
            <p>
              A retainership contract involves hiring employees on a retainer basis. Since there are no fixed office hours in such contracts, statutory 
              employment requirements like provident fund contributions, Employee State Insurance Corporation (ESIC) benefits, bonuses, gratuity, 
              etc., do not apply to individuals or their firms.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-precedents">
        <div className="content-container">
          <div className="section-content">
            <h2>Legal Precedents</h2>
            <div className="underline"></div>
            <div className="case-study">
              <h3>Rohit Narayan v. Union of India (2007) 3 SCC 55:</h3>
              <p>
                In this case, the Supreme Court of India emphasized the importance of clear and written retainership agreements between clients and 
                lawyers. The court held that a written agreement helps establish the terms of the engagement, including fees, and reduces the likelihood 
                of disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-expertise">
        <div className="content-container">
          <div className="section-content">
            <h2>Our Legal Services</h2>
            <div className="underline"></div>
            
            <div className="services-category">
              <h3>1. Legal Services for Non-Contentious Matters:</h3>
              <ul>
                <li>Crafting and scrutinizing agreements and contracts</li>
                <li>Orchestration of seamless transactional endeavors</li>
                <li>Legal insights and advisory opinions</li>
                <li>Registration of intellectual property rights</li>
              </ul>
            </div>

            <div className="services-category">
              <h3>2. Legal Services for Contentious Matters:</h3>
              <ul>
                <li>Courtroom representation and litigation</li>
                <li>Advocacy before judicial and quasi-judicial bodies</li>
                <li>Legal defense crafting</li>
                <li>Presentation of compelling legal arguments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="content-container">
          <div className="section-content">
            <h2>Benefits of Our Retainership</h2>
            <div className="underline"></div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Assured Legal Support</h3>
                <p>Steadfast access to reliable legal counsel and representation at your disposal.</p>
              </div>
              <div className="benefit-card">
                <h3>Custom-Tailored Expertise</h3>
                <p>Holistic comprehension of your business's intricate challenges.</p>
              </div>
              <div className="benefit-card">
                <h3>Financial Prudence</h3>
                <p>Cost-effective alternative to maintaining an in-house legal team.</p>
              </div>
              <div className="benefit-card">
                <h3>Professional Indemnity</h3>
                <p>Counsel fortified by professional indemnity insurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="content-container">
          <div className="section-content">
            <h2>Our Clients</h2>
            <div className="underline"></div>
            <div className="clients-grid">
              {/* List of clients from the text */}
              <div className="client-item">Urban Transit Pvt. Ltd.</div>
              <div className="client-item">Mumbai Mono & Metro Rail Project</div>
              <div className="client-item">Scomi Sdn. Bhd. (Malaysia)</div>
              {/* Add more clients */}
            </div>
          </div>
        </div>
      </section>

      <section className="package-section">
        <div className="content-container">
          <div className="section-content">
            <h2>Our Retainership Package</h2>
            <div className="underline"></div>
            <div className="package-details">
              <h3>Fixed Fee Retainer Package</h3>
              <p>Monthly Fee: Rs. 65,000/- (Plus applicable GST at 18%)</p>
              <div className="package-features">
                <h4>Package Includes:</h4>
                <ul>
                  <li>Unlimited Legal Support</li>
                  <li>Predictable Monthly Fee</li>
                  <li>Comprehensive Legal Services</li>
                  <li>Priority Access to Legal Expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Retainership; 