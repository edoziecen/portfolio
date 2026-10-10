import { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'system', content: "Welcome to Chiedozie's Interactive Terminal v1.0\nType 'help' to see available commands." }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isProcessing]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim();
    const lowerCmd = trimmedCmd.toLowerCase();
    
    setHistory((prev) => [...prev, { type: 'input', content: trimmedCmd }]);
    
    if (!lowerCmd) return;

    let output = '';
    
    switch (lowerCmd) {
      case 'help':
        output = `Available commands:
  about      Learn more about me
  skills     View my technical skills
  futo       My academic background
  status     System diagnostics & status
  projects   View my recent work
  socials    Find me online
  date       Show current date and time
  whoami     Show current user
  clear      Clear the terminal screen
  exit       Attempt to close terminal`;
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
        break;
      case 'about':
        output = "I'm Ogbu Chiedozie Anthony, a Computer Engineering student at the Federal University of Technology, Owerri (FUTO). I'm passionate about building full-stack web applications and diving deep into embedded systems and low-level hardware programming. I believe the future lies at the intersection of software and hardware.";
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
        break;
      case 'skills':
        output = `Web:      React, Node.js, Express, MongoDB, JavaScript, HTML/CSS, Tailwind
Embedded: C/C++, STM32, ARM Cortex-M, FreeRTOS, UART, SPI, I2C
Tools:    Git, VS Code, STM32CubeIDE, Linux, Postman`;
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
        break;
      case 'futo':
        output = `🎓 Federal University of Technology, Owerri (FUTO)
📘 B.Eng Computer Engineering
📍 Imo State, Nigeria
🔬 Focus: Digital Systems, Microprocessor Architecture, Embedded Systems Design
💡 Currently exploring the intersection of web technologies and hardware systems.`;
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
        break;
      case 'status':
        handleStatusSequence();
        return; // Returns early so it doesn't process synchronously
      case 'projects':
        output = `CodeAlpha Internship Projects:
1. E-Commerce Platform      → github.com/edoziecen/CodeAlpha_Ecommerce
2. Social Media Application  → github.com/edoziecen/CodeAlpha_SocialMedia
3. Project Management Tool   → github.com/edoziecen/CodeAlpha_ProjectManagement`;
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
        break;
      case 'socials':
        output = `GitHub:   https://github.com/edoziecen
LinkedIn: https://www.linkedin.com/in/edozie-anthony-b3a6a6358/`;
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'date':
        output = new Date().toString();
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
        break;
      case 'whoami':
        output = "Ogbu Chiedozie Anthony // Full-Stack Dev × Embedded Engineer";
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
        break;
      case 'exit':
        output = "Nice try! This terminal runs forever 😄";
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
        break;
      default:
        output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
        setHistory((prev) => [...prev, { type: 'output', content: output }]);
    }
  };

  const handleStatusSequence = () => {
    setIsProcessing(true);
    const lines = [
      "[BOOT] System initialized... OK",
      "[CLK] HSE 8MHz → PLL → SYSCLK 168MHz",
      "[GPIO] Port A configured: PA5 OUTPUT_PP",
      "[UART] USART2 initialized @ 115200 baud",
      "[ADC] ADC1 Channel 0 ready",
      "[RTOS] FreeRTOS scheduler started",
      "[TASK] WebDev_Task........... RUNNING  [Priority: HIGH]",
      "[TASK] Embedded_Task......... RUNNING  [Priority: HIGH]",
      "[TASK] Learning_Task......... RUNNING  [Priority: MEDIUM]",
      "[SYS] All systems nominal. Developer status: ACTIVE"
    ];
    
    let delay = 0;
    lines.forEach((line, index) => {
      delay += 300 + Math.random() * 400; // 300ms to 700ms random delay
      setTimeout(() => {
        setHistory((prev) => [...prev, { type: 'system', content: line }]);
        if (index === lines.length - 1) {
          setIsProcessing(false);
          setTimeout(() => inputRef.current?.focus(), 10);
        }
      }, delay);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isProcessing) return;
    const currentInput = input;
    setInput('');
    handleCommand(currentInput);
  };

  return (
    <section id="terminal" className="py-20 bg-dark-900 text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive Terminal
          </h2>
          <p className="text-gray-400">
            Type a command to learn more about me
          </p>
        </div>

        {/* Terminal Container */}
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-green-500/20 shadow-2xl shadow-green-500/5 bg-[#0a0a0a] relative font-mono text-sm sm:text-base">
          
          {/* Scan line effect overlay */}
          <div 
            className="absolute inset-0 pointer-events-none z-20 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.25) 50%)',
              backgroundSize: '100% 4px'
            }}
          ></div>
          
          {/* Title Bar */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center border-b border-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-gray-400 text-xs sm:text-sm font-medium">
              chiedozie@futo:~$
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            className="p-4 sm:p-6 h-[400px] overflow-y-auto cursor-text text-gray-300 relative z-10"
            onClick={() => !isProcessing && inputRef.current?.focus()}
          >
            <div className="space-y-3 mb-3 whitespace-pre-wrap">
              {history.map((entry, i) => (
                <div key={i} className="leading-relaxed">
                  {entry.type === 'input' && (
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 shrink-0">visitor@portfolio:~$</span>
                      <span>{entry.content}</span>
                    </div>
                  )}
                  {entry.type === 'output' && (
                    <div className="text-gray-300">{entry.content}</div>
                  )}
                  {entry.type === 'system' && (
                    <div className="text-green-400">{entry.content}</div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Input Line */}
            {!isProcessing ? (
              <form onSubmit={onSubmit} className="flex items-start">
                <span className="text-green-500 mr-2 shrink-0">visitor@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 m-0"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            ) : (
              <div className="flex items-start">
                <span className="text-green-500 mr-2 shrink-0">visitor@portfolio:~$</span>
                <span className="w-2.5 h-5 bg-green-500 animate-pulse inline-block align-middle mt-0.5"></span>
              </div>
            )}
            
            {/* Ref for auto-scrolling to bottom */}
            <div ref={bottomRef} className="h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
