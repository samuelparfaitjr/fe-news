import { useEffect, useState } from "react";
import { fetchPosts } from "../api/be-news";

// Component
import Post from "../components/Post";
import Preloader from "../components/Preloader";
import Select from "../components/Select";

// Views
import Error from "../views/Error";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  // Handle Delete
  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  // Fetching Data
  useEffect(() => {
    fetchPosts().then((response) => {
      if (response.message) {
        setError(response.message);
      }
      setPosts(response);
      setLoading(false);
    });
  }, []);

  // Show loader if loading
  if (loading) return <Preloader />;
  if (error) return <Error error={error} />;

  return (
    <main className="home-page">
      <div className="container">
        <h2 className="section-title">Articles</h2>
        <Select posts={posts} />
        <Post posts={posts} handleDelete={handleDelete} />
      </div>
    </main>
  );
};

export default Home;
