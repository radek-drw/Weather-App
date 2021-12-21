import React from 'react';
import './Result.css';

const Result = props => {
   const { date, city, country, temp, feelsLike, pressure, wind, err } = props.weather;

   let content = null;

   if (!err && city) {
      content = (
         <div>
            <h2>{city}, {country}</h2>
            <p>{date}</p>
            <p>Temperature: {temp} &deg;C</p>
            <p>Feels like: {feelsLike} &deg;C</p>
            <p>Pressure: {pressure} kPa</p>
            <p>Wind: {wind} m/s</p>
         </div>
      )
   }

   return (
      <>
         {err ? <p>Unfortunatly we couldn't find <strong>{city}</strong></p> : content}
      </>
   )
}

export default Result;