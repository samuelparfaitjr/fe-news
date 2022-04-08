import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPostById } from "../api/be-news";

// Components
import Preloader from "../components/Preloader";
import Voter from "../components/Voter";
// import Comment from "../components/Comment";
import Error from "../views/Error";
import moment from "moment";
import * as utils from "../utils/helpers";

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

  if (error) return <Error response={error} />;
  if (loading) return <Preloader />;

  return (
    <>
      <main>
        <div className="container">
          <div className="single-article">
            <h2 className="section-title">{article.title}</h2>
            <div className="single-meta-container">
              <span className="meta-author">by {article.author}</span>
              {" • "}
              <span className="meta-date">
                {moment(article.created_at).format("ll")}
              </span>
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: utils.paraText(article.body),
              }}
            />
            <Voter currentVote={article.votes} voteId={article.article_id} />
            <section className="comment">
              {/* <Comment id={article.article_id} /> */}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Single;
