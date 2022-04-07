import Icon from "./Icon";

const Footer = () => {
  return (
    <footer>
      <ul className="contact-links">
        <li>
          <a href="https://github.com/wakenado/fe-news" target="_blank">
            <Icon name="github" size={24} color="inherit" />
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/samuel-parfait-75a201236/"
            target="_blank"
          >
            <Icon name="linkedin" size={24} color="inherit" />
            Linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
