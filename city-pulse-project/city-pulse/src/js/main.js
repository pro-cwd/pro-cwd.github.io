import { dropDown } from "./aside.js";
import NewsFetcher from "./product.mjs";

const apiKey = import.meta.env.VITE_APIKEY;
const country = import.meta.env.VITE_COUNTRY;

const newsFetcher = new NewsFetcher(apiKey, country);
newsFetcher.fetchNews();
dropDown();
