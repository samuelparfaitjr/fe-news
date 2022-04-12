import Avatar from "../assets/avatar.jpeg";
import Icon from "./Icon";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postComment } from "../api/be-news";

const PostComment = ({
  avatar,
  username,
  articleId,
  setComments,
  comments,
}) => {
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentBody = { username, body };

    if (body === undefined || body === "") {
      setError("Comment cannot be blank");
    } else {
      setLoading(true);
      postComment(commentBody, articleId).then((response) => {
        if (response.message) {
          setServerError(response.message);
          setLoading(false);
        } else {
          setError(null);
          setServerError(null);
          setBody("");
          setSuccess(true);
          setLoading(false);
          setComments([response, ...comments]);
          navigate(
            `/articles/${articleId}?status=success&id=${response.comment_id}`
          );
          setTimeout(() => setSuccess(false), 3000);
        }
      });
    }
  };

  return (
    <>
      {username ? (
        <>
          <div className="loggedin-info">
            <h3>Leave a comment</h3>
            <div className="loggedin-user-info">
              <img src={avatar} alt={username} />
              <div>
                I'm, <strong>{username}</strong>
              </div>
            </div>
            {error && <div className="error">{error}</div>}
            {serverError && (
              <div className="error">
                Oops, we couldn't post your comment{" "}
                <Icon name="emoji-dizzy" size={24} />
              </div>
            )}
            {success && (
              <div className="success">
                Hooray, you have a posted a comment
                <Icon name="check-all" size={24} />
              </div>
            )}
          </div>
          {success ? (
            ""
          ) : (
            <div className="post-form-container">
              <form className="post-form" onSubmit={handleSubmit}>
                <div className="post-form-controls">
                  <textarea
                    value={body || ""}
                    placeholder="Write your message here..."
                    // required
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <button className="btn-post">
                    {loading ? "Wait..." : "Post"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      ) : (
        <div className="loggedin-info">
          <h3>Leave a comment</h3>
          <div className="loggedin-user-info no-profile-comment">
            <img src={Avatar} alt="Guest" />
            <div className="no-profile-message">
              Sorry, you can't leave comments. Switch{" "}
              <Link to="/users" className="no-profile-link">
                <strong>Profile.</strong>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostComment;
