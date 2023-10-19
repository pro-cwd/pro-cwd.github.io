export function themeMenu (data) {
    const themeResult = document.getElementById("theme-title");
    const themes = data.results;

    themes.forEach((theme) => {
        const apiData = {
            buttonCount: 0, // Replace with the actual count
            linkCount: 0,   // Replace with the actual count
        };
        
          // Create the button HTML
        const buttonElement = document.createElement("button");
        const dropElement = document.createElement("div");
        buttonElement.setAttribute("class", "dropdown-btn lineArrow");
        dropElement.setAttribute("class", "dropdown-container");
        buttonElement.innerHTML = `
            ${theme.keywords[0]}
            <div class="arrow-container">
                <div class="arrow"><span>${apiData.buttonCount}</span><img src="./images/right.svg" alt="flecha"></div>
            </div>
            `;
        dropElement.innerHTML = `
            <a href="${theme.link}">${theme.creator[0]}<span>${apiData.linkCount}</span></a>
        `;
            
            themeResult.appendChild(buttonElement, dropElement);
            // return combinedHTML;
        });
        
}