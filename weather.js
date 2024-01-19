let weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C
 
weather.find({search: 'Orchard Park, NY', degreeType: 'C'}, (err, result) => {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});