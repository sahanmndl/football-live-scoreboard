import {Box, Tab, Tabs, Typography} from "@material-ui/core";
import {useState} from "react";

function TabsComponent() {

    const [value, setValue] = useState(0)

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

    return(
        <>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="ODI"/>
                <Tab label="T20"/>
                <Tab label="Test"/>
            </Tabs>
            <TabPanel index={0} value={value}>
                ODI
            </TabPanel>
            <TabPanel index={1} value={value}>
                T20
            </TabPanel>
            <TabPanel index={2} value={value}>
                TEST
            </TabPanel>
        </>
    )
}

export default TabsComponent