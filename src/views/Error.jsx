const Error = ({ response }) => {
  return (
    <main className="error-page row">
      <div className="content">
        <h2>{response}</h2>
        <p>Sorry, something went wrong</p>
      </div>
    </main>
  );
};

export default Error;
