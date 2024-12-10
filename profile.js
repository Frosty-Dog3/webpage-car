function toggleEditProfile() {
    const editFields = `
        <input type="text" id="editName" value="${document.getElementById('profileName').innerText}">
        <input type="text" id="editUsername" value="${document.getElementById('profileUsername').innerText}">
        <input type="text" id="editBio" value="${document.getElementById('profileBio').innerText}">
        <input type="text" id="editEmail" value="${document.getElementById('profileEmail').innerText}">
        <input type="text" id="editPhone" value="${document.getElementById('profilePhone').innerText}">
        <input type="text" id="editLocation" value="${document.getElementById('profileLocation').innerText}">
        <button onclick="saveProfile()">Save</button>
    `;
    document.querySelector('.profile-info').innerHTML = editFields;
}

function saveProfile() {
    document.getElementById('profileName').innerText = document.getElementById('editName').value;
    document.getElementById('profileUsername').innerText = document.getElementById('editUsername').value;
    document.getElementById('profileBio').innerText = document.getElementById('editBio').value;
    document.getElementById('profileEmail').innerText = document.getElementById('editEmail').value;
    document.getElementById('profilePhone').innerText = document.getElementById('editPhone').value;
    document.getElementById('profileLocation').innerText = document.getElementById('editLocation').value;

    // Revert to normal view after saving
    document.querySelector('.profile-info').innerHTML = `
        <h2>About Me</h2>
        <p class="bio" id="profileBio">${document.getElementById('profileBio').innerText}</p>
        <div class="profile-details">
            <p><i class="fas fa-envelope"></i> <span id="profileEmail">${document.getElementById('profileEmail').innerText}</span></p>
            <p><i class="fas fa-phone"></i> <span id="profilePhone">${document.getElementById('profilePhone').innerText}</span></p>
            <p><i class="fas fa-map-marker-alt"></i> <span id="profileLocation">${document.getElementById('profileLocation').innerText}</span></p>
        </div>
    `;
}

function toggleAddCarForm() {
    const form = document.getElementById('addCarForm');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

function addCar() {
    const carName = document.getElementById('carName').value;
    const carPrice = document.getElementById('carPrice').value;
    const carImageFile = document.getElementById('carImage').files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const newCarItem = `
            <div class="car-item">
                <img src="${e.target.result}" alt="Car Image">
                <div class="car-details">
                    <h3>${carName}</h3>
                    <p>Price: ${carPrice}</p>
                </div>
            </div>
        `;
        document.querySelector('.car-listings').insertAdjacentHTML('beforeend', newCarItem);
        toggleAddCarForm();
    };

    if (carImageFile) {
        reader.readAsDataURL(carImageFile);
    } else {
        alert("Please upload a car image.");
    }
}
