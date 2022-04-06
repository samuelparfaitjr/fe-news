import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics/coding">
            <span>Coding</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics/cooking">
            <span>Cooking</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics/football">
            <span>Football</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
