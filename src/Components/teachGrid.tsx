import './Styles/cyber.css'
const TechGrid = () => {
    const technologies = [
      { name: 'AI', icon: <i className="fa-solid fa-robot"></i>, desc: 'Искусственный интеллект' },
      { name: 'Blockchain', icon: <i className="fa-brands fa-hive"></i>, desc: 'Блокчейн решения' },
      { name: 'VR/AR', icon: <i className="fa-solid fa-vr-cardboard"></i>, desc: 'Виртуальная реальность' },
      { name: 'IoT', icon: <i className="fa-solid fa-globe"></i>, desc: 'Интернет вещей' },
      { name: 'Web3', icon: <i className="fa-solid fa-spider"></i>, desc: 'Децентрализованные приложения' },
      { name: 'Cybersecurity', icon: <i className="fa-solid fa-lock"></i>, desc: 'Кибербезопасность' },
    ];
  
    return (
      <div className="cyber-tech-section">
        <h3 className="section-title">
          <span className="title-text">Используемые технологии</span>
          <span className="title-line"></span>
        </h3>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-item" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-info">
                <h4 className="tech-name">{tech.name}</h4>
                <p className="tech-desc">{tech.desc}</p>
              </div>
              <div className="tech-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default TechGrid