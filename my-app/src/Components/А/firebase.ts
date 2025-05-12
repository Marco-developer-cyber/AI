import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Проверка конфигурации
const firebaseConfig = {
  apiKey: "AIzaSyAI2rXPPIrl0mp3asPUyhVjaAL7h-iBAb0",
  authDomain: "cyber-e8e50.firebaseapp.com",
  projectId: "cyber-e8e50",
  storageBucket: "cyber-e8e50.appspot.com", // Исправлено с firebasestorage.app на appspot.com
  messagingSenderId: "753178122276",
  appId: "1:753178122276:web:6b04d2c965c517f78360b1",
  measurementId: "G-547NET1FFN"
};

// Инициализация с проверкой ошибок
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Firebase initialization error:", error);
  throw new Error("Failed to initialize Firebase");
}

// Инициализация сервисов
const auth = getAuth(app);
const storage = getStorage(app);

// Настройка провайдеров
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

const githubProvider = new GithubAuthProvider();
githubProvider.addScope('read:user');

// Экспорт
export { 
  auth,
  storage,
  googleProvider, 
  githubProvider 
};