import { displayResults } from "./news-data.mjs";
import { themeMenu } from "./filterMenu.mjs" // Import the displayResults function

export default class NewsFetcher {
  constructor(apiKey, country) {
    this.apiKey = apiKey;
    this.country = country;
    this.apiUrl = `https://newsdata.io/api/1/news?country=${this.country}&apikey=${this.apiKey}`;
  }

  async fetchNews() {
    try {
      const response = await fetch(this.apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log("datos", data);
        displayResults(data);
        themeMenu(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
}