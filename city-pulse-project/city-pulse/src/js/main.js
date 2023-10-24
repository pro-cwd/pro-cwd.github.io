import { dropDown } from "./aside.js";
import NewsFetcher from "./product.mjs";

const apiKey = "pub_310972aca62cdce0a07f51c386509267aab51";
const country = "ec";

const newsFetcher = new NewsFetcher(apiKey, country);
newsFetcher.fetchNews();
dropDown();
