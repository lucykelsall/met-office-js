import readlineSync from "readline-sync";
import express from "express";

const app = express()
const port = 3000

app.use(express.static('frontend'));

app.get('/forecast', (req, res) => {
  fetch('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=dd89d98f-dc78-4ec5-9bc4-ec5ba68ee17b')        
  .then(response => response.json())
  .then(data => {
    // To display all valid location names
    //for (let i = 0; i < data.Locations.Location.length; i++) {
    //console.log(data.Locations.Location[i].name);
   //}
    // Ask user to input a valid location name
    //const userQuery = readlineSync.question('Please enter a location name: ');
    // Check user input against list of location names
    for (let i = 0; i < data.Locations.Location.length; i++) {
      if (userQuery === data.Locations.Location[i].name) 
      {
        return fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${data.Locations.Location[i].id}?res=3hourly&key=dd89d98f-dc78-4ec5-9bc4-ec5ba68ee17b`)
  .then(response => response.json())
  .then(data => {
    res.send(data.SiteRep.DV.Location.Period[0].Rep[0]);
  })
} //else {
  //res.send('Error 400: Bad Request');
//}
}
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*

Wind direction: ${data.SiteRep.DV.Location.Period[0].Rep[0].D}\n
Feels like: ${data.SiteRep.DV.Location.Period[0].Rep[0].F}\n
Wind gust: ${data.SiteRep.DV.Location.Period[0].Rep[0].G}\n
Relative humudity: ${data.SiteRep.DV.Location.Period[0].Rep[0].H}\n
Precipitation probability: ${data.SiteRep.DV.Location.Period[0].Rep[0].Pp}\n
Wind speed: ${data.SiteRep.DV.Location.Period[0].Rep[0].S}\n
Temperature: ${data.SiteRep.DV.Location.Period[0].Rep[0].T}\n
Visibility: ${data.SiteRep.DV.Location.Period[0].Rep[0].V}\n
Weather type: ${data.SiteRep.DV.Location.Period[0].Rep[0].W}\n
Max UV: ${data.SiteRep.DV.Location.Period[0].Rep[0].U}\n
Minutes past midnight: ${data.SiteRep.DV.Location.Period[0].Rep[0].$}`

const promise = new Promise((resolve, reject) => {
setTimeout(() => resolve(console.log('')), 2000);
});

// Check user input against list of location names
for (let i = 0; i < arrayOfNames.length; i++) {
  if (userCommand === ${}) 

//{"elevation":"145.0","id":"350495","latitude":"52.5355","longitude":"-2.0729","name":"Bloomfield","region":"wm","unitaryAuthArea":"West Midlands Conurbation"}

//console.log(parsedData);
// .then(data => parsedData.push(data))
//  .then(console.log(parsedData))

fetch('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/310042?res=3hourly&key=866ba1d3-9f94-4c30-8c79-121f956442cc')           //api for the get request
.then(response => response.json())
.then(data => console.log(data));
*/