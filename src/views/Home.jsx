import { useState } from "react";

// Component
import Post from "../components/Post";
import Select from "../components/Select";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Quick Fox",
      body: "The quick brown fox jumps over the lazy dog.",
      date: "06 apr 2022",
      comment: 5,
      vote: 5,
    },
    {
      id: 2,
      title: "Lady Bug",
      body: "The pink bee flew  over the lazy bug.",
      date: "06 apr 2012",
      comment: 5,
      vote: 5,
    },
    {
      id: 3,
      title: "Jada Pinkett",
      body: "Until you slap somebody.",
      date: "06 jul 2022",
      comment: 35,
      vote: 90,
    },
    {
      id: 4,
      title: "Fukushima",
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

        <div className="grid">
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                title={post.title}
                body={post.body}
                date={post.date}
                comment={post.comment}
                vote={post.vote}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;