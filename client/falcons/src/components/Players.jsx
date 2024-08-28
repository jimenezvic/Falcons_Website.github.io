import React, { useState } from "react";
import "./Players.css";
import { FaFutbol } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function Players() {
  const [showInfo, setShowInfo] = useState({
    diogo: false,
    kaylob: false,
    erick: false
  });

  const toggleInfo = (player) => {
    setShowInfo((prevState) => ({
      ...prevState,
      [player]: !prevState[player]
    }));
  };

  return (
    <div className="container">
      <section className="section-white">
        <div className="row text-center">
          <h2 className="tlt">FALCONS ROSTER</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="images/diogo.webp"
                alt="PLAYER"
                className="team-img"
                onClick={() => toggleInfo("diogo")}
              />
              <h3 id="player">Diogo Baptista</h3>
              <div className="team-info">Goal Keeper</div>
              <div className="team-footer" onClick={() => toggleInfo("diogo")}>More Info</div>

              {showInfo.diogo && (
                <div className="more-info active">
                  <FaFutbol className="more-info-close" onClick={() => toggleInfo("diogo")} />
                  <img src="images/diogo.webp" alt="PLAYER" className="small-img" />
                  <p>Height: 6'2"</p>
                  <p>Weight: 180 lbs</p>
                  <p>Experience: 5 years</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="images/kaylob.webp"
                alt="PLAYER"
                className="team-img"
                onClick={() => toggleInfo("kaylob")}
              />
              <h3 id="player">Kaylob Walker</h3>
              <div className="team-info">Goal Keeper</div>
              <div className="team-footer" onClick={() => toggleInfo("kaylob")}>More Info</div>

              {showInfo.kaylob && (
                <div className="more-info active">
                  <FaFutbol className="more-info-close" onClick={() => toggleInfo("kaylob")} />
                  <img src="images/kaylob.webp" alt="PLAYER" className="small-img" />
                  <p>Height: 6'2"</p>
                  <p>Weight: 180 lbs</p>
                  <p>Experience: 5 years</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="images/erick.webp"
                alt="PLAYER"
                className="team-img"
                onClick={() => toggleInfo("erick")}
              />
              <h3 id="player">Eric Villasenor</h3>
              <div className="team-info">Goal Keeper</div>
              <div className="team-footer" onClick={() => toggleInfo("erick")}>More Info</div>

              {showInfo.erick && (
                <div className="more-info active">
                  <FaFutbol className="more-info-close" onClick={() => toggleInfo("erick")} />
                  <img src="images/erick.webp" alt="PLAYER" className="small-img" />
                  <p>Height: 6'2"</p>
                  <p>Weight: 180 lbs</p>
                  <p>Experience: 5 years</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Players;
