document.addEventListener('DOMContentLoaded', () => {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const resultSpan = document.getElementById('result');

    // Replace with your API key and the endpoint of your chosen service
    const apiKey = 'fb64c619042c8533b57b6ed5'; // Your API key
    const apiUrl = ` https://v6.exchangerate-api.com/v6/fb64c619042c8533b57b6ed5/latest/USD`;

    // Fetch currency data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.conversion_rates) {
                populateCurrencyOptions(data.conversion_rates);
                document.querySelector('button').addEventListener('click', () => {
                    convertCurrency(data.conversion_rates);
                });
            } else {
                console.error('Invalid API response:', data);
            }
        })
        .catch(error => console.error('Error fetching currency data:', error));

    function populateCurrencyOptions(rates) {
        const currencies = Object.keys(rates);
        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            fromCurrencySelect.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            toCurrencySelect.appendChild(option2);
        });
    }

    function convertCurrency(rates) {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const amount = parseFloat(amountInput.value);

        if (fromCurrency && toCurrency && !isNaN(amount)) {
            const rate = rates[toCurrency] / rates[fromCurrency];
            const result = (amount * rate).toFixed(2);
            resultSpan.textContent = `Converted Amount: ${result}`;
        } else {
            resultSpan.textContent = 'Invalid input';
        }
    }
});
