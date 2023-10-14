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
    const articleElement = document.createElement("div");
    articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.link}" target="_blank">Read more</a>
                `;

    newsContainer.appendChild(articleElement);
  });
}
