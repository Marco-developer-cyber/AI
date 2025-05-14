import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import "./Styles/header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const auth = getAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);

  // Проверка авторизации
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed. Current user:", currentUser);
      setUser(currentUser);
    }, (error) => {
      console.error("Auth error:", error);
    });
    return () => unsubscribe();
  }, []);

  // Обработка скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Эффект появления хедера
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrolled(true);
      setTimeout(() => setIsScrolled(false), 1000);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Закрытие dropdown при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Переключение dropdown
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Avatar clicked! isDropdownOpen before toggle:", isDropdownOpen);
    setIsDropdownOpen((prev) => {
      const newValue = !prev;
      console.log("isDropdownOpen after toggle:", newValue);
      return newValue;
    });
  };

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

            <div className="auth-buttons">
              {user ? (
                <div className="user-menu" ref={dropdownRef}>
                  <img
                    ref={avatarRef}
                    src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                    alt="User Avatar"
                    className={`user-avatar-header ${isDropdownOpen ? "active" : ""}`}
                    onClick={toggleDropdown}
                    onError={(e) => {
                      e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                    }}
                  />
                  
                  {isDropdownOpen && (
                    <div className="dropdown-container">
                      <div className="dropdown-backdrop"></div>
                      <div className="dropdown-content">
                        <div className="dropdown-header">
                          <div className="user-info">
                            <div className="avatar-wrapper">
                              <img 
                                src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                                alt="User" 
                                className="dropdown-avatar"
                              />
                              <div className="online-indicator"></div>
                            </div>
                            <div className="text-info">
                              <span className="username">{user.displayName || "Cyber User"}</span>
                              <span className="email">{user.email || "user@cyber.ai"}</span>
                            </div>
                          </div>
                          <div className="header-decoration">
                            <div className="decoration-line"></div>
                            <div className="decoration-dots">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>

                        <div className="dropdown-items">
                          <Link to="/profile" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                            <i className="fas fa-user item-icon"></i>
                            <span className="item-text">Profile Matrix</span>
                            <span className="item-badge">New</span>
                          </Link>
                          
                          <Link to="/repositories" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                            <i className="fas fa-database item-icon"></i>
                            <span className="item-text">Data Repos</span>
                          </Link>
                          
                          <Link to="/stars" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                            <i className="fas fa-star item-icon"></i>
                            <span className="item-text">Star Nodes</span>
                          </Link>
                          
                          <Link to="/gists" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                            <i className="fas fa-chart-line item-icon"></i>
                            <span className="item-text">Code Gists</span>
                          </Link>
                        </div>

                        <div className="dropdown-footer">
                          <div className="footer-line"></div>
                          <Link to="/logout" className="logout-button" onClick={() => setIsDropdownOpen(false)}>
                            <i className="fas fa-sign-out-alt logout-icon"></i>
                            <span className="logout-text">Terminate Session</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="cyber-auth-button login">
                    <span>LOG IN</span>
                  </Link>
                  <Link to="/signup" className="cyber-auth-button signup">
                    <span>SIGN UP</span>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
      <div className="header-line"></div>
    </header>
  );
};

export default Header;