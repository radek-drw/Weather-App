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
      tempFeels: '',
      pressure: '',
      wind: ''
   }

   handleChange = e => {
      this.setState({
         value: e.target.value
      })
   }

   handleSubmit = e => {
      e.preventDefault();

      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`;

      const date = new Date().toLocaleString();

      fetch(API)
         .then(response => {
            if (response.ok) {
               return response;
            }
         })
         .then(response => response.json())
         .then(data => {
            this.setState(prevState => ({
               date: date,
               city: prevState.value,
               country: data.sys.country,
               temp: data.main.temp,
               tempFeels: data.main.feels_like,
               pressure: data.main.pressure,
               wind: data.wind.speed
            }))
         })
   }

   render() {
      return (
         <>
            <Form
               value={this.state.value}
               change={this.handleChange}
               submit={this.handleSubmit}
            />

            <Result
               weather={this.state}
            />
         </>
      )
   }
}

export default App;