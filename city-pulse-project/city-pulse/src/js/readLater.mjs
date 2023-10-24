// Define an array to store the read later items
let readLaterItems = [];

export function readLater() {
 // Function to save the read later item to a JSON file
function saveReadLaterItem(item) {
    readLaterItems.push(item);
   // Assuming you want to save to local storage, you can replace this with your server endpoint
    localStorage.setItem('readLaterItems', JSON.stringify(readLaterItems));
}

 // Function to display the read later items in the dropdown container
function displayReadLaterItems() {
    const dropdownContainer = document.querySelector('.dropdown-container');
    dropdownContainer.innerHTML = '';

readLaterItems.forEach((item, index) => {
    const listItem = document.createElement('div');
    listItem.innerHTML = `
        <span class="title">${item.title}</span>
        <a href="${item.link}">Link ${index + 1}</a>
        <span class="remove-item" data-index="${index}">X</span>
        `;
    dropdownContainer.appendChild(listItem);
});
}
 // Function to handle removing a read later item
 function removeReadLaterItem(index) {
    readLaterItems.splice(index, 1);
    localStorage.setItem('readLaterItems', JSON.stringify(readLaterItems));
    displayReadLaterItems();
  }

  // Add click event listeners to all elements with the class "read_later"
  const readLaterButtons = document.querySelectorAll('.read_later');
  readLaterButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const titleElement = button.closest('.grid__box').querySelector('.title_t');
      const title = titleElement.innerText;
      const link = index; // You can customize this part

      if (title && link) {
        saveReadLaterItem({ title, link });
        displayReadLaterItems();
      }
    });
  });

  // Add click event listener for removing items
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
      const index = e.target.getAttribute('data-index');
      removeReadLaterItem(index);
    }
  });

  // Load read later items from local storage on page load
  const storedItems = JSON.parse(localStorage.getItem('readLaterItems'));
  if (storedItems) {
    readLaterItems = storedItems;
    displayReadLaterItems();
  }
}