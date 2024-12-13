import '../styles/Articles.css';
import hero1 from '../images/hero1.jpg';

function Articles() {
  const articles = [
    {
      title: "Understanding Corporate Legal Compliance in 2024",
      author: "Adv. Adil Hashmi",
      date: "March 15, 2024",
      category: "Corporate Law",
      excerpt: "A comprehensive guide to navigating corporate legal compliance requirements in India, including recent regulatory changes and their implications for businesses.",
      readTime: "8 min read",
      image: hero1
    },
    {
      title: "The Evolution of NGO Regulations in India",
      author: "Legal Team at HLA",
      date: "March 10, 2024",
      category: "NGO Law",
      excerpt: "An in-depth analysis of the changing regulatory landscape for NGOs in India, including FCRA regulations, compliance requirements, and best practices.",
      readTime: "6 min read",
      image: hero1
    },
    {
      title: "Legal Framework for Startups: A Complete Guide",
      author: "Corporate Law Division",
      date: "March 5, 2024",
      category: "Startup Law",
      excerpt: "Essential legal considerations for startups, from incorporation to compliance, intellectual property protection, and funding regulations.",
      readTime: "10 min read",
      image: hero1
    },
    {
      title: "Intellectual Property Rights in Digital Age",
      author: "IP Rights Team",
      date: "March 1, 2024",
      category: "IP Law",
      excerpt: "Exploring the challenges and solutions in protecting intellectual property rights in the digital era, with focus on trademarks and copyrights.",
      readTime: "7 min read",
      image: hero1
    }
  ];

  const categories = [
    { name: "Corporate Law", count: 12 },
    { name: "NGO Law", count: 8 },
    { name: "Intellectual Property", count: 10 },
    { name: "Civil Litigation", count: 15 },
    { name: "Criminal Law", count: 9 },
    { name: "Family Law", count: 7 }
  ];

  return (
    <div className="articles-page">
      <section 
        className="articles-hero"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="articles-hero-content">
          <h1>Legal Insights & Articles</h1>
          <p>Expert analysis and insights on legal developments and industry trends</p>
        </div>
      </section>

      <section className="articles-content">
        <div className="content-container">
          <div className="articles-layout">
            <div className="articles-main">
              {articles.map((article, index) => (
                <div key={index} className="article-card">
                  <div 
                    className="article-image"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="article-details">
                    <div className="article-meta">
                      <span className="article-category">{article.category}</span>
                      <span className="article-read-time">{article.readTime}</span>
                    </div>
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                    <div className="article-footer">
                      <div className="article-author">
                        <i className="fas fa-user-circle"></i>
                        <span>{article.author}</span>
                      </div>
                      <div className="article-date">{article.date}</div>
                    </div>
                    <button className="read-article">
                      Read Article
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="articles-sidebar">
              <div className="sidebar-section">
                <h3>Categories</h3>
                <ul className="categories-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <span className="category-name">{category.name}</span>
                      <span className="category-count">{category.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Subscribe to Updates</h3>
                <p>Stay informed about our latest legal insights and articles</p>
                <form className="subscribe-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Articles; 