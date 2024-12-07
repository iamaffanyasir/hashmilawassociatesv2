import '../styles/TeamPage.css';
import TeamHero from '../components/TeamHero';
import TeamMembers from '../components/TeamMembers';
import TeamStructure from '../components/TeamStructure';

function TeamPage() {
  return (
    <div className="team-page">
      <TeamHero />
      <div className="content-container">
        <TeamMembers />
        <TeamStructure />
      </div>
    </div>
  );
}

export default TeamPage; 