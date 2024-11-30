document.getElementById('carForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const carData = {
        registrationNumber: document.getElementById('registrationNumber').value,
        carMake: document.getElementById('carMake').value,
        carModel: document.getElementById('carModel').value,
        carColour: document.getElementById('carColour').value,
        carYear: document.getElementById('carYear').value,
        carMileage: document.getElementById('carMileage').value,
        mileageUnit: document.getElementById('mileageUnit').value,
        accidentHistory: document.getElementById('accidentHistory').value,
        askingPrice: document.getElementById('askingPrice').value,
        location: document.getElementById('location').value
    };

    localStorage.setItem('carData', JSON.stringify(carData));
    window.location.href = 'cart.html'; // Redirect to the cart page
});