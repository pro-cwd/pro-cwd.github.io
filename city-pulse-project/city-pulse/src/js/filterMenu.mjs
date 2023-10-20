
  export function themeMenu(data) {
    const themeResult = document.getElementById("theme-title");
    const themes = data.results;

    // Use a Set to keep track of unique parent content
    const uniqueParentContent = new Set();
    
    themes.forEach((theme) => {
        const themeKeyword = theme.keywords[0];
        
        // Check if the parent content is already added
        if (!uniqueParentContent.has(themeKeyword)) {
            // If not added, add it to the Set
            uniqueParentContent.add(themeKeyword);

            // Count the number of times this parent content is repeated
            const count = themes.filter(t => t.keywords[0] === themeKeyword).length;

            const apiData = {
                buttonCount: count, // Set the count
                linkCount: 0,       // Replace with the actual count if needed
            };

            // Create the button HTML
            const buttonElement = document.createElement("button");
            const dropElement = document.createElement("i");
            buttonElement.setAttribute("class", "dropdown-btn lineArrow");
            dropElement.setAttribute("class", "dropdown-container");
            buttonElement.innerHTML = `
                ${themeKeyword}
                <i class="arrow-container">
                    <i class="arrow"><span>${apiData.buttonCount}</span><img src="./images/right.svg" alt="flecha"></i>
                </i>
            `;
            dropElement.innerHTML = `
                <a href="${theme.link}">${theme.creator[0]}<span>${apiData.linkCount}</span></a>
            `;
            
            themeResult.appendChild(buttonElement);
            themeResult.appendChild(dropElement);
        }
    });
}


