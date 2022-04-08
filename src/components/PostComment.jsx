import Avatar from "../assets/avatar.jpeg";
import Post from "./Post";

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
                Hiya, <strong>{username}</strong>
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
            <div>
              Sorry, you can't leave comments. Switch{" "}
              <a href="/users" className="no-profile-link">
                <strong>Profile.</strong>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostComment;
