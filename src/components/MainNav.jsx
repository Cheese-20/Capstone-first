import { Tabs,Tab } from "@mui/material";
import React from "react";


export default function NavigationBar() {

    const [onTab, setOnTab] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setOnTab(newValue);
    }
    return (
        <>
            <Tabs value={onTab} onChange={handleChange} >
            <Tab label="Home"  />
            <Tab label="Explore"  />
            <Tab label="Profile" />
            </Tabs>
        </>
    )
}
