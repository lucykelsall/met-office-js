function userInput()
{
    event.preventDefault();
let input = document.getElementById("2");
alert(input.value);
fetch('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=dd89d98f-dc78-4ec5-9bc4-ec5ba68ee17b')        
  .then(response => response.json())
  .then(data => 
    {
    for (let i = 0; i < data.Locations.Location.length; i++) 
    {
      if (input.value === data.Locations.Location[i].name) 
    {
        return fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${data.Locations.Location[i].id}?res=3hourly&key=dd89d98f-dc78-4ec5-9bc4-ec5ba68ee17b`)
  .then(response => response.json())
  .then(data => {
    document.querySelector("#results").innerHTML = `...`;
  })
    }
    }
    })
}

