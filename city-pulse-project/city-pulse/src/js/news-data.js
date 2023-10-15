import { checkDate } from "./utils.mjs";

const apiKey = "pub_310972aca62cdce0a07f51c386509267aab51";
const country = "ec";
const apiUrl = `https://newsdata.io/api/1/news?country=${country}&apikey=${apiKey}`;

// Function to fetch and display news data
async function fetchNews() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
// Call the fetchNews function to retrieve and display news data
fetchNews();

function displayResults(data) {
  const newsContainer = document.getElementById("news-container");
  const articles = data.results;

  articles.forEach((article) => {
    const sectionElement = document.createElement("section");
    sectionElement.setAttribute("class", "sec__margin");
    sectionElement.innerHTML = `
            <div class="banner__title">
                <h1>${article.keywords[0]}</h1>
            </div>
            <h4>Titulares</h4>
            <div class="section__news">
                <h5 class="section__data">${article.country[0]}</h5>
                <div class="grid__box">
                    <input class="grid__check check-size" type="checkbox">
                    <div class="grid__text">${article.title}</div>
                    <small class="grid__data flex__data">
                        <div id="dateTag" class="date">${article.pubDate}</div>
                        <div class="publish">${article.source_id}</div>
                    </small>
                    <a href="${article.link}" target="_blank">Read more</a>
                    <div class="grid__img">
                        <img style="background-color: black;" width="186" height="112" src="./images/Image1.png" alt="img. new">
                    </div>
                </div>
            </div>
                `;
    checkDate();
    newsContainer.appendChild(sectionElement);
  });
}
