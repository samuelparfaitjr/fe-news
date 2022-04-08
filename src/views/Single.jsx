import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { fetchPostById } from "../api/be-news";

// Components
import Preloader from "../components/Preloader";
import Voter from "../components/Voter";
import Comment from "../components/Comment";
import Error from "../views/Error";
import moment from "moment";
import * as utils from "../utils/helpers";
import PostComment from "../components/PostComment";
import { UserContext } from "../context/User";

const Single = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { articleId } = useParams();

  useEffect(() => {
    fetchPostById(articleId).then((response) => {
      if (response.message) {
        setError(response.message);
      }
      setArticle(response);
      setLoading(false);
    });
  }, [articleId]);

  const { user } = useContext(UserContext);
  const [username, avatar] = user || [];

  if (error) return <Error response={error} />;
  if (loading) return <Preloader />;

  return (
    <>
      <main>
        <div className="container">
          <div className="single-article">
            <div className="single-meta-container">
              <span className="meta-author">by {article.author}</span>
              {" • "}
              <span className="meta-date">
                {moment(article.created_at).format("ll")}
              </span>
            </div>
            <h2 className="section-title">{article.title}</h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: utils.paraText(article.body),
              }}
            />

            {/* Vote Component */}
            <Voter currentVote={article.votes} voteId={article.article_id} />

            {/* Comment Sectionx */}
          </div>
          <section className="comment">
            <Comment articleId={article.article_id} />
          </section>
          <section className="leave-comment">
            <PostComment username={username} avatar={avatar} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Single;
