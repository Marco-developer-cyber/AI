import { useEffect, useRef } from 'react';
import './Styles/cyber.css';

const CyberStats = () => {
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationRefs = useRef<number[]>([]);

  useEffect(() => {
    // Очистка предыдущих анимаций при размонтировании
    return () => {
      animationRefs.current.forEach(cancelAnimationFrame);
      animationRefs.current = [];
    };
  }, []);

  useEffect(() => {
    const animateCounter = (el: HTMLDivElement, target: number) => {
      const duration = 2000;
      const startTime = performance.now();
      // const startValue = 0;
      
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(progress * target);
        
        el.textContent = currentValue.toString();
        
        if (progress < 1) {
          const requestId = requestAnimationFrame(animate);
          animationRefs.current.push(requestId);
        } else {
          el.textContent = target.toString();
        }
      };
      
      const requestId = requestAnimationFrame(animate);
      animationRefs.current.push(requestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            const target = parseInt(entry.target.getAttribute('data-count') || '0', 10);
            animateCounter(entry.target, target);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px' // Запускает анимацию немного раньше
      }
    );

    statRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      animationRefs.current.forEach(cancelAnimationFrame);
      animationRefs.current = [];
    };
  }, []);

  const addRef = (el: HTMLDivElement | null) => {
    if (el && !statRefs.current.includes(el)) {
      statRefs.current.push(el);
    }
  };

  return (
    <div className="cyber-stats-section">
      <div className="cyber-stats-container">
        <div className="cyber-stat">
          <div
            ref={addRef}
            className="stat-number"
            data-count="150"
          >
            0
          </div>
          <div className="stat-label">Завершенных проектов</div>
          <div className="stat-line"></div>
        </div>

        <div className="cyber-stat">
          <div
            ref={addRef}
            className="stat-number"
            data-count="98"
          >
            0
          </div>
          <div className="stat-label">Довольных клиентов</div>
          <div className="stat-line"></div>
        </div>

        <div className="cyber-stat">
          <div
            ref={addRef}
            className="stat-number"
            data-count="24"
          >
            0
          </div>
          <div className="stat-label">Технологий в работе</div>
          <div className="stat-line"></div>
        </div>
      </div>
    </div>
  );
};

export default CyberStats;