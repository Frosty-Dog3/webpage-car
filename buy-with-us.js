function filterByBudget(filter) {
    var carItems = document.getElementsByClassName('car-cart-item');

    for (var i = 0; i < carItems.length; i++) {
        var carPrice = parseInt(carItems[i].getAttribute('data-price'));

        if (filter === 'all') {
            carItems[i].style.display = 'block';
        } else if (filter === '0-500k' && carPrice <= 500000) {
            carItems[i].style.display = 'block';
        } else if (filter === '500k-1m' && carPrice > 500000 && carPrice <= 1000000) {
            carItems[i].style.display = 'block';
        } else if (filter === '1m-2m' && carPrice > 1000000 && carPrice <= 2000000) {
            carItems[i].style.display = 'block';
        } else if (filter === '2m-3m' && carPrice > 2000000 && carPrice <= 3000000) {
            carItems[i].style.display = 'block';
        } else {
            carItems[i].style.display = 'none';
        }
    }
}

function loadCarData() {
    var carData = JSON.parse(localStorage.getItem('carData'));
    if (carData) {
        // Create a new car item element
        var carItem = document.createElement('div');
        carItem.className = 'car-cart-item';
        carItem.dataset.price = carData.askingPrice;
        
        var carImage = carData.image ? carData.image : 'car-cart-image/default-car.jpg';

        carItem.innerHTML = `
            <img src="${carImage}" alt="Car Image" class="car-image">
            <h1 class="car-model">${carData.carModel}</h1>
            <p class="car-description">A well-maintained car</p>
            <p class="car-year">Year: ${carData.carYear}</p>
            <p class="car-price">Price: ${carData.askingPrice}</p>
            <button class="buy-now-button">Buy Now</button>
        `;
        
        // Append the new car item to the car cart section
        document.querySelector('.car-cart-section').appendChild(carItem);
    }
}

document.addEventListener('DOMContentLoaded', loadCarData);

