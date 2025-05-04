import { useEffect, useRef } from 'react';
import './Styles/cyber.css'
const CyberStats = () => {
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // RESET ref array to avoid stale entries across rerenders
    statRefs.current = [];

    const animateCounter = (el: HTMLDivElement, target: number) => {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const update = () => {
        current += increment;
        if (current < target) {
          el.textContent = Math.floor(current).toString();
          requestAnimationFrame(update);
        } else {
          el.textContent = target.toString();
        }
      };

      update();
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
      { threshold: 0.5 }
    );

    statRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
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
