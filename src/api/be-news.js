import axios from "axios";

const beNews = axios.create({
  baseURL: "https://be-news-api.herokuapp.com/api",
});

// Fetching Posts
export const fetchPosts = async (slug, sort) => {
  try {
    const {
      data: { articles },
    } = await beNews.get(`/articles${sort || ""}`, { params: { topic: slug } });
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
