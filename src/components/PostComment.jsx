const PostComment = ({ avatar, username }) => {
  return (
    <>
      <div className="loggedin-info">
        <h3>Leave a comment</h3>
        <div className="loggedin-user-info">
          <img src={avatar} alt={username} />
          <div>
            You're logged in as <strong>{username}</strong>
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
  );
};

export default PostComment;
