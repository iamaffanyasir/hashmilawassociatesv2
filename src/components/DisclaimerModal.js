import { useState, useEffect, useCallback } from 'react';
import '../styles/DisclaimerModal.css';

function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const agreed = localStorage.getItem('disclaimerAgreed');
    if (agreed) {
      setHasAgreed(true);
      setIsOpen(false);
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleAgree = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      localStorage.setItem('disclaimerAgreed', 'true');
      setHasAgreed(true);
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAgree();
    }
  }, [handleAgree]);

  if (!isOpen || hasAgreed) return null;

  return (
    <div 
      className={`modal-overlay ${isClosing ? 'closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div 
        className={`modal-content ${isClosing ? 'closing' : ''}`}
        tabIndex="-1"
      >
        <div className="modal-header">
          <h2 id="disclaimer-title">Legal Disclaimer</h2>
          <div className="header-line"></div>
        </div>
        <div className="modal-text">
          <p className="intro-text">
            Pursuant to the rules of the Bar Council of India, Hashmi Law Associates 
            hereby informs all visitors of this website that:
          </p>
          <ul>
            <li>
              By accessing this website, you acknowledge that you are seeking information 
              about Hashmi Law Associates and its legal services of your own accord, and 
              for your personal use;
            </li>
            <li>
              Any information obtained or materials downloaded from this website are upon 
              your explicit request. The transmission, receipt, or use of this website does 
              not constitute or create an attorney-client relationship;
            </li>
            <li>
              The content provided on this website is for informational purposes only and 
              should not be interpreted as legal advice or a legal opinion on any specific 
              facts or circumstances.
            </li>
          </ul>
          <div className="disclaimer-footer">
            <div className="footer-header">Important Notice</div>
            <p>
              Hashmi Law Associates expressly disclaims all liability with respect to actions 
              taken or not taken based on any contents of this website. For specific legal 
              matters, please seek the counsel of a qualified legal professional.
            </p>
          </div>
        </div>
        <div className="button-container">
          <button 
            onClick={handleAgree}
            onKeyDown={handleKeyDown}
            className="agree-button"
            aria-label="I acknowledge and agree to the terms of this disclaimer"
            tabIndex="0"
          >
            I ACKNOWLEDGE AND AGREE
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerModal; 