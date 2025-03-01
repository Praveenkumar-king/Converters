const pressureRates = {
    pascal: {
        bar: 0.00001,
        psi: 0.000145038
    },
    bar: {
        pascal: 100000,
        psi: 14.5038
    },
    psi: {
        pascal: 6894.76,
        bar: 0.0689476
    }
};

function convertPressure() {
    const fromUnit = document.getElementById('pressureFrom').value;
    const toUnit = document.getElementById('pressureTo').value;
    const value = document.getElementById('pressureValue').value;

    const conversionRate = pressureRates[fromUnit][toUnit];
    const result = value * conversionRate;

    document.getElementById('pressureResult').textContent = `${value} ${fromUnit} = ${result} ${toUnit}`;
}
