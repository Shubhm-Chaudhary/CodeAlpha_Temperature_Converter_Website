function convertTemperature() {
	// Get the input temperature and the conversion units
	let temperature = parseFloat(document.getElementById("temperature").value);
	let fromUnit = document.getElementById("from").value;
	let toUnit = document.getElementById("to").value;

	// Check if the temperature is valid
	if (isNaN(temperature)) {
		document.getElementById("result").innerHTML = "Please enter a valid temperature";
		return;
	}

	// Convert the temperature to the desired units
	let result;
	switch (fromUnit) {
		case "celsius":
			switch (toUnit) {
				case "celsius":
					result = temperature;
					break;
				case "fahrenheit":
					result = (temperature * 9 / 5) + 32;
					break;
				case "kelvin":
					result = temperature + 273.15;
					break;
			}
			break;
		case "fahrenheit":
			switch (toUnit) {
				case "celsius":
					result = (temperature - 32) * 5 / 9;
					break;
				case "fahrenheit":
					result = temperature;
					break;
				case "kelvin":
					result = (temperature - 32) * 5 / 9 + 273.15;
					break;
			}
			break;
		case "kelvin":
			switch (toUnit) {
				case "celsius":
					result = temperature - 273.15;
					break;
				case "fahrenheit":
					result = (temperature - 273.15) * 9 / 5 + 32;
					break;
				case "kelvin":
					result = temperature;
					break;
			}
			break;
	}

	// Display the converted temperature
	document.getElementById("result").innerHTML = temperature + " " + fromUnit + " = " + result.toFixed(2) + " " + toUnit;
}
