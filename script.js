const additionalOptions = document.querySelectorAll('.additional-options')
const totalPrice = document.getElementById('total-price')

const prices = {
    unit1: 10.0,
    unit2: 18.0,
    unit3: 24.0,
};

function selectOption(optionId) {
    // Hide all additional option boxes
    additionalOptions.forEach((box) => {
        box.style.display = 'none';
        box.parentElement.style.borderColor = '';
        box.parentElement.style.backgroundColor = '';
    });

    // Show the options box for the selected unit
    const selectedOptions = document.getElementById(`options${optionId}`);
    if (selectedOptions) {
        selectedOptions.style.display = 'block';
        selectedOptions.parentElement.style.borderColor = '#ff8ba5';
        selectedOptions.parentElement.style.backgroundColor = '#FFF0F5';

    }

    // Update the total price
    totalPrice.innerText = prices[`unit${optionId}`].toFixed(2);
}
