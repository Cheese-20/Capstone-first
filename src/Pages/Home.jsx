import {Typography,Box } from "@mui/material";
import showArray from '/src/Api/calls'
import PodcastBlock from "/src/components/PodcastCard.jsx"
import ViewShows from "/src/components/ViewShows.jsx"

  // random trending list 

  const TrendingArray =[];

  for(let i=0; i<=10;i++){
    const random = Math.floor(Math.random() * showArray.length)
   TrendingArray.push(showArray[random])
   console.log(random)
  }

function Home() {
  return (
    <>
    <Typography sx={{m:1}}>Trending</Typography>
    <Box sx={{ display:'flex',overflowX: 'auto'}} className="pod-data">
     {TrendingArray.map((item) =>{<PodcastBlock 
     key={item.id}
     pic={item.image} 
     title={item.title}
     description={item.description}
     />})}
     </Box>

  {/**  ARRAY That should have clicked*/}
     <Typography sx={{m:1}}>Recently played</Typography>
     {/* <PodcastBlock /> */}

     <Typography sx={{m:1}}>All Shows</Typography>
      <Box>
          <ViewShows />
      </Box>
    </>
  );
}

export default Home;
