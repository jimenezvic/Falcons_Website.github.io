import React, { useState } from "react";
import "./Players.css";

function Players() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <section className="section-white">
        <div className="containerr">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="tlt">FALCONS ROSTER</h2>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img
                  src="images/player2.png"
                  alt="PLAYER"
                  className="team-img"
                  onClick={toggleInfo}
                />
                <h3>Ivan Jimenez</h3>
                <div className="team-info">Goal Keeper</div>
                <div className="team-footer">More Info</div>

                {showInfo && (
                  <div className="more-info active">
                    <span className="more-info-close" onClick={toggleInfo}>
                      &times;
                    </span>
                    <p>Height: 6'2"</p>
                    <p>Weight: 180 lbs</p>
                    <p>Experience: 5 years</p>
                  </div>
                )}
              </div>
            </div>
            {/* I can add more players here */}
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img
                  src="images/player2.png"
                  alt="PLAYER"
                  className="team-img"
                  onClick={toggleInfo}
                />
                <h3>Ivan Jimenez</h3>
                <div className="team-info">Goal Keeper</div>
                <div className="team-footer">More Info</div>

                {showInfo && (
                  <div className="more-info active">
                    <span className="more-info-close" onClick={toggleInfo}>
                      &times;
                    </span>
                    <p>Height: 6'1"</p>
                    <p>Weight: 180 lbs</p>
                    <p>Experience: 5 years</p>
                  </div>
                )}
              </div>
              </div>
              <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img
                  src="images/player2.png"
                  alt="PLAYER"
                  className="team-img"
                  onClick={toggleInfo}
                />
                <h3>Ivan Jimenez</h3>
                <div className="team-info">Goal Keeper</div>
                <div className="team-footer">More Info</div>

                {showInfo && (
                  <div className="more-info active">
                    <span className="more-info-close" onClick={toggleInfo}>
                      &times;
                    </span>
                    <p>Height: 6'1"</p>
                    <p>Weight: 180 lbs</p>
                    <p>Experience: 5 years</p>
                  </div>
                )}
              </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Players;
