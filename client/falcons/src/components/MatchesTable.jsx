import React, { useState, useEffect } from 'react';
import './MatchesTable.css';

const MatchesTable = () => {
  const [previousMatches, setPreviousMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);

  useEffect(() => {
    const fetchedPreviousMatches = [
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
    ];

    const fetchedUpcomingMatches = [
      {
        date: '2024-10-10',
        homeTeam: { name: 'Falcons', logo: 'images/myLogo.png' },
        awayTeam: { name: 'Lions', logo: 'images/lion.png' },
        result: 'TBD',
      },
      {
        date: '2024-10-17',
        homeTeam: { name: 'Falcons', logo: 'images/myLogo.png' },
        awayTeam: { name: 'Eagles', logo: 'images/ea.png' },
        result: 'TBD',
      },
    ];

    setPreviousMatches(fetchedPreviousMatches);
    setUpcomingMatches(fetchedUpcomingMatches);
  }, []);

  return (
    <div>
      <div className="matches-section">
        <div className="section-header">Previous Matches</div>
        <div className="matches-table">
          {previousMatches.map((match, index) => (
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
      </div>

      <div className="matches-section">
        <div className="section-header">Upcoming Matches</div>
        <div className="matches-table">
          {upcomingMatches.map((match, index) => (
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
      </div>
    </div>
  );
};

export default MatchesTable;
