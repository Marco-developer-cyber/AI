import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import All from './All';
import Ai from './Components/ai';
import Header from './Components/header';
import AnimatedScene from './Components/episodes';
import Anime from './Components/anime';
import CyberpunkLoader from './Components/CyberpunkLoader';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true); // Начинаем с true, чтобы лоадер показался сразу
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Симуляция загрузки на 2 секунды
    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return <CyberpunkLoader />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/animatedScenes" element={<AnimatedScene />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;