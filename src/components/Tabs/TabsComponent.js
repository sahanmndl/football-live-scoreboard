import React, {useEffect, useState} from 'react';
import {Box, Tab, Tabs, Typography} from "@material-ui/core";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import {API_KEY} from "../../services/api-football";

function TabsComponent() {

    const [value, setValue] = useState(0)

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

    const handleChange = (e, val) => {
        setValue(val)
    }

    function TabPanel(props) {
        return (
            <Box>
                {props.value === props.index && (
                    <Box>
                        <Typography>{props.children}</Typography>
                    </Box>
                )}
            </Box>
        )
    }

    function getMatchData(id) {
        return (
            matches.map(match => (
                <React.Fragment>
                    {(match.league.id === id) ?
                        <Box justifyContent="center" alignItems="center" display="flex" marginTop="8px">
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
                        </Box> : ''
                    }
                </React.Fragment>
            ))
        )
    }

    return(
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
            >
                <Tab label="PREMIER LEAGUE"/>
                <Tab label="LALIGA"/>
                <Tab label="BUNDESLIGA"/>
                <Tab label="PRIMEIRA LIGA"/>
                <Tab label="SERIE-A"/>
                <Tab label="LIGUE-1"/>
                <Tab label="UEFA CHAMPIONS LEAGUE"/>
                <Tab label="UEFA EUROPA LEAGUE"/>
            </Tabs>
            <TabPanel index={0} value={value}>
                {getMatchData(39)}
            </TabPanel>
            <TabPanel index={1} value={value}>
                {getMatchData(140)}
            </TabPanel>
            <TabPanel index={2} value={value}>
                {getMatchData(78)}
            </TabPanel>
            <TabPanel index={3} value={value}>
                {getMatchData(94)}
            </TabPanel>
            <TabPanel index={4} value={value}>
                {getMatchData(135)}
            </TabPanel>
            <TabPanel index={5} value={value}>
                {getMatchData(61)}
            </TabPanel>
            <TabPanel index={6} value={value}>
                {getMatchData(2)}
            </TabPanel>
            <TabPanel index={7} value={value}>
                {getMatchData(3)}
            </TabPanel>
        </>
    )
}

export default TabsComponent