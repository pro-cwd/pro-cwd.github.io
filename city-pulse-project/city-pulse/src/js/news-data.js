const apiKey = "pub_310972aca62cdce0a07f51c386509267aab51";
const country = "ec";
const apiUrl = `https://newsdata.io/api/1/news?country=${country}&apikey=${apiKey}`;

// Function to fetch and display news data
async function fetchNews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);

    if (data.status === "ok") {
      const newsContainer = document.getElementById("news-container");
      const articles = data.data.results;
      console.log(articles);
      articles.forEach((article) => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                 `;

        newsContainer.appendChild(articleElement);
      });
    } else {
      console.error("Error fetching news data:", data.message);
    }
  } catch (error) {
    console.error("An error occurred while fetching news data:", error);
  }
}

// Call the fetchNews function to retrieve and display news data
fetchNews();
