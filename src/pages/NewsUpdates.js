import '../styles/NewsUpdates.css';
import hero1 from '../images/hero1.jpg';

function NewsUpdates() {
  const newsItems = [
    {
      title: "Legal Excellence Award 2024",
      date: "March 15, 2024",
      category: "Awards",
      description: "Hashmi Law Associates recognized for outstanding legal services in corporate law.",
      image: hero1
    },
    {
      title: "New Corporate Law Guidelines",
      date: "March 10, 2024",
      category: "Legal Updates",
      description: "Important updates on corporate compliance and regulatory changes affecting businesses.",
      image: hero1
    },
    {
      title: "Expansion of Legal Services",
      date: "March 1, 2024",
      category: "Firm News",
      description: "HLA announces expansion of services in intellectual property and technology law.",
      image: hero1
    }
  ];

  return (
    <div className="news-page">
      <section 
        className="news-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="news-hero-content">
          <h1>News & Updates</h1>
          <p>Stay informed about our latest achievements, legal updates, and firm news</p>
        </div>
      </section>

      <section className="news-content">
        <div className="content-container">
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <div key={index} className="news-card">
                <div 
                  className="news-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="news-category">{item.category}</div>
                </div>
                <div className="news-details">
                  <div className="news-date">{item.date}</div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button className="read-more">
                    Read More
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="news-categories">
        <div className="content-container">
          <h2>Browse by Category</h2>
          <div className="category-grid">
            <div className="category-card">
              <i className="fas fa-gavel"></i>
              <h3>Legal Updates</h3>
              <p>Latest changes in law and regulations</p>
            </div>
            <div className="category-card">
              <i className="fas fa-trophy"></i>
              <h3>Awards & Recognition</h3>
              <p>Our achievements and accolades</p>
            </div>
            <div className="category-card">
              <i className="fas fa-building"></i>
              <h3>Firm News</h3>
              <p>Updates about our firm and team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsUpdates; 