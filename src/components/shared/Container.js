// Create reusable container component
function Container({ children, className = '', fluid = false }) {
  return (
    <div className={`container ${fluid ? 'container-fluid' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default Container; 