

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="bg-dark-700/30 border border-dark-500/30 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-neon-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>edozieanthony7@gmail.com</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-neon-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Owerri, Imo State, Nigeria</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12">
              <div className="flex items-center space-x-2 mb-8 bg-dark-800/50 w-fit px-4 py-2 rounded-full border border-dark-500/30">
                <svg className="w-3 h-3 text-neon-green animate-pulse" fill="currentColor" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <span className="text-sm text-gray-300 font-medium">Available for internships &amp; freelance</span>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://github.com/edoziecen" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800/50 border border-dark-500/30 rounded-lg hover:border-neon-green/50 hover:text-neon-green transition-colors text-gray-400">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/edozie-anthony-b3a6a6358/" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800/50 border border-dark-500/30 rounded-lg hover:border-neon-green/50 hover:text-neon-green transition-colors text-gray-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-dark-700/30 border border-dark-500/30 rounded-2xl p-8">
            <form action="https://formspree.io/f/mvkzrzqy" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full bg-dark-800/50 border border-dark-500/50 focus:border-neon-green/50 outline-none text-white rounded-lg px-4 py-3 font-sans transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full bg-dark-800/50 border border-dark-500/50 focus:border-neon-green/50 outline-none text-white rounded-lg px-4 py-3 font-sans transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  required
                  className="w-full bg-dark-800/50 border border-dark-500/50 focus:border-neon-green/50 outline-none text-white rounded-lg px-4 py-3 font-sans transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-neon-green text-dark-900 font-bold py-3 px-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
