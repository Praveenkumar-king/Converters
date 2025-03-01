document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get input values
    const unitConsumed = parseFloat(document.getElementById('unit-consumed').value);
    const ratePerUnit = parseFloat(document.getElementById('rate-per-unit').value);
    const fixedCharge = parseFloat(document.getElementById('fixed-charge').value);

    // Validate inputs
    if (isNaN(unitConsumed) || isNaN(ratePerUnit) || isNaN(fixedCharge) || unitConsumed < 0 || ratePerUnit <= 0 || fixedCharge < 0) {
        document.getElementById('result').textContent = "Please enter valid values for all fields.";
        return;
    }

    let totalBill = 0;

    // If the units consumed are greater than 100, calculate the bill for the excess units
    if (unitConsumed > 100) {
        totalBill = ((unitConsumed - 100) * ratePerUnit) + fixedCharge;
    } else {
        // If the units are 100 or less, the bill is free
        totalBill = fixedCharge;
    }

    // Display the result
    document.getElementById('result').textContent = `Total Electricity Bill: ₹${totalBill.toFixed(2)}`;
});
