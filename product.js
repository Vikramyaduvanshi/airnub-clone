
document.addEventListener("DOMContentLoaded", function () {
    const calendarDays = document.querySelectorAll(".month td:not(.days td)"); // Select all date cells except headers
    const checkInDisplay = document.querySelector(".table td:nth-child(1) .date");
    const checkOutDisplay = document.querySelector(".table td:nth-child(2) .date");
    const selectedDateDisplay = document.querySelector(".selected-date");
    const totalPriceDisplay = document.querySelector(".total span");
    const pricePerNight = 25999; // Fixed price per night

    let today = new Date();
    let currentDay = today.getDate();

    let checkIn = null;
    let checkOut = null;

    // Disable past dates dynamically
    calendarDays.forEach((day) => {
        let dayNumber = parseInt(day.textContent.trim());
        if (!isNaN(dayNumber) && dayNumber < currentDay) {
            day.classList.add("disabled");
        }
    });

    function resetCalendar() {
        calendarDays.forEach((day) => {
            day.classList.remove("selected", "in-range");
        });
    }

    function updateCalendar() {
        resetCalendar();
        if (checkIn) checkIn.classList.add("selected");
        if (checkOut) checkOut.classList.add("selected");

        if (checkIn && checkOut) {
            let inRange = false;
            calendarDays.forEach((day) => {
                if (day === checkIn) inRange = true;
                if (inRange && day !== checkIn && day !== checkOut) {
                    day.classList.add("in-range");
                }
                if (day === checkOut) inRange = false;
            });

            // Get selected dates
            let checkInDate = checkIn.textContent.trim();
            let checkOutDate = checkOut.textContent.trim();

            // Update UI with selected dates
            checkInDisplay.textContent = `8/${checkInDate}/2023`;
            checkOutDisplay.textContent = `8/${checkOutDate}/2023`;
            selectedDateDisplay.textContent = `Aug ${checkInDate}, 2023 - Aug ${checkOutDate}, 2023`;

            // Calculate and update total price
            let nights = parseInt(checkOutDate) - parseInt(checkInDate);
            let totalPrice = nights * pricePerNight;
            totalPriceDisplay.textContent = `₹${totalPrice}`;
        }
    }

    calendarDays.forEach((day) => {
        day.addEventListener("click", function () {
            if (this.classList.contains("disabled")) return; // Prevent clicking past dates

            if (!checkIn || (checkIn && checkOut)) {
                checkIn = this;
                checkOut = null;
            } else if (!checkOut) {
                checkOut = this;
            }
            updateCalendar();
        });
    });
});


document.querySelector(".btn.btn--pink").addEventListener("click", function() {
    window.location.href = "./checkout/checkout.html"; // Replace with your target file
});



