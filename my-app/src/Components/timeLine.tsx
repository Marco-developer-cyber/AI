import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Styles/timeLine.css'

interface Milestone {
  year: number;
  event: string;
  details?: string;
  image?: string;
}

const TimeLine: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const milestones: Milestone[] = [
    {
      year: 2020,
      event: 'Основание компании',
      details: 'Начало пути с амбициозной командой в гараже.',
      image: 'https://i.pinimg.com/videos/thumbnails/originals/42/78/a1/4278a165c3f086a0df56d7e0f2bfeb3c.0000000.jpg',
    },
    {
      year: 2021,
      event: 'Первые AI-проекты',
      details: 'Запуск первых нейросетей, которые удивили мир.',
      image: 'https://wallpapers.com/images/hd/one-piece-desktop-franky-nico-rzo1plpalkecqlu6.jpg',
    },
    {
      year: 2022,
      event: 'Запуск блокчейн-решений',
      details: 'Революционные децентрализованные платформы.',
      image: 'https://sun9-81.userapi.com/c237131/u42036175/d44/-3/z_f3164ded90.jpg',
    },
    {
      year: 2023,
      event: 'Международное признание',
      details: 'Награды и партнерства с мировыми лидерами.',
      image: 'https://via.placeholder.com/150/ff00cc/ffffff?text=2023',
    },
  ];

  // Sound effect
  const playSound = () => {
    const audio = new Audio('https://freesound.org/data/previews/170/170621_1468964-lq.mp3');
    audio.volume = 0.3;
    audio.play().catch((e) => console.log('Audio play error:', e));
    if (navigator.vibrate) navigator.vibrate(50);
  };

  // Three.js particle background
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const particles = new THREE.BufferGeometry();
    const particleCount = 500;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ffcc,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvasRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  const handleMilestoneClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    playSound();
  };

  return (
    <div className="cyber-timeline min-h-screen text-white p-8 overflow-hidden">
      <div className="particle-canvas" ref={canvasRef}></div>
      <div className="timeline-line" aria-hidden="true"></div>
      {milestones.map((item, index) => (
        <div
          key={index}
          className={`milestone ${index % 2 === 0 ? 'milestone-left' : 'milestone-right'}`}
          role="listitem"
          onClick={() => handleMilestoneClick(index)}
          onMouseEnter={playSound}
        >
          <div className="milestone-year animate-pulse-neon">{item.year}</div>
          <div className="milestone-event">
            {item.event}
            {activeIndex === index && (
              <div className="milestone-details">
                {item.image && <img src={item.image} alt={`${item.year} event`} className="milestone-image" />}
                <p>{item.details}</p>
              </div>
            )}
          </div>
          <div className="milestone-marker"></div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;