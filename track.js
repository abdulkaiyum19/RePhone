document.addEventListener('DOMContentLoaded', function () {
    const trackForm = document.getElementById('track-form');
    const trackingNumber = document.getElementById('tracking-number');
    const trackingResult = document.getElementById('tracking-result');

    const trackingData = {
        "123456": "📦 Order Picked Up - On the way 🚚",
        "789012": "✅ Delivered - Thank You! 🎉",
        "345678": "⏳ Processing - Pickup Scheduled",
        "901234": "🔄 Order Received - Awaiting Pickup"
    };

    trackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let trackNum = trackingNumber.value.trim();

        if (trackNum === "") {
            trackingResult.textContent = "⚠ Please enter a tracking number!";
            trackingResult.style.color = "red";
            trackingResult.style.display = "block";
            return;
        }

        trackingResult.style.color = "#ffcc00";
        trackingResult.textContent = trackingData[trackNum] || "❌ Tracking Number Not Found!";
        trackingResult.style.display = "block";
    });
});
