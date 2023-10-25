import PodData from '/src/Api/calls'
import PodcastCard from '/src/components/PodcastCard.jsx'
import {useState} from 'react'


function ViewShows (){
    const [VisibleShows , setVisibleShows] = useState(5) ;

    const AddMore = () => {
        setVisibleShows(VisibleShows + 8)
    }

    const ViewData = PodData.slice(0,VisibleShows)
    return(
        <>
        {ViewData.map((showData)=>{
            return(
                <PodcastCard 
                    key={showData.id}
                    pic={showData.image} 
                    title={showData.title}
                    description={showData.description}
                    season={showData.seasons}
                    update={showData.updated}
                    />
            )
        })}
        {VisibleShows < PodData.length && (
            <button onClick={AddMore}> Show More </button>
        )}
        </>
    )
}

export default ViewShows