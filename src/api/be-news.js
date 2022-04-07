import axios from "axios";

const beNews = axios.create({
  baseURL: "https://be-news-api.herokuapp.com/api",
});

// Fetching Posts
export const fetchPosts = async () => {
  try {
    const {
      data: { articles },
    } = await beNews.get("/articless");
    return articles;
  } catch (error) {
    return error;
  }
};
