import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { deleteArticle, fetchPostById } from "../api/be-news";

// Components
import Preloader from "../components/Preloader";
import Voter from "../components/Voter";
import Comment from "../components/Comment";
import Error from "../views/Error";
import moment from "moment";
import * as utils from "../utils/helpers";
import { UserContext } from "../context/User";
import Icon from "../components/Icon";

const Single = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [serverError, setServerError] = useState(null);
  const { articleId } = useParams();
  const navigate = useNavigate();

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
  const [username] = user || [];

  if (error) return <Error response={error} />;
  if (loading) return <Preloader />;

  const handleClick = (e) => {
    const articleId = parseInt(article.article_id);
    if (window.confirm("Are you sure you want to delete this article?")) {
      deleteArticle(articleId).then((response) => {
        if (response.message) {
          setServerError(response.message);
        } else {
          navigate(`/`);
        }
      });
    }
  };

  if (serverError) alert(serverError);

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
            {username !== article.author && (
              <Voter currentVote={article.votes} voteId={article.article_id} />
            )}

            {/* Comment Sectionx */}
          </div>
          <Comment articleId={article.article_id} />
        </div>
        {username === article.author ? (
          <button
            className="btn-delete-post btn-floating"
            onClick={handleClick}
          >
            <Icon name="trash" size={24} />
          </button>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default Single;
