import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "./А/firebase";
import "./Styles/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);
  const navigate = useNavigate();

  // Случайные глитч-эффекты
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(Math.random() > 0.95);
      setTimeout(() => setIsGlitching(false), 200);
    }, 10000);
    return () => clearInterval(glitchInterval);
  }, []);

  // Проверка авторизации
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/profile");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Обычный логин (email/password)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Редирект после успешного входа
      navigate("/profile");
    } catch (err) {
      setError("Неверный email или пароль");
      setTimeout(() => setError(""), 3000);
    }
  };

  // OAuth: Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Редирект после успешного входа
      navigate("/profile");
    } catch (err) {
      setError("Ошибка Google OAuth");
      setTimeout(() => setError(""), 3000);
    }
  };

  // OAuth: GitHub
  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      // Редирект после успешного входа
      navigate("/profile");
    } catch (err) {
      setError("Ошибка GitHub OAuth");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className={`cyber-login-container ${isGlitching ? "glitch-effect" : ""}`}>
      <form onSubmit={handleLogin} className="cyber-login-form">
        <h2 className="cyber-login-title">
          <span className="cyber-text" data-text="SYSTEM_ACCESS">SYSTEM_ACCESS</span>
          <span className="cyber-glitch"></span>
        </h2>

        {/* Поле email */}
        <div className="cyber-input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="cyber-input"
            placeholder="USERNAME@DOMAIN.COM"
            required
          />
          <div className="cyber-input-underline"></div>
        </div>

        {/* Поле password */}
        <div className="cyber-input-group">
          <div className="cyber-password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="cyber-input"
              placeholder="••••••••"
              required
            />
            <button 
              type="button" 
              className="cyber-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="cyber-input-underline"></div>
        </div>

        {/* Кнопка входа */}
        <button type="submit" className="cyber-login-button">
          <span className="cyber-btn-text">AUTHENTICATE</span>
          <span className="cyber-btn-pulse"></span>
        </button>

        {/* Блок ошибок */}
        {error && (
          <div className="cyber-error">
            <span>⚠️ {error}</span>
          </div>
        )}

        {/* Разделитель */}
        <div className="cyber-divider">
          <span className="cyber-divider-line"></span>
          <span className="cyber-divider-text">OR</span>
          <span className="cyber-divider-line"></span>
        </div>

        {/* OAuth-кнопки */}
        <div className="cyber-oauth-buttons">
          <button 
            type="button"
            onClick={handleGoogleLogin}
            className="cyber-oauth-button google"
          >
            <FaGoogle className="oauth-icon" />
            <span>GOOGLE</span>
          </button>
          
          <button 
            type="button"
            onClick={handleGithubLogin}
            className="cyber-oauth-button github"
          >
            <FaGithub className="oauth-icon" />
            <span>GITHUB</span>
          </button>
        </div>

        {/* Ссылки */}
        <div className="cyber-login-links">
          <Link to="/signup" className="cyber-link">
            <span>CREATE_ACCOUNT</span>
            <span className="link-arrow">→</span>
          </Link>
          <Link to="/forgot" className="cyber-link">
            <span>PASSWORD_RESET</span>
            <span className="link-arrow">→</span>
          </Link>
        </div>
      </form>

      {/* Анимации */}
      <div className="cyber-scanline"></div>
      <div className="cyber-grid-overlay"></div>
    </div>
  );
};

export default LoginForm;