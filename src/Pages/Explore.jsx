import { useState } from "react";
import { TextField, Paper } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import  SearchIcon  from "@mui/icons-material/Search";
import showArray from "/src/components/Data/Api";
import ViewShows from "/src/components/ViewShows.jsx";
import PodcastBlock from "/src/components/PodcastCard.jsx";
import { Typography, Box } from "@mui/material";
import "/src/components/Explore/Exp.css";
import Fuse from "fuse.js";
import Sort from "/src/components/Explore/Sort.jsx"


// Fuse Search

function ExploreData() {
  const [query, setQuery] = useState("");

  let clicked = 'false';

  // * fuzzy search using fuse.js
  const fuse = new Fuse(showArray, {
    keys: ["title", "description", "id"],
  });

  const results = fuse.search(query);
  console.log(results);
  const PodcastResult = results.map((ArrResult) => ArrResult.item);

  // on each keystroke update state
  const HandleClick = () =>{
    clicked = "true";


  }
  const HandleChange = (event) =>{
    const newVal = event.target.value;
    setQuery(newVal)
  }

  return (
    <>
      <Typography>All shows:</Typography>
      <Box sx={{display:'flex'}}>
      <Paper
        component="form"
        sx={{ p: "1px 1px",display: "flex", alignItems: "center", width: 400 }}
      >
        <TextField sx={{ ml: 1, flex: 1 }} label="Search" value={query} onChange={HandleChange}/>
        <IconButton type="button" aria-label="search" onClick={HandleClick}>
          <SearchIcon />
        </IconButton>
      </Paper>
      
        <Sort />
      </Box>

      <Box className="Grid-Cont">
        {clicked === "false" && <ViewShows className="Pod-Grid" />}

        {clicked === "true" &&
          PodcastResult.map((data) => {
            <PodcastBlock
              key={data.id}
              pic={data.image}
              title={data.title}
              season={data.seasons}
              update={data.updated}
            />;

          })}
      </Box>
    </>
  );
}

export default ExploreData;
// TODO : responsive layout where the grid changes according to the resize specs of window
