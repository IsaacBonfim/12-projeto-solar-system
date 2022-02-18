import React from 'react';

import planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planets.map((planet) => (
            <li key={ planet.name }>
              <PlanetCard
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            </li>))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
