export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg className="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Vite"]
    },
    {
      title: "Backend & Database",
      icon: (
        <svg className="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Mongoose"]
    },
    {
      title: "Embedded & Hardware",
      icon: (
        <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      skills: ["C/C++", "STM32 Microcontrollers", "FreeRTOS", "UART / SPI / I2C", "ARM Cortex-M Architecture"]
    },
    {
      title: "Tools & Methodologies",
      icon: (
        <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ["Git & GitHub", "VS Code & STM32CubeIDE", "Postman", "Linux", "Agile (Scrum)"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto bg-dark-900">
      <div className="mb-12 text-center sm:text-left">
        <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
        <div className="h-1 w-24 bg-neon-green rounded mx-auto sm:mx-0"></div>
        <p className="mt-4 text-gray-400">The tools and technologies I use to bridge the gap between software and hardware.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-dark-800/50 border border-dark-600 rounded-xl p-6 hover:border-neon-green/30 hover:shadow-[0_0_20px_rgba(0,255,136,0.05)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-dark-700 rounded-lg group-hover:bg-dark-600 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="bg-dark-700/80 text-gray-300 px-4 py-2 rounded-md text-sm font-medium border border-dark-600 group-hover:border-dark-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
