


// rotate arrow

const lineArrow = document.getElementById("lineArrow");
const arrow = document.getElementById("rotateArrow");
let rotated = false;

lineArrow.addEventListener("click", () => {
    if (!rotated) {
        arrow.style.transform = "rotate(90deg)";
        rotated = true;
    } else {
        arrow.style.transform = "rotate(0deg)";
        rotated = false;
    }
});
