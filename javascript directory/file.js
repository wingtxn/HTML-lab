document.addEventListener("DOMContentLoaded", function () {
    
    //-- Footer Year --
    const fYear = document.getElementById("footerYear");
    const d = new Date();
    if (fYear) {
        fYear.textContent = d.getFullYear();
    } else {
        console.warn("Footer year element (#footerYear) not found.");
    }

    //-- Greeting ------
    const greeting = document.getElementById("greetings");
    if (greeting) {
        const currentHour = new Date().getHours();

        let greetingText;
        let greetingClass;

        if (currentHour < 8) {
            greetingText = "Rise & Shine!";
            greetingClass = "early-morning";
        } else if (currentHour < 12) {
            greetingText = "Good Morning!";
            greetingClass = "morning";
        } else if (currentHour < 17) {
            greetingText = "Good Afternoon!";
            greetingClass = "afternoon";
        } else {
            greetingText = "Good Evening!";
            greetingClass = "evening";
        }

        greeting.textContent = greetingText;
        greeting.classList.add(greetingClass);
    } else {
        console.warn("Greeting element (#greetings) not found.");
    }

    //-- Button Alert ---------
    const alertButton = document.getElementById("btn-alert");
    
    if (alertButton) {
        alertButton.addEventListener("click", function () {
            alert("Don't Forget to Hydrate! Drink Some Water! 💦");
        });
    } else {
        console.warn("Alert button (#btn-alert) not found.");
    }
    if (alertButton) {
        alertButton.addEventListener("mouseover", function () {
            alertButton.innerText = "Stay Hydrated! 💦";
        });
        alertButton.addEventListener("mouseout", function () {
            alertButton.innerText = "Daily Reminder";
        });
    }
    
});