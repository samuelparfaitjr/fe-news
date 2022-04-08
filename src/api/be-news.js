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

// Fetch Single Post
export const fetchPostById = async (articleId) => {
  try {
    const { data } = await beNews.get(`/articles/${articleId}`);
    return data;
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

// Update Vote
export const updateVote = async (voteId, count) => {
  try {
    const voteUpdate = { inc_votes: count };
    const { data } = await beNews.patch(`/articles/${voteId}`, voteUpdate);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
