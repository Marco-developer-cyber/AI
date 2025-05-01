import { useState, useEffect, useRef } from 'react';
import './Styles/scroll.css';

type IntervalHandle = ReturnType<typeof setInterval>;

type CarouselItem = {
  title: string;
  description: string;
  image: string;
  color: string;
};

const CyberCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<IntervalHandle | null>(null);

  const items: CarouselItem[] = [
    {
      title: 'Искусственный Интеллект',
      description: 'Передовые технологии машинного обучения для вашего бизнеса',
      image: 'https://example.com/ai-tech.jpg',
      color: '#00F5FF',
    },
    {
      title: 'Кибербезопасность',
      description: 'Защитите свои данные с нашими решениями',
      image: 'https://example.com/cyber-sec.jpg',
      color: '#C9184A',
    },
    {
      title: 'Веб Разработка',
      description: 'Современные веб-приложения с футуристичным дизайном',
      image: 'https://example.com/web-dev.jpg',
      color: '#B8F2FF',
    },
  ];

  const startAutoRotation = (): void => {
    if (isPaused) return;
    clearExistingInterval();

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
  };

  const clearExistingInterval = (): void => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetAutoRotation = (): void => {
    clearExistingInterval();
    startAutoRotation();
  };

  const goToSlide = (index: number): void => {
    setActiveIndex(index);
    resetAutoRotation();
  };

  const handleMouseEnter = (): void => {
    setIsPaused(true);
    clearExistingInterval();
  };

  const handleMouseLeave = (): void => {
    setIsPaused(false);
    startAutoRotation();
  };

  useEffect(() => {
    startAutoRotation();
    return () => clearExistingInterval();
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startAutoRotation();
    }
  }, [isPaused]);

  return (
    <div
      className="cyber-carousel"
      ref={carouselRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            className="carousel-slide"
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div
              className="slide-overlay"
              style={{ backgroundColor: `${item.color}20` }}
            ></div>
            <div className="slide-content">
              <h3 className="slide-title">{item.title}</h3>
              <p className="slide-description">{item.description}</p>
              <button className="cyber-button">
                Узнать больше
                <span className="button-hover"></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="carousel-nav prev"
        onClick={() => {
          setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
          resetAutoRotation();
        }}
        aria-label="Предыдущий слайд"
      >
        &lt;
      </button>
      <button
        className="carousel-nav next"
        onClick={() => {
          setActiveIndex((prev) => (prev + 1) % items.length);
          resetAutoRotation();
        }}
        aria-label="Следующий слайд"
      >
        &gt;
      </button>
    </div>
  );
};

export default CyberCarousel;
