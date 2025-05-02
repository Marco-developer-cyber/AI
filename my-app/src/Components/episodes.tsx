import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Styles/animatedScenes.css";

const Menu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <h2 className="text-[#00D4FF] text-5xl font-bold text-shadow-lg mb-8 animate-pulse">
        Zoro's Neon Dojo
      </h2>
      <button
        className="border-2 border-[#FF00FF] text-[#FF00FF] px-8 py-3 text-xl hover:bg-[#FF00FF] hover:text-[#0D0D0D] transition animate-bounce"
        onClick={onClose}
      >
        Back to Adventure
      </button>
      <button className="border-2 border-[#FF00FF] text-[#FF00FF] px-8 py-3 text-xl hover:bg-[#FF00FF] hover:text-[#0D0D0D] transition mt-4 animate-bounce">
        Slice with Zoro
      </button>
      <button className="border-2 border-[#FF00FF] text-[#FF00FF] px-8 py-3 text-xl hover:bg-[#FF00FF] hover:text-[#0D0D0D] transition mt-4 animate-bounce">
        Party with Swords
      </button>
    </motion.div>
  );
};

const AnimatedScene: React.FC = () => {
  const circleRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const entity = {
    name: decodeURIComponent(searchParams.get("name") || "Unknown Anime"),
    description: decodeURIComponent(
      searchParams.get("description") || "No description available."
    ),
    rating: parseFloat(searchParams.get("rating") || "0"),
    tags:
      searchParams
        .get("tags")
        ?.split(",")
        .map((tag) => decodeURIComponent(tag)) || [],
    date: decodeURIComponent(searchParams.get("date") || "Unknown date"),
    background: decodeURIComponent(searchParams.get("background") || ""),
    circle: decodeURIComponent(searchParams.get("circle") || ""),
    action: {
      label: decodeURIComponent(searchParams.get("actionLabel") || "Action"),
      url: decodeURIComponent(searchParams.get("actionUrl") || "#"),
    },
  };

  useEffect(() => {
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

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 500;

    const positions = new Float32Array(starsCount * 3);
    const colors = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      const radius = 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      colors[i * 3] = Math.random() * 0.5 + 0.5;
      colors[i * 3 + 1] = Math.random() * 0.3 + 0.7;
      colors[i * 3 + 2] = Math.random() * 0.2 + 0.8;
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

    function animateStars() {
      stars.rotation.x += 0.001;
      stars.rotation.y += 0.002;
    }

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

    function animate() {
      requestAnimationFrame(animate);
      animateStars();
      renderer.render(scene, camera);
    }
    animate();

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

  return (
    <div
      className="scene-container"
      style={{
        backgroundImage: entity.background
          ? `url(${entity.background})`
          : "none",
      }}
    >
      <div ref={mountRef} className="three-container" />
      {entity.circle && (
        <img
          ref={circleRef}
          src={entity.circle}
          alt="Circle"
          className="pink-circle"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/300";
          }}
        />
      )}
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
        <a href={entity.action.url} target="_blank" rel="noopener noreferrer">
          <button
            ref={buttonRef}
            className="action-button"
            onClick={() => setIsMenuOpen(false)}
          >
            {entity.action.label}
          </button>
        </a>
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default AnimatedScene;
