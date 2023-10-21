import { dropDown } from "./aside";

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
            const relatedThemes = themes.filter(t => t.keywords[0] === themeKeyword);
            const count = relatedThemes.length;

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
            const themeList = document.createElement("ul");
            relatedThemes.forEach((relatedTheme) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${relatedTheme.link}">${relatedTheme.title}</a>`;
                themeList.appendChild(listItem);
            });
            dropElement.appendChild(themeList);
            themeResult.appendChild(buttonElement);
            themeResult.appendChild(dropElement);
        }
    });
    dropDown();
}


