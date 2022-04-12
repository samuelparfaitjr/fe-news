import Icon from "../components/Icon";

const Error = ({ response }) => {
  return (
    <main className="error-page row">
      <div className="content">
        <Icon name="emoji-dizzy" size={54} />
        <h2>{response || "404 Not Found"}</h2>
        <p>Sorry, we couldn't find what you're looking for.</p>
      </div>
    </main>
  );
};

export default Error;
