import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/footer.css';

const CyberFooter = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="cyber-footer-container">
      <div className="cyber-footer-grid">
        {/* Логотип и описание */}
        <div className="cyber-footer-brand">
          <Link to="/" className="cyber-footer-logo">
            <span className="cyber-logo-text">CYBER_AI</span>
          </Link>
          <p className="cyber-footer-description">
            Инновационные технологии будущего уже сегодня
          </p>
        </div>

        {/* Навигация */}
        <div className="cyber-footer-section">
          <h4 className="cyber-footer-heading">Навигация</h4>
          <ul className="cyber-footer-links">
            <li><Link to="/services" className="cyber-footer-link">Услуги</Link></li>
            <li><Link to="/about" className="cyber-footer-link">О нас</Link></li>
            <li><Link to="/portfolio" className="cyber-footer-link">Портфолио</Link></li>
            <li><Link to="/blog" className="cyber-footer-link">Блог</Link></li>
          </ul>
        </div>

        {/* Контакты */}
        <div className="cyber-footer-section">
          <h4 className="cyber-footer-heading">Контакты</h4>
          <ul className="cyber-footer-contacts">
            <li className="cyber-contact-item">
              <EmailIcon className="cyber-contact-icon" />
              info@cyber-ai.com
            </li>
            <li className="cyber-contact-item">
              <PhoneIcon className="cyber-contact-icon" />
              +7 (XXX) XXX-XX-XX
            </li>
            <li className="cyber-contact-item">
              <LocationIcon className="cyber-contact-icon" />
              Москва, Киберпространство
            </li>
          </ul>
        </div>

        {/* Социальные сети */}
        <div className="cyber-footer-section">
          <h4 className="cyber-footer-heading">Соцсети</h4>
          <div className="cyber-social-links">
            <a href="#" className="cyber-social-link" aria-label="GitHub">
              <GitHubIcon className="cyber-social-icon" />
            </a>
            <a href="#" className="cyber-social-link" aria-label="Telegram">
              <TelegramIcon className="cyber-social-icon" />
            </a>
            <a href="#" className="cyber-social-link" aria-label="Instagram">
              <InstagramIcon className="cyber-social-icon" />
            </a>
            <a href="#" className="cyber-social-link" aria-label="LinkedIn">
              <LinkedInIcon className="cyber-social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="cyber-footer-bottom">
        <div className="cyber-footer-divider"></div>
        <div className="cyber-footer-copyright">
          © {currentYear} CYBER_AI | Все права защищены
        </div>
        <div className="cyber-footer-legal">
          <Link to="/privacy" className="cyber-legal-link">Политика конфиденциальности</Link>
          <Link to="/terms" className="cyber-legal-link">Условия использования</Link>
        </div>
      </div>
    </footer>
  );
};

// Типы иконок с поддержкой className
type IconProps = {
  className?: string;
};

const EmailIcon = ({ className }: IconProps) => <span className={className}>✉️</span>;
const PhoneIcon = ({ className }: IconProps) => <span className={className}>📱</span>;
const LocationIcon = ({ className }: IconProps) => <span className={className}>📍</span>;
const GitHubIcon = ({ className }: IconProps) => <span className={className}>🐙</span>;
const TelegramIcon = ({ className }: IconProps) => <span className={className}>✈️</span>;
const InstagramIcon = ({ className }: IconProps) => <span className={className}>📷</span>;
const LinkedInIcon = ({ className }: IconProps) => <span className={className}>💼</span>;

export default CyberFooter;
