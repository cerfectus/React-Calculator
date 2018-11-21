import React, { Component } from "react";
import TemperatureField from "./temperatureField";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      temperature: "",
      scale: "c",
    };
  }
  toCelsius = temperature => {
    return (temperature - 32) * 5 / 9;
    
  };
  toFahrenheit = temperature => {
    return (temperature * 9 / 5) + 32;
  };
  toKelvin = temperature => {
      return (temperature * 1) + 273.15
  }

  handleChange = e => {
    let { scale, temperature } = this.state;
    scale = e.target.name;
    temperature = e.target.value;
    this.setState({ scale, temperature });
  };

  render() {
    const { scale, temperature } = this.state;
    const fahrenheit = scale === "c" ? this.toFahrenheit(temperature) : temperature;
    const celsius = scale === "f" ? this.toCelsius(temperature) : temperature;
    const kelvin = scale === "c" ? this.toKelvin(temperature) : temperature

    return (
      <div>
        <h1>Calculadora de Temperatura</h1>

        <div className="field-container" />
        <TemperatureField
          temp={celsius}
          scale="c"
          handleChange={this.handleChange}
        />
        <TemperatureField
          temp={fahrenheit}
          scale="f"
          handleChange={this.handleChange}
        />
        <TemperatureField
          temp={kelvin}
          scale="k"
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Home;
