fetch('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/310042?res=3hourly&key=866ba1d3-9f94-4c30-8c79-121f956442cc')           //api for the get request
  .then(response => response.json())
  .then(data => console.log(data));
  