import Icon from "./Icon";

// Packages
import moment from "moment";

const Post = ({ title, body, date, comment, vote }) => {
  return (
    <article className="card">
      <div className="post-info">
        <div>
          <h3 className="post-title">{title}</h3>
          <p className="post-excerpt">{body}</p>
        </div>
        <div className="meta-date">{moment().format("ll")}</div>
      </div>
      <div className="post-meta">
        <span className="meta-comment">
          <Icon name="chat-square-text" size={16} color="#2e2e2e" />
          {comment}
        </span>
        <span className="meta-like">
          <Icon name="heart" size={16} color="#2e2e2e" />
          {vote}
        </span>
      </div>
    </article>
  );
};

export default Post;
