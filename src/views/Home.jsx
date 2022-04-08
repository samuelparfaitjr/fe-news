import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [sort, setSort] = useState("");
  const [error, setError] = useState();
  const [active, setActive] = useState(false);

  // Handle delete
  // const handleDelete = (postId) => {
  //   const updatedPosts = posts.filter((post) => post.id !== postId);
  //   setPosts(updatedPosts);
  // };

  // Handle sort
  const handleSort = (e) => {
    if (e.target.nodeName !== "SPAN") setSort(e.target.search);
    setActive(!active);
  };

  // Fetching topics && sorting posts
  const { slug } = useParams();

  // Fetching Data
  useEffect(() => {
    fetchPosts(slug, sort).then((response) => {
      if (response.message) {
        setError(response.message);
      }
      setPosts(response);
      setLoading(false);
    });
  }, [slug, sort]);

  // Show loader if loading
  if (loading) return <Preloader />;
  if (error) return <Error error={error} />;

  return (
    <main className="home-page">
      <div className="container">
        <h2 className="section-title">{slug || "Articles"}</h2>
        <Select posts={posts} handleSort={handleSort} active={active} />
        {/* <Post posts={posts} handleDelete={handleDelete} /> */}
        <Post posts={posts} />
      </div>
    </main>
  );
};

export default Home;
