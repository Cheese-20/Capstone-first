import { Tabs,Tab } from "@mui/material";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import React from "react";
import Explore from "../Pages/Explore.jsx"
import Profile from "../Pages/Profile.jsx"
import Home from "../Pages/home.jsx"



export default function NavigationBar(){

    const [onTab, setOnTab] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setOnTab(newValue);
    }

    const links = ["/Home","/Explore","/Profile"];
    return (
        <BrowserRouter>
        <nav>
                    <Tabs value={onTab} onChange={handleChange} >
                        <Link to="/"><Tab label="Home" value={links[0]} /></Link>
                        <Link to="/Explore"> <Tab label="Explore"  value={links[1]}  /></Link>
                        <Link to="/Profile"><Tab label="Profile"  value={links[2]} /></Link>
                    </Tabs>
        </nav>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Explore" element={<Explore />}/>
                <Route path="/Profile" element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    
    )
}
