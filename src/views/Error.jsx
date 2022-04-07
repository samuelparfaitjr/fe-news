const Error = ({ error }) => {
  return (
    <main className="error-page row">
      <div className="content">
        <h2>Oops, Not Found!</h2>
        <p>{error}</p>
      </div>
    </main>
  );
};

export default Error;
