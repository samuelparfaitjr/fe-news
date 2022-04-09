import Avatar from "../assets/avatar.jpeg";
import { Link } from "react-router-dom";

const PostComment = ({ avatar, username }) => {
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
          </div>
          <div className="post-form-container">
            <form className="post-form">
              <div className="post-form-controls">
                <textarea placeholder="Write your message here..." />
                <button className="btn-post">Post</button>
              </div>
            </form>
          </div>
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
