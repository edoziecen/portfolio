export default function Hero() {
  const badges = [
    'C/C++',
    'STM32',
    'FreeRTOS',
    'Microcontrollers',
    'ARM Architecture',
    'Register-Level Programming',
  ];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 text-white">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-gray-900 to-neon-green/5"></div>
        {/* Animated grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #00ff00 1px, transparent 1px), linear-gradient(to bottom, #00ff00 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        ></div>
        
        {/* Decorative Floating Circuit Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-neon-cyan/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 border border-neon-green/10 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        
        {/* Small floating circles and lines (circuit traces) */}
        <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-neon-green to-transparent opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-12 w-2 h-2 rounded-full bg-neon-green opacity-60 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-neon-cyan opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 flex flex-col w-full min-h-screen">
        
        {/* Top Section: Text and Image */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between w-full gap-12 lg:gap-8 flex-1">
        
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          {/* Greeting Line */}
          <div className="flex items-center gap-2 mb-4 animate-slide-up delay-100">
            <p className="text-gray-400 font-mono text-lg">Hello, I'm</p>
            <span className="w-2.5 h-5 bg-neon-green animate-pulse"></span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 animate-slide-up delay-200" style={{ textShadow: '0 0 20px rgba(0,255,0,0.2)' }}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              OGBU CHIEDOZIE
            </span>
            <span className="block text-white">
              ANTHONY
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl text-neon-cyan font-medium mb-6 font-mono animate-slide-up delay-300">
            Computer Engineering Student at FUTO
          </h2>

          {/* Tagline */}
          <p className="max-w-2xl text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 animate-slide-up delay-400 mx-auto lg:mx-0">
            Full-Stack Developer & Aspiring Embedded Systems Engineer — building the bridge between high-level web ecosystems and low-level hardware.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-20 animate-slide-up delay-500">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 bg-neon-green text-dark-900 font-bold rounded-md hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all duration-300"
            >
              View My Work
            </button>
            <a 
              href="https://www.linkedin.com/in/edozie-anthony-b3a6a6358/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-neon-cyan text-neon-cyan font-medium rounded-md hover:bg-neon-cyan/10 transition-colors duration-300 flex items-center gap-2"
            >
              Connect on LinkedIn
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative animate-slide-up delay-600 shrink-0 mb-10 lg:mb-20">
          {/* Animated decorative rings */}
          <div className="absolute inset-0 rounded-full border border-neon-green/30 animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dashed' }}></div>
          <div className="absolute inset-2 rounded-full border-2 border-neon-cyan/20 animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="absolute inset-4 rounded-full border border-gray-600/50"></div>
          
          {/* Image container */}
          <div className="absolute inset-6 rounded-full overflow-hidden bg-dark-800 border border-dark-600">
            {/* 
              This looks for a file named "profile.jpg" in your public folder.
              We'll use a fallback colored placeholder for now until you add the image.
            */}
            <img 
              src="/profile.jpg" 
              alt="Ogbu Chiedozie Anthony" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback avatar if profile.jpg is missing */}
            <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-dark-700 to-dark-900 text-neon-green font-mono text-4xl font-bold">
              &lt;C.A/&gt;
            </div>
          </div>
        </div>
      </div>

        {/* Now Learning Badges */}
        <div className="w-full animate-slide-up delay-700 mt-auto pb-10">
          <p className="text-neon-green/60 uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
            <span className="text-neon-green">⚡</span> NOW LEARNING
          </p>
          <div className="w-full overflow-hidden relative">
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, idx) => (
                <div 
                  key={idx}
                  className="bg-dark-700/50 border border-neon-green/20 rounded-full px-4 py-1.5 text-sm text-neon-green font-mono whitespace-nowrap hover:bg-neon-green/10 hover:border-neon-green/40 transition-colors cursor-default"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
