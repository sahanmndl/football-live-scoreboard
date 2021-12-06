import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({leagueName, leagueLogo,
                        timeElapsed, half,
                       homeTeam, awayTeam,
                       homeLogo, awayLogo,
                       homeGoals, awayGoals}) => {

    return (
        <div className="scoreboard">
            <div className="scoreboard__container">
                <div className="scoreboard__basics mb-05">
                    <div className="league__container">
                        <img className="league__logo" src={leagueLogo} alt="LeagueLogo" />
                        <span className="league">{leagueName}</span>
                    </div>
                    <span className="label">{half}</span>
                    <span className="text-danger">{timeElapsed}'</span>
                </div>
                <div className="scoreboard__teams">
                    <div className="scoreboard__team scoreboard__team--align-right mr-2">
                        <div className="scoreboard__badge ml-1">
                            <img src={homeLogo} alt="HomeTeam"/>
                        </div>
                        <span className="scoreboard__name">{homeTeam}</span>
                    </div>
                    <div className="scoreboard__result">
                        <span className="scoreboard__result-home">{homeGoals}</span>
                        <span className="scoreboard__result-separator">:</span>
                        <span className="scoreboard__result-home">{awayGoals}</span>
                    </div>
                    <div className="scoreboard__team scoreboard__team--align-left ml-2">
                        <div className="scoreboard__badge mr-1">
                            <img src={awayLogo} alt="AwayTeam" />
                        </div>
                        <span className="scoreboard__name">{awayTeam}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard