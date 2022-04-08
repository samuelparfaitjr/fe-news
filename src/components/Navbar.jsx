import { useContext } from "react";
import { UserContext } from "../context/User";
import panda from "../assets/avatar.jpeg";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [username, avatar] = user || [];

  return (
    <nav className="navbar row">
      <div className="profile-info">
        <div>
          Hi,{" "}
          <span className="profile-name">{user ? username : "Guest"}</span>
        </div>
        <img src={user ? avatar : panda} alt={username} className="profile-avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
