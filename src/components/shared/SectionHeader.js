function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="section-header">
      <span className="subtitle">{subtitle}</span>
      <h2>{title}</h2>
      <div className="underline"></div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionHeader;