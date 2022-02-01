import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import '../styles/App.css';

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
    wind: '',
    err: false
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {

      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response
          }
          throw Error('Failed')
        })
        .then(response => response.json())
        .then(data => {
          const date = new Date().toLocaleString();

          this.setState({
            date: date,
            city: this.state.value,
            country: data.sys.country,
            temp: data.main.temp,
            tempFeels: data.main.feels_like,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            err: false
          })
        })
        .catch(err => {
          this.setState(prevState => ({
            city: prevState.value,
            err: true
          }))
        })
    }
  }

  render() {
    return (
      <>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
        />
        <Result weather={this.state} />
      </>
    )
  }
}

export default App;