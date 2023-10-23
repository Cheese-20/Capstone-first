import {Typography } from "@mui/material";
import show from '/src/Api/calls'
import PodcastTemp from "/src/components/PodcastCard.jsx"

function Home() {

//todo display name and date 
  return (
    <>
    <Typography sx={{m:1}}>Trending</Typography>
     {show.map((item) =><PodcastTemp pic={item.image} key={item.id}/>)}

     <Typography sx={{m:1}}>Genres</Typography>
     <Typography sx={{m:1}}>Recently played</Typography>
     <PodcastTemp/>
    </>
  );
}

export default Home;