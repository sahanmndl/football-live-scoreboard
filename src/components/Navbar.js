import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {SportsSoccer} from "@material-ui/icons";

function Navbar() {

    return(
        <>
            <AppBar position="static" style={{backgroundColor: "cornflowerblue", marginBottom: "50px"}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <SportsSoccer />
                    </IconButton>
                    <Typography variant="h6">
                        Football Live Scoreboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar