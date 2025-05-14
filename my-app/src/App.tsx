import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import All from './All';
import Ai from './Components/ai';
import Header from './Components/header';
import AnimatedScene from './Components/episodes';
import Anime from './Components/anime';
import LoginForm from './Components/LoginForm';
import Profile from './Components/Profile';
import CyberpunkLoader from './Components/CyberpunkLoader';
import AnimeAIChat from './Components/AI-Page/AnimeAIChat';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
        <Route path="/logIn" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ai-chat" element={<AnimeAIChat />} />
        <Route path="/repositories" element={<div className="placeholder-page"><h2>Your Repositories</h2><p>This page will display your repositories.</p></div>} />
        <Route path="/stars" element={<div className="placeholder-page"><h2>Your Stars</h2><p>This page will display your starred items.</p></div>} />
        <Route path="/gists" element={<div className="placeholder-page"><h2>Your Gists</h2><p>This page will display your gists.</p></div>} />
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