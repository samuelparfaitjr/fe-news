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
  if (error) return <Error error={error} />;

  const handleClick = (e) => {
    setUser(e.target.id);
    console.log(e.target.id)
  };

  return (
    <main className="user-page">
      <div className="user-list-container">
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.username}>
              <button id={user.username} onClick={handleClick}>
                <img src={user.avatar_url} alt={user.username}></img>
                <div className="user-avatar-label">{user.username}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Users;
