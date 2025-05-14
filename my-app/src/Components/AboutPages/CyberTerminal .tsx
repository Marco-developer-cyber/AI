import { useEffect, useState, useRef } from "react";
import "../Styles/terminal.css";

const CyberTerminal = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isHacking, setIsHacking] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const matrixIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // ASCII-арты и тексты для разных состояний и команд
  const asciiArt = {
    idle: [
      `╔════════════════════════════╗`,
      `║  CYBER_AI TERMINAL v9.11   ║`,
      `╟────────────────────────────╢`,
      `║ > SYSTEM: STANDBY          ║`,
      `║ > TYPE "help" TO BEGIN     ║`,
      `║ > ▌                       ║`,
      `╚════════════════════════════╝`
    ].join("\n"),
    hacking: [
      `╔════════════════════════════╗`,
      `║  [[[ HACKING MODE ]]]      ║`,
      `╟────────────────────────────╢`,
      `║ > BREACHING FIREWALL...    ║`,
      `║ > [████████░░] 75%         ║`,
      `║ > DATA LEAK DETECTED!      ║`,
      `╚════════════════════════════╝`
    ].join("\n"),
    scan: [
      `╔════════════════════════════╗`,
      `║  [[ NETWORK SCAN ]]        ║`,
      `╟────────────────────────────╢`,
      `║ > SCANNING NODES...        ║`,
      `║ > DETECTED: 12 ACTIVE IPs  ║`,
      `║ > THREAT LEVEL: LOW        ║`,
      `╚════════════════════════════╝`
    ].join("\n"),
    decrypt: [
      `╔════════════════════════════╗`,
      `║  [[ DECRYPTION MODE ]]     ║`,
      `╟────────────────────────────╢`,
      `║ > CRACKING ENCRYPTION...   ║`,
      `║ > PROGRESS: [█████░░░░] 50%║`,
      `║ > SUCCESS: DATA UNLOCKED!  ║`,
      `╚════════════════════════════╝`
    ].join("\n"),
    matrix: [
      `01010100 01001000 01000101 00100000`,
      `01001101 01000001 01010100 01010010`,
      `01001001 01011000 00100000 01001001`,
      `01010011 00100000 01010010 01000101`,
      `01000001 01001100 00100000 01000101`,
      `01001110 01001010 01001111 01011001`
    ].join("\n")
  };

  // Автопечать текста (как в фильмах)
  const typeText = (text: string, speed = 50) => {
    let i = 0;
    const lines = text.split("\n");
    const typingInterval = setInterval(() => {
      if (i < lines.length) {
        setOutput(prev => {
          const newOutput = [...prev.slice(-10)];
          if (i === 0) {
            newOutput.push(lines[i]);
          } else {
            newOutput[newOutput.length - 1] = lines.slice(0, i + 1).join("\n");
          }
          return newOutput;
        });
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return typingInterval;
  };

  // Обработчик команд
  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      setOutput(prev => [...prev, `> ${input}`]);

      if (command === "help") {
        typeText(`
          ╔════════════════════════════╗
          ║  AVAILABLE COMMANDS:       ║
          ╟────────────────────────────╢
          ║ > hack    - Start hacking  ║
          ║ > scan    - Scan network   ║
          ║ > decrypt - Crack codes    ║
          ║ > clear   - Reset terminal ║
          ╚════════════════════════════╝
        `);
      } 
      else if (command === "hack") {
        setIsHacking(true);
        setOutput([]);
        simulateHacking();
      }
      else if (command === "scan") {
        setOutput([]);
        typeText(asciiArt.scan);
      }
      else if (command === "decrypt") {
        setOutput([]);
        typeText(asciiArt.decrypt);
      }
      else if (command === "clear") {
        setOutput([]);
      }
      setInput("");
    }
  };

  // Имитация взлома
  const simulateHacking = () => {
    const phrases = [
      "> INITIATING CYBER-ATTACK...",
      "> BYPASSING SECURITY...",
      "> ACCESSING MAINFRAME...",
      "> DOWNLOADING DATA... [███████░░░] 70%",
      "> WARNING: TRACE DETECTED!",
      "> PURGING LOGS...",
      "> MISSION COMPLETE."
    ];

    setOutput([asciiArt.hacking]); // Показываем ASCII-арт взлома
    phrases.forEach((phrase, i) => {
      setTimeout(() => {
        setOutput(prev => [...prev.slice(-1), phrase]);
        if (i === phrases.length - 1) setIsHacking(false);
      }, (i + 1) * 1000); // Задержка с учётом времени отображения ASCII
    });
  };

  // Эффект "матричного дождя" при взломе
  useEffect(() => {
    if (!isHacking) {
      if (matrixIntervalRef.current) {
        clearInterval(matrixIntervalRef.current);
        matrixIntervalRef.current = null;
      }
      setOutput([asciiArt.idle]); // Возвращаем idle-арт при выходе из режима
      return;
    }

    setOutput([asciiArt.hacking]); // Устанавливаем ASCII-арт взлома при входе
    const matrixChars = "01█▓▒░│┤╡╢╖╕╣║╗╝╜╛┐└";
    matrixIntervalRef.current = setInterval(() => {
      if (terminalRef.current) {
        const randomText = Array.from({ length: 50 }, () => 
          matrixChars[Math.floor(Math.random() * matrixChars.length)]
        ).join("");
        setOutput(prev => {
          const newOutput = [...prev.slice(-1)];
          if (!newOutput.some(line => phrases.includes(line))) {
            return [...newOutput, randomText];
          }
          return newOutput;
        });
      }
    }, 100);

    return () => {
      if (matrixIntervalRef.current) {
        clearInterval(matrixIntervalRef.current);
        matrixIntervalRef.current = null;
      }
    };
  }, [isHacking]);

  const phrases = [
    "> INITIATING CYBER-ATTACK...",
    "> BYPASSING SECURITY...",
    "> ACCESSING MAINFRAME...",
    "> DOWNLOADING DATA... [███████░░░] 70%",
    "> WARNING: TRACE DETECTED!",
    "> PURGING LOGS...",
    "> MISSION COMPLETE."
  ];

  return (
    <div className={`term-cyber-terminal ${isHacking ? "term-hacking-mode" : ""}`} ref={terminalRef}>
      <div className="term-terminal-output">
        {output.map((line, i) => (
          <pre key={i} className="term-terminal-line">
            {line}
          </pre>
        ))}
      </div>
      <div className="term-terminal-input">
        <span className="term-prompt">-</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="term-terminal-field"
          placeholder={isHacking ? "SYSTEM BUSY..." : "Type 'help' for commands"}
          disabled={isHacking}
        />
        <span className="term-cursor">▌</span>
      </div>
    </div>
  );
};

export default CyberTerminal;