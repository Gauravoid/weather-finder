import React, {Component} from 'react';

export default class Weather extends Component {
	render(){
		return(
			<div>
			{ this.props.city && this.props.country && <p className="weather__value">City: {this.props.city}</p> }
			{ this.props.city && this.props.country && <p className="weather__value">country: {this.props.country}</p> }
			{ this.props.city && this.props.country && <p className="weather__value">Temperature: {this.props.temperature} &#176;C , {this.props.description}</p> }
			{ this.props.city && this.props.country && <p className="weather__value">Humidity: {this.props.humidity} %</p> }
			{this.props.error && <p className="weather__error">{this.props.error}</p>}
			</div>
			)
	}
}