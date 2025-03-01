const volumeRates = {
    liters: {
        gallons: 0.264172,
        milliliters: 1000
    },
    gallons: {
        liters: 3.78541,
        milliliters: 3785.41
    },
    milliliters: {
        liters: 0.001,
        gallons: 0.000264172
    }
};

function convertVolume() {
    const fromUnit = document.getElementById('volumeFrom').value;
    const toUnit = document.getElementById('volumeTo').value;
    const value = document.getElementById('volumeValue').value;

    const conversionRate = volumeRates[fromUnit][toUnit];
    const result = value * conversionRate;

    document.getElementById('volumeResult').textContent = `${value} ${fromUnit} = ${result} ${toUnit}`;
}
