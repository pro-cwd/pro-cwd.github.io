export function themeMenu (data) {
    const themeResult = document.getElementById("theme-title");
    const themes = data.results;

    themes.forEach((theme) => {
        const apiData = {
            buttonCount: 0, // Replace with the actual count
            linkCount: 0,   // Replace with the actual count
        };
        
          // Create the button HTML
        const buttonHTML = `
            <button class="dropdown-btn lineArrow">${theme.keywords[0]}
                <div class="arrow-container">
                <div class="arrow"><span>${apiData.buttonCount}</span><img src="./images/right.svg" alt="flecha"></div>
                </div>
            </button>
            `;
        
          // Create the dropdown container HTML
            const dropdownContainerHTML = `
            <div class="dropdown-container">
                <a href="${theme.link}">${theme.creator[0]}<span>${apiData.linkCount}</span></a>
            </div>
            `;
        
          // Combine the button and dropdown container HTML
            const combinedHTML = buttonHTML + dropdownContainerHTML;
            themeResult.appendChild(combinedHTML);
            // return combinedHTML;
        });
        
}