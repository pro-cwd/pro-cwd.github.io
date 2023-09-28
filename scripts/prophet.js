const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const prophetCardTemplate = document.createElement('template');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData(url);

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthDays = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    //Build the h3 content out to show the birthdays
    birthDays.textContent = `Date of Birth: ${prophet.birthdate}`;
    //Build the h3 content out to show the place both
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    // Give the template element an id of "prophet-card"
    prophetCardTemplate.id = 'prophet-card';
    
    card.setAttribute('class', 'card')
    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(birthDays);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    
    prophetCardTemplate.content.appendChild(card);
    // Append the template to the document's body or any other appropriate location
    document.body.appendChild(prophetCardTemplate);
    
  }); // end of arrow function and forEach loop
  let tpl = document.getElementById('prophet-card');
  document.importNode(tpl.content, true);
  
  let target = document.getElementById('target');
  let imported = document.importNode(tpl.content, true);
  target.appendChild(imported);
}


