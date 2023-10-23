import { Box } from "@mui/material";
import './podcast.css';


export default function PodcastTemp(Props) {

    // const scroll = {
    //     container: {
    //       overflowX: 'auto',
    //       whiteSpace: 'nowrap',
    //     },
    //   };

    


//TODO : Horizontally display items 

  return (
    <Box className='Pod-picture' >
      <img src={Props.pic} />
   </Box>
    
  );
}
