import { useContext } from "react";
import { UserContext } from "../context/User";
import Avatar from "../assets/avatar.jpeg";

const Navbar = () => {
  // const { user } = useContext(UserContext);
  const user = "Grumpy19";

  return (
    <nav className="navbar row">
      {user ? (
        <div className="profile-info">
          <div>
            Hi, <span className="profile-name">{user}</span>
          </div>
          <div className="profile-avatar">
            <img src={Avatar} alt={user} />
          </div>
        </div>
      ) : (
        <a href="/users" className="profile-link">
          Select Profile
        </a>
      )}
      {user && <a href="/users">Switch Profile</a>}
    </nav>
  );
};

export default Navbar;
