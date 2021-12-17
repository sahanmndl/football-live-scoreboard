import {AppBar, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import {Search, SportsSoccer} from "@material-ui/icons";
import "./Navbar.css";
import {useState} from "react";

function Navbar() {

    const [search, setSearch] = useState('')

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        console.log(search)
    }

    return(
        <>
            <AppBar position="static" style={{backgroundColor: "cornflowerblue"}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <SportsSoccer />
                    </IconButton>
                    <Typography variant="h6">
                        Football Live Scoreboard
                    </Typography>
                    <InputBase className="search__bar" value={search} onChange={updateSearch}/>
                    <IconButton edge="end" color="inherit" onClick={getSearch}>
                        <Search/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar