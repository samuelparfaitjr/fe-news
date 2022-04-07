const Error = ({ error }) => {
  return (
    <main className="error-page row">
      <div className="content">
        <h2>{error}</h2>
        <p>Sorry, something went wrong</p>
      </div>
    </main>
  );
};

export default Error;
