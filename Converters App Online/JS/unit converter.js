const conversionRates = {
    meters: {
        kilometers: 0.001,
        miles: 0.000621371,
        yards: 1.09361
    },
    kilometers: {
        meters: 1000,
        miles: 0.621371,
        yards: 1093.61
    },
    miles: {
        meters: 1609.34,
        kilometers: 1.60934,
        yards: 1760
    },
    yards: {
        meters: 0.9144,
        kilometers: 0.0009144,
        miles: 0.000568182
    }
};

function convertUnit() {
    const fromUnit = document.getElementById('unitFrom').value;
    const toUnit = document.getElementById('unitTo').value;
    const value = document.getElementById('value').value;

    const conversionRate = conversionRates[fromUnit][toUnit];
    const result = value * conversionRate;

    document.getElementById('unitResult').textContent = `${value} ${fromUnit} = ${result} ${toUnit}`;
}
