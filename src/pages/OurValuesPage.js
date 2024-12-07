import '../styles/OurValuesPage.css';
import ValuesHero from '../components/ValuesHero';
import ValuesPrinciples from '../components/ValuesPrinciples';
import ValuesCommitment from '../components/ValuesCommitment';

function OurValuesPage() {
  return (
    <div className="values-page">
      <ValuesHero />
      <div className="content-container">
        <ValuesPrinciples />
        <ValuesCommitment />
      </div>
    </div>
  );
}

export default OurValuesPage; 