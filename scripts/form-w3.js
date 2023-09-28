document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        
        // Append the current date as an additional named field
        const currentDate = new Date();
        formData.append("currentDate", currentDate.toISOString());

        // Log the form data to the console
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    });
});
