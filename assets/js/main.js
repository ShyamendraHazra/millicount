const targetDate = new Date("November 4, 2024 23:59:59").getTime();

function updateCountdown() {
    const now = Date.now(); // Use Date.now() for better performance
    const timeLeft = targetDate - now; // Calculate remaining time

    // Display remaining time in milliseconds
    document.getElementById("milicount").innerText = timeLeft;

    // Stop if countdown is finished
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById("main_hud").innerText = "...";
    }
}

const timerInterval = setInterval(updateCountdown, 1);