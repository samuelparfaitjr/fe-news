import { useState, useEffect, useContext } from "react";
import { fetchComments } from "../api/be-news";
import { UserContext } from "../context/User";

// Components
import Error from "../views/Error";
import Preloader from "../components/Preloader";
// import LeaveComment from "../components/LeaveComment";

import moment from "moment";
import Icon from "./Icon";

const Comment = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);
  const [username, avatar] = user || [];

  useEffect(() => {
    fetchComments(articleId).then((response) => {
      if (response.message) {
        setError(response.message);
      }
      setComments(response);
      setLoading(false);
    });
  }, [articleId]);

  if (error) return <Error response={error} />;
  if (loading) return <Preloader />;

  return (
    <>
      <h3 className="section-title comment-section-title">
        {comments.length} <span>Comments</span>
      </h3>
      {comments.length === 0 ? (
        <div className="no-post">
          <Icon name="newspaper" size={60} color="#c5c5c5" />
          <div className="no-post-message">
            Comments you post will appear here.
          </div>
        </div>
      ) : comments.map((comment) => {
        return (
          <div key={comment.comment_id} className="comment-box">
            {/* <div className="author-thumbnail">
              <img src={avatar} alt={comment.author} />
            </div> */}
            <div className="comment-info">
              <div className="author-meta">
                <div>
                  <span className="meta-author">by {comment.author}</span>
                  <span className="meta-date">
                    {" "}
                    • {moment(comment.created_at).fromNow()}
                  </span>
                </div>
                {user && username === comment.author ? (
                  <button className="btn-delete">
                    <Icon name="x-circle-fill" size={18} color="#e47336" />
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="comment-content">{comment.body}</div>
            </div>
            {user && comment.author === user ? (
              <div className="button-area">
                <button
                  id={comment.comment_id}
                  className="comment-delete-button"
                  aria-label="button"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      {/* <LeaveComment articleId={id} setter={setNewComment} /> */}
    </>
  );
};

export default Comment;
