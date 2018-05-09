import React, { Component } from 'react';
import {Grid,Row} from 'react-bootstrap';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '7ea0c7fa55b004517048618a7786540d';

class App extends Component {


state = {
  temperature:undefined,
  city:undefined,
  country:undefined,
  humidity:undefined,
  description:undefined,
  error:undefined,
  countries:[]
  
  
}

 getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();

  //console.log(countries_data);

    if(city && country){
      this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:""
    });
    }else{
      this.setState({
      temperature:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      error:"Please enter the city and country"
    });
    } 
}
getCountries = async (e) => {
  const countries_call = await fetch(`https://restcountries.eu/rest/v2/all`);
   const cdata = await countries_call.json();
      this.setState({
        countries:cdata
      });

      console.log(this.state.countries);
 }
componentWillMount() {
  this.getCountries();
   // console.log(this.state.countries);
   }

  render() {
    return (

      <div> 
          <div className='wrapper'>
               <Grid>
                  <Row>
                  <div className="col-sm-5 title-container">
                    <h2>Welcome to the Weather App</h2>
                    <p className="title-container__subtitle">Just type the city and country and your good to go !</p>
                  </div>
                  <div className="col-sm-7 form-container">
                   <Form 
                   getWeather={this.getWeather}
                   countries = {this.state.countries}
                   />
                    <Weather 
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
                  </div>
                  
          </Row>
              </Grid>
          </div>
      </div>
    );
  }
}

export default App;
