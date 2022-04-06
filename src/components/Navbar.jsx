import { useContext } from "react";
import { UserContext } from "../context/User";

const Navbar = () => {
  // const { user } = useContext(UserContext);
  const user = "Sarah";

  return (
    <div className="navbar row">
      {user ? (
        <div>
          Welcome, <span className="profile-name">{user}</span>
        </div>
      ) : (
        <a href="/users" className="profile-link">
          Select Profile
        </a>
      )}
      {user && <a href="/users">Switch Profile</a>}
    </div>
  );
};

export default Navbar;
