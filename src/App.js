import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {useEffect, useState} from "react";
import {API_KEY} from "./services/api-football";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getAllLiveMatches()
    }, [])

    const getAllLiveMatches = () => {
        fetch("https://v3.football.api-sports.io/fixtures?live=all", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(response => response.json().then(data => {
                const matchesList = data['response']
                setMatches(matchesList)
                console.log(matchesList)
            }))
            .catch(err => {
                console.log(err);
            });

    }

    return (
        <div className="App">
            <Navbar/>
            {matches.map(match => (
                <ScoreBoard
                    leagueName={match.league.name}
                    leagueLogo={match.league.logo}
                    timeElapsed={match.fixture.status.elapsed}
                    half={match.fixture.status.long}
                    homeTeam={match.teams.home.name}
                    awayTeam={match.teams.away.name}
                    homeLogo={match.teams.home.logo}
                    awayLogo={match.teams.away.logo}
                    homeGoals={match.goals.home}
                    awayGoals={match.goals.away}
                />
            ))}
        </div>
    )
}

export default App;
