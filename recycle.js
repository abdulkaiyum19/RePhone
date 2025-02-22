document.addEventListener('DOMContentLoaded', function () {
    const recycleForm = document.getElementById('recycle-form');
    const phoneBrand = document.getElementById('phone-brand');
    const phoneCondition = document.getElementById('phone-condition');
    const estimatedPrice = document.getElementById('estimated-price');

    // Function to estimate price based on condition
    function updatePrice() {
        let basePrice = 5000; // Default base price

        if (phoneBrand.value === 'Apple') basePrice = 20000;
        if (phoneBrand.value === 'Samsung') basePrice = 15000;
        if (phoneBrand.value === 'Google') basePrice = 12000;
        if (phoneBrand.value === 'OnePlus') basePrice = 10000;

        let conditionMultiplier = 1;
        if (phoneCondition.value === 'New') conditionMultiplier = 1.0;
        if (phoneCondition.value === 'Good') conditionMultiplier = 0.8;
        if (phoneCondition.value === 'Fair') conditionMultiplier = 0.5;
        if (phoneCondition.value === 'Broken') conditionMultiplier = 0.2;

        estimatedPrice.value = Math.floor(basePrice * conditionMultiplier) + " BDT";
    }

    // Update price when brand or condition changes
    phoneBrand.addEventListener('change', updatePrice);
    phoneCondition.addEventListener('change', updatePrice);

    // Form Submission
    recycleForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let pickupDate = document.getElementById('pickup-date').value;
        let address = document.getElementById('address').value;

        if (phoneBrand.value === "" || phoneCondition.value === "" || pickupDate === "" || address.trim() === "") {
            alert("Please fill all fields correctly.");
            return;
        }

        alert(`🎉 Your recycling request has been submitted!
📦 Phone: ${phoneBrand.value} ${document.getElementById('phone-model').value}
💰 Estimated Price: ${estimatedPrice.value}
📅 Pickup Date: ${pickupDate}
📍 Address: ${address}`);

        recycleForm.reset();
        estimatedPrice.value = "";
    });
});
