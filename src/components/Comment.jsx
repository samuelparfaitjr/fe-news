import { useState, useEffect, useContext } from "react";
import { fetchComments, deleteComment, fetchUsers } from "../api/be-news";
import { UserContext } from "../context/User";

// Components
import Error from "../views/Error";
import Preloader from "../components/Preloader";
import Icon from "./Icon";
import PostComment from "../components/PostComment";

// Libraries
import moment from "moment";

const Comment = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    fetchUsers().then((response) => {
      if (response.message) {
        setError(response.message);
      }
      setUsers(response);
      setLoading(false);
    });
  }, []);

  if (error) return <Error response={error} />;
  if (loading) return <Preloader />;

  const handleClick = (e) => {
    const commentId = parseInt(e.target.id);

    deleteComment(commentId).then((response) => {
      if (response.message) {
        setServerError(response.message);
      } else {
        const updatedComments = comments.filter(
          (comment) => comment.comment_id !== commentId
        );
        setComments(updatedComments);
      }
    });
  };

  if (serverError) return <Error response={serverError} />;

  return (
    <>
      <section className="comment">
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
        ) : (
          comments.map((comment) => {
            return (
              <div key={comment.comment_id} className="comment-box">
                {/* <div className="author-thumbnail">
                  <img
                    src={users
                      .filter((user) => user.username === comment.author)
                      .map(user => user.avatar_url)} alt="Author"
                  />
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
                      <button
                        className="btn-delete"
                        id={comment.comment_id}
                        onClick={handleClick}
                      >
                        <Icon name="x-circle-fill" size={18} color="#e34f49" />
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
          })
        )}
      </section>
      <section className="leave-comment">
        <PostComment
          username={username}
          avatar={avatar}
          articleId={articleId}
          setComments={setComments}
          comments={comments}
        />
      </section>
    </>
  );
};

export default Comment;
