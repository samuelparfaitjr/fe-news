const Logo = ({ title, icon }) => {
  return (
    <a href="/" className="logo">
      {title} <i className={`bi bi-${icon}`}></i>
    </a>
  );
};

export default Logo;
