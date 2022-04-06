import Icon from "./Icon";

// Packages
import moment from "moment";

const Post = ({ title, body, date, comment, vote }) => {
  return (
    <article>
      <div>
        <h3 className="post-title">{title}</h3>
        <p className="post-excerpt">{body}</p>
      </div>
      <div className="post-meta">
        <span>
          <Icon name="clock" size={18} color="#2e2e2e" />
          {moment().format("ll")}
        </span>
        <span>
          <Icon name="chat-square-text" size={16} color="#2e2e2e" />
          {comment}
        </span>
        <span>
          <Icon name="heart" size={16} color="#2e2e2e" />
          {vote}
        </span>
      </div>
    </article>
  );
};

export default Post;
