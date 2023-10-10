// rotate arrow

// const lineArrow = document.querySelector(".lineArrow")
// const arrow = document.querySelector(".rotateArrow");
// let rotated = false;

// lineArrow.addEventListener("click", () => {
//     if (!rotated) {
//         arrow.style.transform = "rotate(90deg)";
//         rotated = true;
//     } else {
//         arrow.style.transform = "rotate(0deg)";
//         rotated = false;
//     }
// });

// script.js

// // Get all the elements with the "highlightable" class
// const highlightableElements = document.querySelectorAll(".highlightable");

// // Add a click event listener to each element
// highlightableElements.forEach((element) => {
//     element.addEventListener("click", () => {
//         // Toggle the "highlighted" class
//         element.classList.toggle("highlighted");
//         document.getElementById("thisDropdown").classList.toggle("show");

//         // Remove the "highlighted" class from other elements
//         highlightableElements.forEach((el) => {
//             if (el !== element) {
//                 el.classList.remove("highlighted");
//             }
//         });
//     });
// });

// // Handle clicks outside of the text lines
// window.onclick = function(event) {
//     if (!event.target.matches('.highlightable')) {
//         let dropdowns = document.getElementsByClassName("highlightable");
//         let i;
//         for (i = 0; i < dropdowns.length; i++) {
//             let openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('highlighted')) {
//                 openDropdown.classList.remove('highlighted');
//             }
//         }
//     }
// };

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


