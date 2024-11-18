document.addEventListener("DOMContentLoaded", function () {
    
    //-- Footer Year --
    const fYear = document.getElementById("footerYear");
    const d = new Date();
    fYear.textContent = d.getFullYear();

    //-- Greeting ------
    const greeting = document.getElementById("greetings");
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

});
