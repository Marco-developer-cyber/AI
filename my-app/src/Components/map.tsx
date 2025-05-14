// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/Addons.js';
// import gsap from 'gsap';
// import './Styles/map.css';


// // Интерфейс для технологии
// interface Technology {
//   id: number;
//   name: string;
//   color: string;
//   description: string;
//   position: { lat: number; lon: number };
// }

// // Данные технологий
// const technologies: Technology[] = [
//   { id: 1, name: 'AI', color: '#00F5FF', description: 'Искры гениальности машин.', position: { lat: 40, lon: -100 } },
//   { id: 2, name: 'Blockchain', color: '#C9184A', description: 'Нерушимая цепь доверия.', position: { lat: 20, lon: 60 } },
//   { id: 3, name: 'VR/AR', color: '#B8F2FF', description: 'Реальность за гранью.', position: { lat: -30, lon: 120 } },
//   { id: 4, name: 'IoT', color: '#FF4D7D', description: 'Всё связано, всё живо.', position: { lat: 50, lon: 0 } },
//   { id: 5, name: 'Web3', color: '#800F2F', description: 'Интернет принадлежит всем.', position: { lat: -10, lon: -60 } },
//   { id: 6, name: 'Cybersecurity', color: '#FFCCD5', description: 'Щит в цифровой войне.', position: { lat: 0, lon: 180 } },
// ];

// const TechEarth = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const controlsRef = useRef<OrbitControls | null>(null);
//   const earthRef = useRef<THREE.Mesh | null>(null);
//   const nodesRef = useRef<THREE.Mesh[]>([]);
//   const linesRef = useRef<THREE.Line[]>([]);
//   const tweensRef = useRef<gsap.core.Tween[]>([]);
//   const [activeTech, setActiveTech] = useState<number | null>(null);

//   // Конвертация географических координат в 3D
//   const latLonToVector3 = (lat: number, lon: number, radius: number) => {
//     const phi = (90 - lat) * (Math.PI / 180);
//     const theta = (lon + 180) * (Math.PI / 180);
//     return new THREE.Vector3(
//       -radius * Math.sin(phi) * Math.cos(theta),
//       radius * Math.cos(phi),
//       radius * Math.sin(phi) * Math.sin(theta)
//     );
//   };

//   useEffect(() => {
//     if (!containerRef.current) {
//       console.error('Container ref is not attached');
//       return;
//     }

//     // Проверка WebGL
//     if (!window.WebGLRenderingContext) {
//       console.error('WebGL is not supported');
//       alert('Ваш браузер не поддерживает WebGL. Попробуйте другой браузер.');
//       return;
//     }

//     // 1. Инициализация рендерера
//     const renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true,
//       powerPreference: 'high-performance',
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     containerRef.current.appendChild(renderer.domElement);
//     rendererRef.current = renderer;
//     console.log('Renderer initialized');

//     // 2. Настройка камеры
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(0, 0, 30);
//     camera.lookAt(0, 0, 0);
//     cameraRef.current = camera;

//     // 3. OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.screenSpacePanning = false;
//     controls.maxPolarAngle = Math.PI;
//     controlsRef.current = controls;

//     // 4. Создание Земли
//     const earthGeometry = new THREE.SphereGeometry(10, 64, 64);
//     const earthMaterial = new THREE.MeshPhongMaterial({
//       color: 0x1a1a2e,
//       specular: 0x111111,
//       shininess: 30,
//       wireframe: false,
//     });
//     const earth = new THREE.Mesh(earthGeometry, earthMaterial);
//     sceneRef.current.add(earth);
//     earthRef.current = earth;

//     // 5. Освещение
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//     directionalLight.position.set(50, 50, 50);
//     sceneRef.current.add(ambientLight, directionalLight);

//     // 6. Создание узлов технологий
//     technologies.forEach((tech) => {
//       const nodeGeometry = new THREE.SphereGeometry(0.5, 16, 16);
//       const nodeMaterial = new THREE.MeshBasicMaterial({ color: tech.color });
//       const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

//       const position = latLonToVector3(tech.position.lat, tech.position.lon, 10.5);
//       node.position.copy(position);
//       node.userData = tech;

//       nodesRef.current.push(node);
//       sceneRef.current.add(node);

//       // Свечение узла
//       const pointLight = new THREE.PointLight(tech.color, 1, 5);
//       pointLight.position.copy(position);
//       sceneRef.current.add(pointLight);

//       // Анимация пульсации
//       const tween = gsap.to(node.scale, {
//         x: 1.5,
//         y: 1.5,
//         z: 1.5,
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//       });
//       tweensRef.current.push(tween);
//     });
//     console.log('Nodes created:', nodesRef.current.length);

//     // 7. Соединительные линии
//     const updateLines = () => {
//       linesRef.current.forEach((line) => {
//         sceneRef.current.remove(line);
//         line.geometry.dispose();
//         line.material.dispose();
//       });
//       linesRef.current = [];

//       nodesRef.current.forEach((node1, i) => {
//         nodesRef.current.slice(i + 1).forEach((node2) => {
//           const material = new THREE.LineBasicMaterial({ color: 0x00F5FF, transparent: true, opacity: 0.3 });
//           const geometry = new THREE.BufferGeometry().setFromPoints([node1.position.clone(), node2.position.clone()]);
//           const line = new THREE.Line(geometry, material);
//           linesRef.current.push(line);
//           sceneRef.current.add(line);
//         });
//       });
//     };
//     updateLines();

//     // 8. Обработка кликов
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();

//     const handleClick = (event: MouseEvent) => {
//       if (!cameraRef.current) return;

//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//       raycaster.setFromCamera(mouse, cameraRef.current);
//       const intersects = raycaster.intersectObjects(nodesRef.current);

//       if (intersects.length > 0) {
//         const techId = intersects[0].object.userData.id;
//         setActiveTech(techId);
//         gsap.to(intersects[0].object.scale, {
//           x: 2,
//           y: 2,
//           z: 2,
//           duration: 0.3,
//           yoyo: true,
//           repeat: 1,
//         });
//         console.log('Node clicked:', intersects[0].object.userData.name);
//       } else {
//         setActiveTech(null);
//       }
//     };

//     window.addEventListener('click', handleClick);

//     // 9. Анимационный цикл
//     let animationFrameId: number;
//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);

//       if (earthRef.current) {
//         earthRef.current.rotation.y += 0.002;
//       }

//       if (controlsRef.current) {
//         controlsRef.current.update();
//       }

//       updateLines(); // Обновление линий при вращении

//       if (sceneRef.current && cameraRef.current && rendererRef.current) {
//         rendererRef.current.render(sceneRef.current, cameraRef.current);
//       } else {
//         console.error('Rendering failed: missing scene, camera, or renderer');
//       }
//     };
//     animate();
//     console.log('Animation loop started');

//     // 10. Обработка ресайза
//     const handleResize = () => {
//       if (cameraRef.current && rendererRef.current) {
//         cameraRef.current.aspect = window.innerWidth / window.innerHeight;
//         cameraRef.current.updateProjectionMatrix();
//         rendererRef.current.setSize(window.innerWidth, window.innerHeight);
//       }
//     };
//     window.addEventListener('resize', handleResize);

//     // 11. Очистка
//     return () => {
//       console.log('Cleaning up Three.js');
//       window.removeEventListener('click', handleClick);
//       window.removeEventListener('resize', handleResize);
//       cancelAnimationFrame(animationFrameId);

//       // Удаляем GSAP-анимации
//       tweensRef.current.forEach(tween => tween.kill());
//       tweensRef.current = [];

//       // Очищаем линии
//       linesRef.current.forEach(line => {
//         sceneRef.current.remove(line);
//         line.geometry.dispose();
//         line.material.dispose();
//       });
//       linesRef.current = [];

//       // Очищаем узлы и их свечение
//       nodesRef.current.forEach(node => {
//         sceneRef.current.remove(node);
//         node.geometry.dispose();
//         node.material.dispose();
//       });
//       nodesRef.current = [];

//       // Очищаем Землю
//       if (earthRef.current) {
//         sceneRef.current.remove(earthRef.current);
//         earthRef.current.geometry.dispose();
//         earthRef.current.material.dispose()
//       }

//       // Очищаем сцену
//       sceneRef.current.children.forEach(child => sceneRef.current.remove(child));

//       // Очищаем рендерер
//       if (containerRef.current && rendererRef.current) {
//         containerRef.current.removeChild(rendererRef.current.domElement);
//       }
//       if (rendererRef.current) {
//         rendererRef.current.dispose();
//       }
//     };
//   }, []);

//   return (
//     <div className="tech-earth-container">
//       <h3 className="section-title">Технологичная Земля</h3>
//       <div ref={containerRef} className="earth-canvas" />
//       <div className="tech-description">
//         {activeTech ? (
//           <>
//             <h4>{technologies.find(t => t.id === activeTech)?.name}</h4>
//             <p>{technologies.find(t => t.id === activeTech)?.description}</p>
//           </>
//         ) : (
//           <p>Кликните на узел технологии</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TechEarth;