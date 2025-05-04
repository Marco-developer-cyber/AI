import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/header.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // Эффект появления хедера при загрузке
    const timer = setTimeout(() => {
      setIsScrolled(true);
      setTimeout(() => setIsScrolled(false), 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <header className={`cyber-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-glitch" data-text="CYBER_AI">
              CYBER_AI
            </span>
            <span className="glitch-effect"></span>
          </Link>

          <button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <Link to="/services" className="nav-link">
              <span className="link-text">Услуги</span>
              <span className="link-hover"></span>
            </Link>
            <Link to="/about" className="nav-link">
              <span className="link-text">О нас</span>
              <span className="link-hover"></span>
            </Link>
            <Link to="/contact" className="nav-link">
              <span className="link-text">Контакты</span>
              <span className="link-hover"></span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Анимированная полоса внизу хедера */}
      <div className="header-line"></div>
    </header>
  );
};

export default Header;
