function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var resultElement = document.getElementById("result");
  
    if (inputUnit === "celsius") {
      var fahrenheit = (inputTemperature * 9/5) + 32;
      resultElement.innerHTML = inputTemperature + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else if (inputUnit === "fahrenheit") {
      var celsius = (inputTemperature - 32) * 5/9;
      resultElement.innerHTML = inputTemperature + "°F = " + celsius.toFixed(2) + "°C";
    }
  }
  