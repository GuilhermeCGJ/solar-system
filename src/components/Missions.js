import React from 'react';
import missions from '../data/missions';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section>
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              missionName={ mission.name }
              missionYear={ mission.year }
              missionCountry={ mission.country }
              missionDestination={ mission.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
