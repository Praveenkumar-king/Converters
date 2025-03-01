document.addEventListener('DOMContentLoaded', () => {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const emiInrSpan = document.getElementById('emi-inr');
    const emiUsdSpan = document.getElementById('emi-usd');

    const apiKey = 'c7569dc5f39bd7149726859a'; // Your API key
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/INR`; // Example API URL

    window.calculateEMI = async function() {
        const principal = parseFloat(principalInput.value);
        const annualRate = parseFloat(rateInput.value) / 100;
        const years = parseFloat(yearsInput.value);

        if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || annualRate <= 0 || years <= 0) {
            emiInrSpan.textContent = 'Invalid input';
            emiUsdSpan.textContent = 'Invalid input';
            return;
        }

        const monthlyRate = annualRate / 12;
        const numberOfMonths = years * 12;
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const usdToInrRate = data.rates.USD; // Get USD rate
            const emiInr = emi.toFixed(2);
            const emiUsd = (emi / usdToInrRate).toFixed(2);

            emiInrSpan.textContent = emiInr;
            emiUsdSpan.textContent = emiUsd;
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
            emiInrSpan.textContent = 'Error';
            emiUsdSpan.textContent = 'Error';
        }
    }
});
