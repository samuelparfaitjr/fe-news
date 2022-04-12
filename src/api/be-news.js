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

// Fetching Comments
export const fetchComments = async (articleId) => {
  try {
    const {
      data: { comments },
    } = await beNews.get(`/articles/${articleId}/comments`);
    return comments;
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

export const createArticle = async (postData) => {
  try {
    const { data } = await beNews.post("/articles", postData);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const postComment = async (comment, articleId) => {
  try {
    const { data } = await beNews.post(
      `/articles/${articleId}/comments`,
      comment
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const { data } = await beNews.delete(`/comments/${commentId}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteArticle = async (articleId) => {
  try {
    const { data } = await beNews.delete(`/articles/${articleId}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
