import { checkDate } from "./utils.mjs";
import  { readLater } from "./readLater.mjs";

export function displayResults(data) {
    const newsContainer = document.getElementById("news-container");
    const articles = data.results;


    articles.forEach((article) => {
        const sectionElement = document.createElement("section");
        sectionElement.setAttribute("class", "sec__margin");
        sectionElement.innerHTML = `
        <div class="banner__title">
            <h2>${article.keywords[0]}</h2>
        </div>
        <h4>Titulares</h4>
        <div class="section__news">
            <h5 class="section__data data__status"></h5>
            <div class="grid__box">
            <button class="read-later-button read_later"><i class="material-icons">bookmark_border</i></button>
            <div class="grid__text title_t">${article.title}</div>
            <small class="grid__data flex__data">
                <div id="dateTag" class="date">${article.pubDate}</div>
                <div class="publish">${article.source_id}</div>
            </small>
            <a href="${article.link}" target="_blank">Read more</a>
            <div class="grid__img">
                <img style="background-color: black;" width="186" height="112" src="./images/Image1.png" alt="img. new">
            </div>
        </div>
        `;
        newsContainer.appendChild(sectionElement);
    });
checkDate();
readLater();
}
export const article_link = articles.link