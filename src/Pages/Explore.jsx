 import Search from "/src/components/Explore/SearchBar";
 import ViewShows from "/src/components/ViewShows.jsx";
 import {  Typography } from "@mui/material";


 function ExploreData(){
  return(
    <>
      <Search />
      
      <Typography>All shows:</Typography>
      <ViewShows />
    </>
  )
}

export default ExploreData