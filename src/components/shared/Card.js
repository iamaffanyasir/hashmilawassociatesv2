function Card({ 
  title, 
  description, 
  icon, 
  className = '', 
  onClick,
  children 
}) {
  return (
    <div 
      className={`card ${className}`} 
      onClick={onClick}
    >
      {icon && (
        <div className="card-icon">
          <i className={icon}></i>
        </div>
      )}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  );
}

export default Card;