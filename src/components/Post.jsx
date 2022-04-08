import Icon from "./Icon";
import { Link } from "react-router-dom";

// Helpers
import * as utils from "../utils/helpers";

// Packages
import moment from "moment";

const Post = ({ posts, handleDelete }) => {
  // const user = "grumpy19";

  return (
    <div className="grid">
      {posts.length === 0 ? (
        <div className="no-post">
          <Icon name="newspaper" size={60} color="#c5c5c5" />
          <div className="no-post-message">
            Articles you write will show here.
          </div>
        </div>
      ) : (
        posts.map((post) => {
          return (
            <Link to={`/articles/${post.article_id}`} key={post.article_id}>
              <article className="card">
                <div className="post-info">
                  <div>
                    <h3 className="post-title">
                      {utils.excerpt(post.title, 30)}
                    </h3>
                    <p className="post-excerpt">
                      {utils.excerpt(post.body, 50)}
                    </p>
                  </div>
                  <div className="meta-date">
                    {moment(post.created_at, "YYYYMMDD").fromNow()}
                  </div>
                </div>
                <div className="post-meta">
                  <span className="meta-comment">
                    <Icon name="chat-square-text" size={16} color="#2e2e2e" />
                    {post.comment_count}
                  </span>
                  <span className="meta-like">
                    <Icon name="heart" size={16} color="#2e2e2e" />
                    {post.votes}
                  </span>
                  {/* {user && (
                  <span className="meta-like">
                  <button
                  className="btn-delete"
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                  >
                  <Icon name="trash" size={16} color="#2e2e2e" />
                  </button>
                  </span>
                )} */}
                </div>
              </article>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Post;
