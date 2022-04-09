import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import Icon from "./Icon";

const CreatePost = ({ newPost, setNewPost }) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(() => ({ ...inputs, author: user, [name]: value }));
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (item) => (item.value = "")
    );
    setInputs({ values: [{}] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setNewPost(false);
    }, 2000);

    setTimeout(() => {
      setSuccess("");
    }, 3000);

    const messages = [];

    if (inputs.title === undefined || inputs.title === "") {
      messages.push("Title cannot be blank");
    }

    if (inputs.body === undefined || inputs.body === "") {
      messages.push("Comment cannot be blank");
    }

    if (messages.length > 0) {
      setErrors(messages);
      setSuccess("");
    } else {
      console.log(inputs);
      setSuccess("Success!");
      setErrors([]);
      // createPost(inputs);
      handleReset();
    }
  };

  return (
    <div className={`create-post-container ${newPost ? "active" : ""}`}>
      <div className="create-post-form">
        {" "}
        <h2>Create a post</h2>
        <div className="messages">
          {errors.length > 0 ? (
            <ul className="error">
              {errors.map((error, index) => {
                return <li key={index}>{error}</li>;
              })}
            </ul>
          ) : null}
          {success ? (
            <div className="success">
              Hooray! New post created. <Icon name="check-all" size={24} />
            </div>
          ) : null}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={user || ""} name="author" />
          <div className="form-control">
            <label htmlFor="title">Article title</label>
            <input
              type="text"
              value={inputs.title || ""}
              name="title"
              placeholder="Title"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control select-form">
            <label htmlFor="topic">Select a topic</label>
            <Icon name="chevron-compact-down" size={16} />
            <select
              value={inputs.topic || ""}
              name="topic"
              required
              onChange={handleChange}
            >
              <option defaultValue="Selected topic" disabled hidden>
                Select topic
              </option>
              <option value="cooking">Cooking</option>
              <option value="coding">Coding</option>
              <option value="football">Football</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="topic">Write a post</label>
            <textarea
              value={inputs.body || ""}
              name="body"
              placeholder="Write your post here..."
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn-post">Add Post</button>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default CreatePost;
