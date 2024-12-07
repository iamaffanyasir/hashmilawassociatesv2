import '../styles/AboutHero.css';

function AboutHero() {
  return (
    <section 
      className="about-hero" 
      style={{
        backgroundImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.8) 50%,
          rgba(0, 0, 0, 0.6) 100%
        ),
        url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="about-hero-content">
        <div className="hero-text">
          <span className="subtitle">About Us</span>
          <h1>Excellence in Legal Services</h1>
          <p>A New Delhi-based fully independent Commercial Litigation Law Firm dedicated to providing comprehensive legal services across India.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;