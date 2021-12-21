import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIkey = '0268633fae299db526aed6ff3c00d40d';

class App extends Component {

   state = {
      value: '',
      date: '',
      city: '',
      country: '',
      temp: '',
      feelsLike: '',
      pressure: '',
      wind: '',
      err: false
   }

   handleCitySubmit = e => {
      e.preventDefault();

      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`

      fetch(API)
         .then(response => {
            if (response.ok) {
               return response
            }
            throw Error('Page not found')
         })
         .then(response => response.json())
         .then(data => {
            const date = new Date().toLocaleString();

            this.setState({
               date: date,
               city: this.state.value,
               country: data.sys.country,
               temp: data.main.temp,
               feelsLike: data.main.feels_like,
               pressure: data.main.pressure,
               wind: data.wind.speed,
               err: false
            })
         })
         .catch(err => {
            this.setState({
               err: true,
               city: this.state.value
            })
         })
   }

   handleInputChange = e => {
      this.setState({
         value: e.target.value
      })
   }

   render() {
      return (
         <div className="App">
            <Form
               submit={this.handleCitySubmit}
               change={this.handleInputChange}
               value={this.state.value}
            />
            <Result
               weather={this.state}
            />
         </div>
      )
   }
}

export default App;