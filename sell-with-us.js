document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var carData = {
        registrationNumber: document.getElementById('registrationNumber').value,
        carMake: document.getElementById('carMake').value,
        carModel: document.getElementById('carModel').value,
        carColour: document.getElementById('carColour').value,
        carYear: document.getElementById('carYear').value,
        carMileage: document.getElementById('carMileage').value,
        mileageUnit: document.getElementById('mileageUnit').value,
        accidentHistory: document.getElementById('accidentHistory').value,
        askingPrice: document.getElementById('askingPrice').value,
        location: document.getElementById('location').value,
    };

    // Handle the image file
    var carImage = document.getElementById('carImage').files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        carData.image = reader.result;

        // Save data to local storage
        localStorage.setItem('carData', JSON.stringify(carData));

        // Redirect to the cart page
        window.location.href = 'buy-with-us.html';
    };

    if (carImage) {
        reader.readAsDataURL(carImage);
    } else {
        // Save data without image if no file is selected
        localStorage.setItem('carData', JSON.stringify(carData));
        window.location.href = 'buy-with-us.html';
    }
});
