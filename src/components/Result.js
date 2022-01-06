import React from 'react';
import './Result.css';

const Result = props => {
   const { date, city, country, temp, tempFeels, pressure, wind, err } = props.weather;

   let content = null;

   if (!err && city) {
      content = (
         <div>
            <h2>{city}, {country}</h2>
            <p>{date}</p>
            <p>Temperature: {temp.toFixed(1)} &deg;C</p>
            <p>Feels like: {tempFeels} &deg;C</p>
            <p>Pressure: {pressure} kPa</p>
            <p>Wind: {wind} m/s</p>
         </div>
      )
   }

   return (
      <>
         {
            err ?
               <p>Sorry. The city <u>{city}</u> doesn't exist</p>
               : content
         }
      </>
   )
}

export default Result;

