const ArrShow =[];

fetch('https://podcast-api.netlify.app/shows')
 .then(response => response.json())
 .then(data => data.map(
    (item) => ( ArrShow.push(item))
 ))
 .catch(error => console.log(error));

 export default ArrShow

console.log(ArrShow)