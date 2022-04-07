import Icon from "./Icon";

// Packages
import moment from "moment";

const Post = ({ posts }) => {
  return (
    <div className="grid">
      {posts.map((post) => {
        return (
          <article className="card">
            <div className="post-info">
              <div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.body}</p>
              </div>
              <div className="meta-date">{moment().format("ll")}</div>
            </div>
            <div className="post-meta">
              <span className="meta-comment">
                <Icon name="chat-square-text" size={16} color="#2e2e2e" />
                {post.comment}
              </span>
              <span className="meta-like">
                <Icon name="heart" size={16} color="#2e2e2e" />
                {post.vote}
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Post;
