import { useEffect, useRef, useState } from 'react';

const technologies = [
  { id: 1, name: 'AI', color: '#00F5FF' },
  { id: 2, name: 'Blockchain', color: '#C9184A' },
  { id: 3, name: 'VR/AR', color: '#B8F2FF' },
  { id: 4, name: 'IoT', color: '#FF4D7D' },
  { id: 5, name: 'Web3', color: '#800F2F' },
  { id: 6, name: 'Cybersecurity', color: '#FFCCD5' }
];

const TechSphere = () => {
  const sphereRef = useRef<HTMLDivElement>(null);
  const [activeTech, setActiveTech] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  // Автовращение сферы
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tech-sphere-container">
      <h3 className="section-title">Технологическая Сфера</h3>
      
      <div 
        className="tech-sphere" 
        ref={sphereRef}
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {technologies.map((tech, i) => {
          const angle = (i * (360 / technologies.length));
          return (
            <div 
              key={tech.id}
              className={`tech-node ${activeTech === tech.id ? 'active' : ''}`}
              style={{
                transform: `rotateY(${angle}deg) translateZ(200px)`,
                '--node-color': tech.color
              } as React.CSSProperties}
              onMouseEnter={() => setActiveTech(tech.id)}
              onMouseLeave={() => setActiveTech(null)}
            >
              <div className="node-core"></div>
              <div className="node-label">{tech.name}</div>
              <div className="node-connection"></div>
            </div>
          );
        })}
      </div>

      {/* Описание технологии */}
      <div className="tech-description">
        {activeTech 
          ? technologies.find(t => t.id === activeTech)?.name 
          : 'Наведите на узел'}
      </div>
    </div>
  );
};

export default TechSphere;