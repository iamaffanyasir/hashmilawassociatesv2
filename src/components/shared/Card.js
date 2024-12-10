function Card({ icon, title, description, className }) {
  return (
    <div className={`card ${className || ''}`}>
      {icon && (
        <div className="card-icon">
          <i className={icon}></i>
        </div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
    </div>
  );
}

export default Card;