    
    // Get the range input and rating label
    const ratingInput = document.getElementById('rating');
    const ratingLabel = document.getElementById('ratingLabel');
    const kp1 = document.querySelector("#password");
    const kp2 = document.querySelector("#confirmPassword");
    const message = document.querySelector("#formmessage");
    const email = document.getElementById("email").value;
    
    kp2.addEventListener("focusout", checkSame);
    
    // This should be refactored.
    function checkSame() {
        if (kp1.value !== kp2.value) {
            message.textContent = "❗Key passwords DO NOT MATCH!";
            message.style.display = "block";
            kp2.style.backgroundColor = "#fff0f3";
            kp2.value = "";
            kp2.focus();
        } else {
            message.style.display = "none";
            kp2.style.backgroundColor = "#fff";
            kp2.style.color = "#000";
        }
}


    
    // Update the rating label when the range input value changes
    ratingInput.addEventListener('input', function() {
      ratingLabel.innerHTML = 'Rating <small>(values from 1 to 10)</small>: ' + ratingInput.value;
    });