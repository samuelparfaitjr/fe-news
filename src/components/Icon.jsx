const Icon = ({ name, size, color }) => {
  return (
    <span
      className="icons"
      style={{ fontSize: size, color: color, marginBottom: 15 }}
    >
      <i className={`bi bi-${name}`}></i>
    </span>
  );
};

export default Icon;
