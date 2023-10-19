// read later menu

// Add event listeners to "READ LATER" buttons
const readLaterButtons = document.querySelectorAll('.read-later-button');

readLaterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const menuItem = this.parentElement.querySelector('span').textContent;
        saveMenuItem(menuItem);
    });
});

// Function to save the menu item to local storage
function saveMenuItem(title) {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedItems.push(title);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    updateSidebar();
}

// Function to update the sidebar menu
function updateSidebar() {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    const sidebar = document.getElementById('saved-items');
    sidebar.innerHTML = '';

    savedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.addEventListener('click', function () {
            openLink(item); // Implement the openLink function to handle navigation.
        });
        sidebar.appendChild(listItem);
    });
}

// Implement the openLink function to handle navigation when a sidebar item is clicked
function openLink(item) {
    // You need to define the URLs for each menu item and navigate to the appropriate page.
    // You can use a switch statement or an object mapping for this.
    switch (item) {
        case "Menu Item 1":
            window.location.href = "link_to_menu_item_1.html";
            break;
        case "Menu Item 2":
            window.location.href = "link_to_menu_item_2.html";
            break;
        // Add more cases as needed.
    }
}

// Initialize the sidebar on page load
updateSidebar();

