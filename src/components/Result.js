import React from 'react';

const Result = props => {
   const { date, city, country, temp, tempFeels, pressure, wind } = props.weather;

   return (
      <div>
         <h4>{date}</h4>
         <h3>{city}, {country}</h3>
         <p>Temperature: {temp}</p>
         <p>Feels Like: {tempFeels}</p>
         <p>Pressure: {pressure} kPh</p>
         <p>Wind speed: {wind} m/s</p>
      </div>
   );
}

export default Result;