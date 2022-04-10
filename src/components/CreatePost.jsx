import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import { createArticle } from "../api/be-news";
import { useNavigate } from "react-router-dom";

import Icon from "./Icon";
import Preloader from "./Preloader";

const CreatePost = ({ newPost, setNewPost }) => {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useContext(UserContext);
  const [author] = user || [];
  const navigate = useNavigate();

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (item) => (item.value = "")
    );
    setTitle("");
    setTopic("");
    setBody("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = { title, topic, body, author };

    const messages = [];

    if (title === undefined || title === "") {
      messages.push("Title cannot be blank");
    }

    if (body === undefined || body === "") {
      messages.push("Message cannot be blank");
    }

    if (topic === undefined || topic === "") {
      messages.push("You must choose a topic");
    }

    if (messages.length > 0) {
      setErrors(messages);
      setSuccess("");
    } else {
      setLoading(true);
      createArticle(postData).then((response) => {
        if (response.message) {
          setServerError(response.message);
        } else {
          setSuccess("Success!");
          setServerError("");
          setTimeout(() => {
            setNewPost(false);
            navigate("/");
          }, 2000);

          setTimeout(() => {
            setSuccess("");
          }, 3000);
          setErrors([]);
          setLoading(false);
        }
      });
      handleReset();
    }
  };

  return (
    <div className={`create-post-container ${newPost ? "active" : ""}`}>
      <div className="create-post-form">
        {" "}
        <h2>Create a post</h2>
        <div className="messages">
          {/* Validation Errors */}
          {errors.length > 0 ? (
            <ul className="error">
              {errors.map((error, index) => {
                return <li key={index}>{error}</li>;
              })}
            </ul>
          ) : null}

          {/* Server Errors */}
          {serverError ? (
            <div className="server-error">
              <span>{serverError}</span>{" "}
              <Icon name="exclamation-octagon-fill" size={24} color="red" />
            </div>
          ) : null}

          {/* Success Message */}
          {success ? (
            <div className="success">
              Hooray! New post created. <Icon name="check-all" size={24} />
            </div>
          ) : null}
        </div>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="form-control">
            <label htmlFor="title">Article title</label>
            <input
              type="text"
              value={title || ""}
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Topic */}
          <div className="form-control select-form">
            <label htmlFor="topic">Select a topic</label>
            <Icon name="chevron-compact-down" size={16} />
            <select
              value={topic || ""}
              required
              onChange={(e) => setTopic(e.target.value)}
            >
              <option defaultValue="null">Choose a topic</option>
              <option value="cooking">Cooking</option>
              <option value="coding">Coding</option>
              <option value="football">Football</option>
            </select>
          </div>

          {/* Body */}
          <div className="form-control">
            <label htmlFor="article">Write an article</label>
            <textarea
              value={body || ""}
              placeholder="Start typing here..."
              required
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="btn-post">
            {loading ? 'Sending...' : "Add Post"}
          </button>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default CreatePost;
