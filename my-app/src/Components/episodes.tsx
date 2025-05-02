import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import "./Styles/animatedScenes.css";

const entities = [
  {
    name: "Jujutsu Kaisen",
    description: "A dark fantasy where cursed energy becomes weaponized.",
    rating: 4.8,
    tags: ["Action", "Supernatural", "Dark Fantasy"],
    date: "March 23, 2017",
    background: "/Anime/Backgrounds/sukuna_t.png",
    circle: "/Anime/PNG/Sukuna_t-pothe.png",
    action: {
      label: "Watch Now",
      onClick: () => window.open("https://jut.su/jujutsu-kaisen/", "_blank"),
    },
  },
  {
    name: "Entity 2",
    description: "A revolutionary tech breakthrough.",
    rating: 3.8,
    tags: ["AI", "Cyber", "Web3"],
    date: "May 03, 2025",
    background: "/images/background2.png",
    circle: "/images/circle2.png",
    action: {
      label: "Explore",
      onClick: () => alert("Entity 2 clicked!"),
    },
  },
];

const AnimatedScene = () => {
  const circleRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Three.js сцена
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Создаем вращающиеся звезды
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 500;

    const positions = new Float32Array(starsCount * 3);
    const colors = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      // Позиции в форме сферы
      const radius = 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Цвета (холодные оттенки)
      colors[i * 3] = Math.random() * 0.5 + 0.5; // R (синий/голубой)
      colors[i * 3 + 1] = Math.random() * 0.3 + 0.7; // G
      colors[i * 3 + 2] = Math.random() * 0.2 + 0.8; // B
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    starsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Анимация звезд
    function animateStars() {
      stars.rotation.x += 0.001;
      stars.rotation.y += 0.002;
    }

    // GSAP анимации для UI элементов
    gsap.fromTo(
        circleRef.current,
        { opacity: 0, x: 200, y: 200 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          onComplete: () => {
            // Плавное покачивание после входа
            gsap.to(circleRef.current, {
              y: "-=20",
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          },
        }
      );
      

    gsap.fromTo(
      [textRef.current, buttonRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1,
        ease: "power2.out",
      }
    );

    // Рендер сцены
    function animate() {
      requestAnimationFrame(animate);
      animateStars();
      renderer.render(scene, camera);
    }
    animate();

    // Очистка
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star">
            ★
          </span>
        ))}
        {halfStar === 1 && <span className="star half-star">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty-star">
            ☆
          </span>
        ))}
      </>
    );
  };

  const entity = entities[0];

  return (
    <div
      className="scene-container"
      style={{ backgroundImage: `url(${entity.background})` }}
    >
      <div ref={mountRef} className="three-container" />
      <img
        ref={circleRef}
        src={entity.circle}
        alt="Circle"
        className="pink-circle"
      />
      <div className="info-container">
        <div ref={textRef} className="info-text">
          <h2>{entity.name}</h2>
          <div className="rating">
            {renderStars(entity.rating)}
            <span className="rating-value">{entity.rating}/5</span>
          </div>
          <p className="description">{entity.description}</p>
          <div className="tags">
            {entity.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="date">Published: {entity.date}</p>
        </div>
        <button
          ref={buttonRef}
          className="action-button"
          onClick={entity.action.onClick}
        >
          {entity.action.label}
        </button>
      </div>
    </div>
  );
};

export default AnimatedScene;
