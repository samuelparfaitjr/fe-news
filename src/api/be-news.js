import axios from "axios";

const beNews = axios.create({
  baseURL: "https://be-news-api.herokuapp.com/api",
});

// Fetching Posts
export const fetchPosts = async () => {
  try {
    const {
      data: { articles },
    } = await beNews.get("/articles");
    return articles;
  } catch (error) {
    return error.response.data;
  }
};

// Fetching Users
export const fetchUsers = async () => {
  try {
    const {
      data: { users },
    } = await beNews.get("/users");
    return users;
  } catch (error) {
    return error.response.data;
  }
};
