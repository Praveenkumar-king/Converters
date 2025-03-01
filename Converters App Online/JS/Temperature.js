function convertTemperature() {
    const fromUnit = document.getElementById('tempFrom').value;
    const toUnit = document.getElementById('tempTo').value;
    const value = parseFloat(document.getElementById('tempValue').value);
    let result;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (value * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = value + 273.15;
        } else {
            result = value;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (value - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            result = (value - 32) * 5/9 + 273.15;
        } else {
            result = value;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = value - 273.15;
        } else if (toUnit === 'fahrenheit') {
            result = (value - 273.15) * 9/5 + 32;
        } else {
            result = value;
        }
    }

    document.getElementById('tempResult').textContent = `${value} ${fromUnit} = ${result} ${toUnit}`;
}
