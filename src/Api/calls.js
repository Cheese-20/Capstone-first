const ArrShow =[]
 //* push api data to an empty array

 fetch('https://podcast-api.netlify.app/shows')
 .then(response => response.json())
 .then(data => data.map(
    (item) => ( ArrShow.push(item))
 ));

 export default ArrShow

console.log(ArrShow)


// import {useEffect,useState} from ' react'

// function Call() {

//    const [ArrShow,setArrShow] = useState([])

//    useEffect(() =>{
//       fetchData();
//    },[]);

//    const fetchData = async() =>{
//       const data = await fetch('https://podcast-api.netlify.app/shows');
//       const shows = await data.json()
//       setArrShow(shows)
//       console.log(ArrShow)
//    };
// }

// export default Call

