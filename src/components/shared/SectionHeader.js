function SectionHeader({ subtitle, title, description, className = '' }) {
  return (
    <div className={`section-header ${className}`}>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      {title && <h2>{title}</h2>}
      <div className="underline"></div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionHeader;