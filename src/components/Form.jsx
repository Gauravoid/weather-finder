import React,{Component} from 'react';

export default class Form extends Component{
	render(){
		return (
			<div>
			<form onSubmit={this.props.getWeather}>
				<select name="country">
                {this.props.countries.map(function(country, index){
                    return <option value={country.alpha2Code}>{country.name}</option> ;
                  })}
            </select>
				<input type="text" name="city" placeholder="Enter city"/>
				<button>Submit</button>
			</form>
			</div>
		)
	}
}