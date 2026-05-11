
export function checkDate() {
  // Get the date value from the HTML tag
  const dateTag = document.getElementById("dateTag");
  const dateText = dateTag.innerText;
  
  // Get the current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  
  const formattedCurrentDate = `${year}-${month}-${day}`;
  const extractedDate = extractDateFromText(dateText);
  const afterExtractDate = `${extractedDate.year}-${extractedDate.month}-${extractedDate.day}`;

  // Compare the date with the current date
  if (afterExtractDate === formattedCurrentDate) {
    document.querySelector(".data__status").textContent = "Hoy";
  } else {
    document.querySelector(".data__status").textContent = afterExtractDate;
    console.log(afterExtractDate);
  }
  return formattedCurrentDate;
}

function extractDateFromText(inputText) {
  // Define a regular expression pattern to match a date in yyyy-mm-dd format
  const datePattern = /(\d{4})-(\d{2})-(\d{2})/;

  // Use the regular expression to search for a date in the input text
  const match = datePattern.exec(inputText);

  if (match) {
    // The first capturing group (match[1]) contains the year, match[2] contains the month, and match[3] contains the day
    const year = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const day = parseInt(match[3], 10);

    // Return the extracted date as an object
    return {
      year,
      month,
      day,
    };
  } else {
    // If no date is found in the input, return null or handle the error as needed
    return null;
  }
}

//call fetch API


