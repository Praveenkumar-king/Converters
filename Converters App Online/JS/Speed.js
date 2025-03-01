const speedRates = {
    kmph: {
        mph: 0.621371,
        mps: 0.277778
    },
    mph: {
        kmph: 1.60934,
        mps: 0.44704
    },
    mps: {
        kmph: 3.6,
        mph: 2.23694
    }
};

function convertSpeed() {
    const fromUnit = document.getElementById('speedFrom').value;
    const toUnit = document.getElementById('speedTo').value;
    const value = document.getElementById('speedValue').value;

    const conversionRate = speedRates[fromUnit][toUnit];
    const result = value * conversionRate;

    document.getElementById('speedResult').textContent = `${value} ${fromUnit} = ${result} ${toUnit}`;
}
