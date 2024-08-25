import React, { useState, useEffect } from 'react';
import './MatchesTable.css';

const MatchesTable = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchedMatches = [
      {
        date: '2024-09-15',
        homeTeam: { name: 'Falcons', logo: 'images/myLogo.png' },
        awayTeam: { name: 'Chaparral', logo: 'images/chaps.png' },
        result: '3 - 1',
      },
      {
        date: '2024-09-22',
        homeTeam: { name: 'Falcons', logo: 'images/myLogo.png' },
        awayTeam: { name: 'Tigers', logo: 'images/tiger.png' },
        result: '1 - 1',
      },
      // Add future more matches here
    ];
    
    setMatches(fetchedMatches);
  }, []);

  return (
    <div className="matches-table">
      {matches.map((match, index) => (
        <div key={index} className="match-card">
          <div className="match-date">{match.date}</div>
          <div className="teams">
            <div className="team">
              <img src={match.homeTeam.logo} alt={match.homeTeam.name} />
              <p>{match.homeTeam.name}</p>
            </div>
            <div className="vs">vs</div>
            <div className="team">
              <img src={match.awayTeam.logo} alt={match.awayTeam.name} />
              <p>{match.awayTeam.name}</p>
            </div>
          </div>
          <div className="result">{match.result}</div>
        </div>
      ))}
    </div>
  );
};

export default MatchesTable;
