
let parsedData = fetch('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=dd89d98f-dc78-4ec5-9bc4-ec5ba68ee17b')           //api for the get request
.then(response => response.json())
.then((data) => {
  //console.log(data);
  return data
})

const promise = new Promise((resolve, reject) => {
setTimeout(() => resolve(console.log(parsedData)), 2000);
});

for (i)

//console.log(parsedData);
// .then(data => parsedData.push(data))
//  .then(console.log(parsedData))

/* fetch('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/310042?res=3hourly&key=866ba1d3-9f94-4c30-8c79-121f956442cc')           //api for the get request
.then(response => response.json())
.then(data => console.log(data));
*/