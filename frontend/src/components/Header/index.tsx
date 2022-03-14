import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <Link to="/">
            <h1>RM Filmes</h1>
          </Link>
          <a
            href="https://github.com/renatomak"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/renatomak</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
