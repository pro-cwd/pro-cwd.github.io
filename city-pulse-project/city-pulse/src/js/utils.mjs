function checkDate() {
  // Get the date value from the HTML tag
  const dateTag = document.getElementById("dateTag");
  const dateText = dateTag.innerText;

  // Get the current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedCurrentDate = `${year}-${month}-${day}`;

  // Compare the date with the current date
  if (dateText === formattedCurrentDate) {
    console.log("Today");
  } else {
    console.log(dateText);
  }
}

checkDate();
