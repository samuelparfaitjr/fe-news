import { useContext } from "react";
import { UserContext } from "../context/User";
import guest from "../assets/avatar.png";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [username, avatar] = user || [];

  return (
    <nav className="navbar row">
      <div></div>
      <div className="navbar-controls">
        <div className="profile-info">
          <img
            src={user ? avatar : guest}
            alt={username}
            className="profile-avatar"
          />
          <span className="profile-name">
            Welcome!, <strong>{username || 'Guest'}</strong>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
