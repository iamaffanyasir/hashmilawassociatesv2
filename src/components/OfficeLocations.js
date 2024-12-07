import '../styles/OfficeLocations.css';

function OfficeLocations() {
  const offices = [
    {
      title: "Delhi High Court",
      address: "Bar Association, Sher Shah Road",
      city: "New Delhi-110053",
      icon: "fas fa-landmark"
    },
    {
      title: "Patiala House Court",
      address: "Bar Association",
      city: "New Delhi-110001",
      icon: "fas fa-building"
    },
    {
      title: "Saket Court",
      address: "Chamber No. 685, Lawyers Chamber",
      city: "New Delhi",
      icon: "fas fa-balance-scale"
    },
    {
      title: "Jasola",
      address: "229-A Pocket-12",
      city: "New Delhi-110025",
      icon: "fas fa-map-marker-alt"
    }
  ];

  return (
    <section className="office-locations">
      <div className="section-header">
        <span className="subtitle">Our Offices</span>
        <h2>Office Locations</h2>
        <div className="underline"></div>
      </div>

      <div className="locations-grid">
        {offices.map((office, index) => (
          <div key={index} className="location-card">
            <div className="location-icon">
              <i className={office.icon}></i>
            </div>
            <div className="location-info">
              <h3>{office.title}</h3>
              <p>{office.address}</p>
              <p>{office.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfficeLocations; 