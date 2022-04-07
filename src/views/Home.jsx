import { useState } from "react";

// Component
import Post from "../components/Post";
import Select from "../components/Select";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Quick Fox",
      topic: "Cooking",
      body: "The quick brown fox jumps over the lazy dog.",
      date: "06 apr 2022",
      comment: 5,
      vote: 5,
    },
    {
      id: 2,
      title: "Lady Bug",
      topic: "Football",
      body: "The pink bee flew  over the lazy bug.",
      date: "06 apr 2012",
      comment: 5,
      vote: 5,
    },
    {
      id: 3,
      title: "Jada Pinkett",
      topic: "Gaming",
      body: "Until you slap somebody.",
      date: "06 jul 2022",
      comment: 35,
      vote: 90,
    },
    {
      id: 4,
      title: "Fukushima",
      topic: "Cooking",
      body: "Should we stop using nuclear energy?",
      date: "04 jul 2022",
      comment: 35,
      vote: 90,
    },
  ]);

  return (
    <main className="home-page">
      <div className="container">
        <h2 className="section-title">Article</h2>
        <Select />
        <Post posts={posts} />
      </div>
    </main>
  );
};

export default Home;
