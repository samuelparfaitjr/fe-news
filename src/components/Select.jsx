import { Link } from "react-router-dom";

// Icons
import Icon from "./Icon";

const Select = ({ posts, handleSort, active }) => {
  return (
    <div className="select">
      <div className="select-content">
        <button onClick={handleSort}>
          <Icon name={`${active ? "x-lg" : "sliders"}`} size="inherit" />
          <span>Filter</span>
        </button>
        <ul className={`select-options ${active ? "visible" : ""}`}>
          <h4>Sort by</h4>
          <li>
            <Link to={`?sort_by=created_at&order=desc`} onClick={handleSort}>
              Newest
            </Link>
          </li>
          <li>
            <Link to={`?sort_by=created_at&order=asc`} onClick={handleSort}>
              Oldest
            </Link>
          </li>
          <li>
            <Link to={`?sort_by=votes&order=desc`} onClick={handleSort}>
              Votes (Highest)
            </Link>
          </li>
          <li>
            <Link to={`?sort_by=votes&order=asc`} onClick={handleSort}>
              Votes (Lowest)
            </Link>
          </li>
        </ul>
      </div>
      <div>{posts.length} Articles</div>
    </div>
  );
};

export default Select;
