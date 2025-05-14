import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Styles/About.css";
import CyberTerminal from "./AboutPages/CyberTerminal ";

const AboutPage = () => {
  // Анимация при скролле
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [glitchActive, setGlitchActive] = useState(false);

  // Запуск анимации при появлении в зоне видимости
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Глитч-эффект каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="abt-cyber-about-page">
      {/* 🔥 Неоновый заголовок с глитчем */}
      <motion.h1 
        className={`abt-cyber-title ${glitchActive ? "abt-glitch" : ""}`}
        data-text="О_НАС"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        О НАС
      </motion.h1>

      {/* 🌌 Фоновый эффект (движущиеся частицы) */}
      <div className="abt-particle-background"></div>

      {/* 💾 Основной контент (появляется с анимацией) */}
      <motion.div 
        className="abt-cyber-content"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        ref={ref}
      >
        {/* 🌀 Блок с анимированным текстом */}
        <motion.div 
          className="abt-cyber-card"
          variants={{
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1 }
          }}
        >
          <h2 className="abt-neon-subtitle">КТО МЫ?</h2>
          <p className="abt-cyber-text">
            Мы — <span className="abt-highlight">кибер-коллектив</span>, создающий цифровые миры на стыке технологий и искусства. Наш код — это наша кровь, наш дизайн — нейроинтерфейс будущего.
          </p>
        </motion.div>

        {/* ⚡ Интерактивная панель с технологиями */}
        <motion.div 
          className="abt-tech-grid"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          {["React", "WebGL", "AI", "Blockchain", "VR"].map((tech, i) => (
            <motion.div
              key={i}
              className="abt-tech-item"
              whileHover={{ scale: 1.1, color: "#00F5FF" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        {/* 🎮 Интерактивный 3D-элемент (можно заменить реальным 3D-объектом) */}
        <motion.div 
          className="abt-cyber-cube"
          animate={{ 
            rotateY: 360,
            rotateX: 20,
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear"
          }}
        >
          <div className="abt-cube-face front"></div>
          <div className="abt-cube-face back"></div>
          <div className="abt-cube-face left"></div>
          <div className="abt-cube-face right"></div>
          <div className="abt-cube-face top"></div>
          <div className="abt-cube-face bottom"></div>
        </motion.div>
      </motion.div>
      <CyberTerminal/>
      {/* 🔮 Футер с анимированным градиентом */}
      <motion.div 
        className="abt-cyber-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>© 2024 CYBER_AI | ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
        <div className="abt-scanline"></div>
      </motion.div>
    </div>
  );
};

export default AboutPage;