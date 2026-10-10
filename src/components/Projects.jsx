import { useState } from 'react';

const webApps = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product catalog, cart system, and checkout flow. Built during my CodeAlpha internship.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/edoziecen/CodeAlpha_Ecommerce',
    label: 'Web App'
  },
  {
    title: 'Social Media Application',
    description: 'A social networking platform with user profiles, posts, feeds, and real-time interactions. Developed as part of CodeAlpha tasks.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/edoziecen/CodeAlpha_SocialMedia',
    label: 'Web App'
  },
  {
    title: 'Project Management Tool',
    description: 'A task management and collaboration tool with boards, task assignment, and progress tracking. Built for CodeAlpha.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/edoziecen/CodeAlpha_ProjectManagement',
    label: 'Web App'
  }
];

const hardwareLab = [
  {
    title: 'STM32 GPIO Driver',
    description: 'Register-level GPIO configuration and driver development for STM32F4 microcontrollers. Learning bare-metal programming.',
    tech: ['C', 'STM32', 'ARM Cortex-M4'],
    status: '📚 Learning'
  },
  {
    title: 'Sensor Data Logger',
    description: 'Temperature and humidity monitoring system with real-time data logging via UART. Exploring ADC and timer peripherals.',
    tech: ['C', 'STM32', 'UART', 'ADC'],
    status: '📚 Learning'
  },
  {
    title: 'FreeRTOS Task Scheduler',
    description: 'Multi-threaded embedded application using FreeRTOS. Implementing task priorities, semaphores, and inter-task communication.',
    tech: ['C', 'FreeRTOS', 'STM32'],
    status: '📚 Learning'
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
        <div className="h-1 w-24 bg-neon-green rounded"></div>
      </div>

      <div className="flex space-x-4 mb-10 border-b border-dark-500 pb-2">
        <button
          onClick={() => setActiveTab('web')}
          className={`px-6 py-2 rounded-t-lg border-b-2 font-medium transition-all duration-300 ${
            activeTab === 'web'
              ? 'bg-neon-green/10 border-neon-green text-neon-green'
              : 'border-transparent text-gray-500 hover:text-gray-300'
          }`}
        >
          Full-Stack Web Apps
        </button>
        <button
          onClick={() => setActiveTab('hardware')}
          className={`px-6 py-2 rounded-t-lg border-b-2 font-medium transition-all duration-300 ${
            activeTab === 'hardware'
              ? 'bg-neon-green/10 border-neon-green text-neon-green'
              : 'border-transparent text-gray-500 hover:text-gray-300'
          }`}
        >
          Embedded & Hardware Lab
        </button>
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'web' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in transition-opacity duration-500 opacity-100">
            {webApps.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-dark-700/40 border border-dark-500/50 hover:border-neon-green/30 hover:shadow-[0_0_15px_rgba(57,255,20,0.1)] rounded-xl backdrop-blur p-6 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-neon-green/80 bg-dark-600/50 px-3 py-1 rounded-full">
                    {project.label}
                  </span>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-dark-600/50 text-neon-green/80 text-xs font-mono px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'hardware' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in transition-opacity duration-500 opacity-100">
            {hardwareLab.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-dark-800/60 border border-neon-cyan/20 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full font-mono relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-cyan to-transparent opacity-50"></div>
                <div className="mb-4">
                  <div className="text-neon-cyan/80 text-xs mb-1">
                    $ cat lab_notes/{project.title.toLowerCase().replace(/\s+/g, '_')}.txt
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="mb-5">
                  <span className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded border border-dark-600">
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto border-t border-dark-700/50 pt-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-neon-cyan/70 text-xs">
                      [{t}]
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
