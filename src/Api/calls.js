const ArrShow =[]
 //* push api data to an empty array

 fetch('https://podcast-api.netlify.app/shows')
 .then(response => response.json())
 .then(data => data.map(
    (item) => ( ArrShow.push(item))
 ));

 export default ArrShow

console.log(ArrShow)

