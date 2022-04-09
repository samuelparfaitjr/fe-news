import { useContext } from "react";
import { UserContext } from "../context/User";
import panda from "../assets/avatar.jpeg";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [username, avatar] = user || [];

  return (
    <nav className="navbar row">
      <div></div>
      <div className="navbar-controls">
        <div className="profile-info">
          <img
            src={user ? avatar : panda}
            alt={username}
            className="profile-avatar"
          />
          <span className="profile-name">
            Welcome!, <strong>{username || 'Panda'}</strong>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
