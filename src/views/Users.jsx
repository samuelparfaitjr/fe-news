import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api/be-news";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/User";

// Components
import Preloader from "../components/Preloader";
import Error from "./Error";

const Users = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching Data
  useEffect(() => {
    fetchUsers().then((response) => {
      if (response.message) {
        setError(response.message);
      }
      setUsers(response);
      setLoading(false);
    });
  }, []);

  // Show loader if loading
  if (loading) return <Preloader />;
  if (error) return <Error response={error} />;

  const handleClick = (e) => {
    const username = e.target.id;
    const avatar = users.find((user) => user.username === username);
    setUser([username, avatar.avatar_url]);
    const referrer = document.referrer;
    if (referrer) {
      const { pathname } = new URL(referrer);
      navigate(pathname);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="user-page">
      <div className="container">
        <h2 className="section-title">Who are you?</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.username}>
              <img
                src={user.avatar_url}
                className="user-select"
                id={user.username}
                onClick={handleClick}
                alt={user.username}
              />
              <div className="avatar-label">{user.username}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Users;
