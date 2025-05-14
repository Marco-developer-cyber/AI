import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
// import axios from 'axios';
import { FiSend, FiImage, FiX } from 'react-icons/fi';

interface Message {
  text: string;
  isUser: boolean;
}

// Анимации
const neonGlow = keyframes`
  0%, 100% { text-shadow: 0 0 5px #00F5FF, 0 0 10px #00F5FF; }
  50% { text-shadow: 0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 30px #C9184A; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

const scan = keyframes`
  0% { top: -100%; }
  100% { top: 100%; }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Стилизованные компоненты
const CyberContainer = styled.div`
  max-width: 900px;
  margin: 100px auto 20px;
  padding: 2rem;
  background: rgba(10, 10, 20, 0.9);
  border-radius: 15px;
  border: 1px solid #00F5FF;
  box-shadow: 0 0 30px rgba(0, 245, 255, 0.3), inset 0 0 20px rgba(0, 245, 255, 0.2);
  font-family: 'Rajdhani', 'Courier New', sans-serif;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    margin: 80px 1rem 1rem;
    padding: 1rem;
  }
`;

const CyberHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const CyberTitle = styled.h1`
  color: #00F5FF;
  font-size: 2.5rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 5px;
  animation: ${neonGlow} 3s infinite alternate;
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: 'ANIME.AI';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    color: #C9184A;
    z-index: -1;
    animation: ${glitch} 2s infinite alternate-reverse;
  }

  &::after {
    color: #00F5FF;
    z-index: -2;
    animation: ${glitch} 3s infinite alternate;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const CyberSubtitle = styled.div`
  color: #00F5FF;
  font-size: 1.1rem;
  letter-spacing: 3px;
  margin-top: 0.5rem;
  opacity: 0.8;
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
`;

const CyberTerminal = styled.div`
  background: rgba(20, 20, 40, 0.7);
  border: 1px solid #00F5FF;
  border-radius: 10px;
  box-shadow: inset 0 0 20px rgba(0, 245, 255, 0.1), 0 0 30px rgba(0, 245, 255, 0.2);
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
`;

const TerminalBar = styled.div`
  display: flex;
  padding: 10px;
  background: linear-gradient(90deg, #C9184A 0%, #9C1B8F 50%, #00F5FF 100%);
  border-radius: 10px 10px 0 0;
`;

const TerminalButton = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  background: ${({ color }) => color};
  box-shadow: 0 0 5px ${({ color }) => color};
`;

const ChatMessages = styled.div`
  max-height: 450px;
  overflow-y: auto;
  padding: 20px;
  scrollbar-width: thin;
  scrollbar-color: #00F5FF rgba(30, 30, 45, 0.8);

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(30, 30, 45, 0.8);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #00F5FF;
    border-radius: 10px;
    border: 1px solid rgba(0, 245, 255, 0.3);
  }
`;

const MessageContainer = styled.div<{ isUser: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  margin-bottom: 20px;
  animation: ${pulse} 0.5s ease;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 75%;
  padding: 15px 20px;
  border-radius: ${({ isUser }) => (isUser ? '15px 5px 15px 15px' : '5px 15px 15px 15px')};
  line-height: 1.5;
  font-size: 1.1rem;
  background: ${({ isUser }) =>
    isUser
      ? 'linear-gradient(135deg, rgba(201,24,74,0.3) 0%, rgba(156,27,143,0.3) 100%)'
      : 'linear-gradient(135deg, rgba(0,245,255,0.2) 0%, rgba(20,20,40,0.4) 100%)'};
  border: ${({ isUser }) => (isUser ? '1px solid rgba(201,24,74,0.5)' : '1px solid rgba(0,245,255,0.5)')};
  box-shadow: ${({ isUser }) => (isUser ? '0 0 15px rgba(201,24,74,0.3)' : '0 0 15px rgba(0,245,255,0.3)')};
  backdrop-filter: blur(5px);
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%);
    pointer-events: none;
  }
`;

const AnalyzingBubble = styled.div`
  padding: 15px 20px;
  border-radius: 5px 15px 15px 15px;
  background: linear-gradient(135deg, rgba(0,245,255,0.1) 0%, rgba(20,20,40,0.3) 100%);
  border: 1px solid rgba(0,245,255,0.3);
  color: #00F5FF;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ScanningAnimation = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #00F5FF;
  box-shadow: 0 0 10px #00F5FF;
  animation: ${pulse} 1.5s infinite;
`;

const InputArea = styled.div`
  margin-top: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`;

const CyberInput = styled.input`
  flex-grow: 1;
  background: rgba(30, 30, 45, 0.8);
  border: 1px solid #00F5FF;
  color: white;
  padding: 15px 20px;
  border-radius: 50px;
  font-size: 1.1rem;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 245, 255, 0.1);

  &:focus {
    border-color: #C9184A;
    box-shadow: 0 0 20px rgba(201, 24, 74, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const CyberButton = styled.button`
  background: linear-gradient(135deg, rgba(0,245,255,0.2) 0%, rgba(0,245,255,0.4) 100%);
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 25px rgba(0, 245, 255, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ImageUploadButton = styled.label`
  background: linear-gradient(135deg, rgba(201,24,74,0.2) 0%, rgba(156,27,143,0.4) 100%);
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 0 15px rgba(201, 24, 74, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 25px rgba(201, 24, 74, 0.4);
    animation: ${float} 2s ease infinite;
  }

  input {
    display: none;
  }
`;

const ImagePreviewContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  border: 2px dashed rgba(0, 245, 255, 0.5);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  animation: ${pulse} 2s infinite;

  &:hover {
    border-color: #00F5FF;
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
  }
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 250px;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #C9184A;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(201, 24, 74, 0.7);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(90deg);
  }
`;

const CyberFooter = styled.div`
  margin-top: 30px;
  position: relative;
  height: 40px;
`;

const Scanline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 245, 255, 0.1) 50%, transparent 100%);
  animation: ${scan} 4s linear infinite;
  pointer-events: none;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(30, 30, 45, 0.8);
  border-radius: 0 0 10px 10px;
  font-size: 0.9rem;
  color: #00F5FF;
  text-shadow: 0 0 5px rgba(0, 245, 255, 0.5);
  border-top: 1px solid rgba(0, 245, 255, 0.2);
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: '◉';
    color: #00F5FF;
    font-size: 0.6rem;
  }
`;

const AnimeAIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('anime-ai-messages');
    return saved ? JSON.parse(saved) : [{
      text: '👋 Привет, Зорро! Я NEONIME.AI — твой киберпанк-помощник по аниме. Задавай вопросы или загружай скриншот для поиска аниме! 😎',
      isUser: false,
    }];
  });
  
  const [inputValue, setInputValue] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Сохраняем сообщения в localStorage
  useEffect(() => {
    localStorage.setItem('anime-ai-messages', JSON.stringify(messages));
  }, [messages]);

  // Прокрутка к последнему сообщению
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() && !image) return;

    // Добавляем сообщение пользователя
    const newMessages = [...messages];
    if (inputValue.trim()) {
      newMessages.push({ text: inputValue, isUser: true });
    }
    
    setMessages(newMessages);
    setInputValue('');
    setIsAnalyzing(true);

    try {
      // Имитация запроса к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Добавляем ответ бота
      setMessages(prev => [...prev, {
        text: image 
          ? '🔍 Похоже, это "Наруто: Ураганные хроники". Хотите узнать больше об этом аниме?'
          : 'Я могу помочь вам с информацией о любом аниме. Уточните ваш запрос для более точного ответа.',
        isUser: false
      }]);
      
      // Сбрасываем изображение после отправки
      setImage(null);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: '⚠️ Ошибка связи с AI. Попробуйте позже!',
        isUser: false
      }]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const imageData = event.target?.result as string;
      setImage(imageData);
    };
    
    reader.readAsDataURL(file);
  };

  return (
    <CyberContainer>
      <CyberHeader>
        <CyberTitle>ANIME.AI</CyberTitle>
        <CyberSubtitle>Киберпанк аниме детектив v3.1.4</CyberSubtitle>
      </CyberHeader>

      <CyberTerminal>
        <TerminalBar>
          <TerminalButton color="#FF5E5E" />
          <TerminalButton color="#FFEB5E" />
          <TerminalButton color="#5EFF7D" />
        </TerminalBar>

        <ChatMessages>
          {messages.map((msg, index) => (
            <MessageContainer key={index} isUser={msg.isUser}>
              <MessageBubble isUser={msg.isUser}>{msg.text}</MessageBubble>
            </MessageContainer>
          ))}

          {isAnalyzing && (
            <MessageContainer isUser={false}>
              <AnalyzingBubble>
                <ScanningAnimation />
                Анализирую {image ? 'изображение' : 'запрос'}...
              </AnalyzingBubble>
            </MessageContainer>
          )}

          <div ref={messagesEndRef} />
        </ChatMessages>
      </CyberTerminal>

      <InputArea>
        {image && (
          <ImagePreviewContainer>
            <PreviewImage src={image} alt="Uploaded preview" />
            <RemoveImageButton onClick={() => setImage(null)}>
              <FiX />
            </RemoveImageButton>
          </ImagePreviewContainer>
        )}

        <form onSubmit={handleSendMessage}>
          <InputGroup>
            <ImageUploadButton>
              <FiImage />
              Загрузить скриншот
              <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
            </ImageUploadButton>

            <CyberInput
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Спроси о любом аниме..."
            />

            <CyberButton type="submit">
              <FiSend />
              Отправить
            </CyberButton>
          </InputGroup>
        </form>
      </InputArea>

      <CyberFooter>
        <Scanline />
        <StatusBar>
          <StatusItem>STATUS: ONLINE</StatusItem>
          <StatusItem>DATABASE: 42,069 аниме</StatusItem>
          <StatusItem>VERSION: NEON-3.1.4</StatusItem>
        </StatusBar>
      </CyberFooter>
    </CyberContainer>
  );
};

export default AnimeAIChat;