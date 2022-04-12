import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../api/be-news";
import CreatePost from "../components/CreatePost";

// Component
import Post from "../components/Post";
import Preloader from "../components/Preloader";
import Select from "../components/Select";
import Icon from "../components/Icon";

// Views
import Error from "../views/Error";
import { UserContext } from "../context/User";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [error, setError] = useState();
  const [active, setActive] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const [limit, setLimit] = useState(6);

  const { user } = useContext(UserContext);

  // Handle sort
  const handleSort = (e) => {
    if (e.target.nodeName === "A") {
      setSort(e.target.search);
    }
    setActive(!active);
  };

  // Fetching topics && sorting posts
  const { slug } = useParams();

  // Handle Load More
  const handleLoadMore = () => {
    setLimit(limit + 6);
  };

  // Fetching Data
  useEffect(() => {
    fetchPosts(slug, sort).then((response) => {
      if (response.message) {
        setError(response.message);
      }
      setPosts(response);
      setLoading(false);
    });
  }, [slug, sort, newPost]);

  // Show loader if loading
  if (loading) return <Preloader />;
  if (error) return <Error response={error} />;

  return (
    <main className="home-page">
      <div className="container">
        <h2 className="section-title">{slug || "Articles"}</h2>
        <Select posts={posts} handleSort={handleSort} active={active} />

        <Post posts={posts} limit={limit} />
        {limit < posts.length && (
          <div className="load-more">
            <button className="btn-post load-more" onClick={handleLoadMore}>
              {loading ? "Wait..." : "Load More"}
            </button>
          </div>
        )}
      </div>
      <CreatePost newPost={newPost} setNewPost={setNewPost} />
      {user ? (
        <button className="btn-floating" onClick={() => setNewPost(!newPost)}>
          <Icon name={newPost ? "x-lg" : "pencil-square"} size={24} />
        </button>
      ) : (
        ""
      )}
    </main>
  );
};

export default Home;
