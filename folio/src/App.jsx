import React, { useState, useEffect } from 'react';

function App() {
  // Animation effect for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.bento-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('opacity-100', 'translate-y-0');
      }, 100 * index);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Stats Section */}
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold text-zinc-400">56<span className="text-purple-500">+</span></div>
          <div className="flex items-center mt-2 text-sm">
            <span className="w-4 h-4 bg-indigo-500 inline-block mr-2 rounded-sm"></span>
            Projects
          </div>
        </div>
        
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold text-zinc-400">08<span className="text-purple-500">+</span></div>
          <div className="flex items-center mt-2 text-sm">
            <span className="w-4 h-4 bg-purple-500 inline-block mr-2 rounded-full"></span>
            Happy Clients
          </div>
        </div>
        
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold text-zinc-400">06<span className="text-purple-500">+</span></div>
          <div className="flex items-center mt-2 text-sm">
            <span className="w-4 h-4 bg-purple-500 inline-block mr-2 rounded-sm"></span>
            Year Expertise
          </div>
        </div>
        
        {/* Profile Section */}
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 md:col-span-4 bg-zinc-900 rounded-xl p-6 flex flex-col md:flex-row items-start">
          <div className="w-24 h-24 bg-purple-200 rounded-xl overflow-hidden mb-4 md:mb-0 md:mr-6">
            <img src="https://via.placeholder.com/200" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-green-500">Available To Work</span>
            </div>
            <h1 className="text-3xl font-bold mt-2">Arhaan Siddiquee</h1>
            <p className="text-lg text-zinc-400">I'm a <span className="text-purple-500">Designer, Developer and Debugger</span></p>
            
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-purple-500 inline-block mr-2 rounded-full"></span>
                <span>India</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-purple-500 inline-block mr-2 rounded-full"></span>
                <span>English & Hindi</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-purple-500 inline-block mr-2 rounded-full"></span>
                <span>Software Developer Engineer</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-purple-500 inline-block mr-2 rounded-full"></span>
                <span>Intern</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-purple-500 inline-block mr-2 rounded-full"></span>
                <span>SRM University</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-purple-500 inline-block mr-2 rounded-full"></span>
                <span>Good Boy</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resume Button */}
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 bg-zinc-900 rounded-xl p-6 flex items-center justify-center">
          <button className="flex items-center bg-zinc-800 hover:bg-zinc-700 transition-colors px-6 py-3 rounded-lg">
            <span className="mr-2">Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>

        
        {/* Education Section (replacing Testimonials) */}
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 md:col-span-6 bg-zinc-900 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Education Journey</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-zinc-800 group-[.is-active]:bg-purple-500 text-zinc-400 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2027
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-800 p-4 rounded-xl">
                <div className="font-bold text-purple-400">Bachelor's Degree</div>
                <div className="text-sm text-zinc-400">B.Tech, SRM University</div>
                <div className="mt-1">Computer Science and Engineering</div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-zinc-800 group-[.is-active]:bg-purple-500 text-zinc-400 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2023
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-800 p-4 rounded-xl">
                <div className="font-bold text-purple-400">Intermediate</div>
                <div className="text-sm text-zinc-400">Science, D.A.V Public School</div>
                <div className="mt-1">Specialized in Physics, Chemistry and Mathematics</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Me Section (replacing My Clients) */}
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 md:col-span-6 bg-zinc-900 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">About Me</h2>
          </div>
          
          <div className="mt-4 p-4 bg-zinc-800 rounded-xl">
            <p className="text-zinc-300 mb-4">
              I'm a passionate designer and developer with 6+ years of experience creating beautiful, functional interfaces. I specialize in React.js, Tailwind CSS, and responsive design principles that deliver exceptional user experiences.
            </p>
            <p className="text-zinc-300">
              When I'm not coding, I enjoy nothing, anime, and exploring new random bullshit. I believe in continuous learning and staying ahead of design trends to deliver innovative solutions to my clients.
            </p>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-6">
            {['YouTube', 'Twitter', 'TikTok', 'Spotify', 'Instagram', 'Snapchat', 'Dribbble', 'Pinterest'].map((platform, index) => (
              <div key={index} className="bg-zinc-800 p-3 rounded-xl flex items-center justify-center text-xs hover:bg-zinc-700 transition-colors cursor-pointer">
                {platform}
              </div>
            ))}
          </div>
        </div>
        
        {/* Projects Section (replacing Work Process) */}
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 md:col-span-2 bg-zinc-900 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">My Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700 transition-colors cursor-pointer">
              <div className="w-full h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-3"></div>
              <h3 className="font-bold">E-Commerce Platform</h3>
              <p className="text-sm text-zinc-400 mt-1">React, Node.js, MongoDB</p>
            </div>
            
            <div className="bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700 transition-colors cursor-pointer">
              <div className="w-full h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-3"></div>
              <h3 className="font-bold">Portfolio Website</h3>
              <p className="text-sm text-zinc-400 mt-1">React, Tailwind CSS</p>
            </div>
            
            <div className="bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700 transition-colors cursor-pointer">
              <div className="w-full h-32 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-3"></div>
              <h3 className="font-bold">Weather App</h3>
              <p className="text-sm text-zinc-400 mt-1">JavaScript, OpenWeather API</p>
            </div>
            
            <div className="bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700 transition-colors cursor-pointer">
              <div className="w-full h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-3"></div>
              <h3 className="font-bold">Task Management</h3>
              <p className="text-sm text-zinc-400 mt-1">React, Firebase</p>
            </div>
          </div>
        </div>
        
        {/* Online Presence */}
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 bg-zinc-900 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Online Presence</h2>
          </div>
          
          <div className="space-y-4 mt-4">
            <a href="#" className="block bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 transition-colors">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white mr-3">
                  <svg xmlns="https://x.com/ArhaanSiddique0" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <span>@ArhaanSiddique0</span>
              </div>
            </a>
            
            <a href="#" className="block bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 transition-colors">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white mr-3">
                  <svg href='https://www.instagram.com/officialloki/' className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span>@Arhaan</span>
              </div>
            </a>
            
            <a href="#" className="block bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 transition-colors">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span>@arhaansiddiquee</span>
              </div>
            </a>
          </div>
        </div>
        
        {/* Skills Section (replacing Let's Work Together) */}
        <div className="bento-card opacity-0 translate-y-4 transition-all duration-500 md:col-span-6 bg-zinc-900 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Skills & Expertise</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { name: "React.js", level: 90 },
              { name: "JavaScript", level: 85 },
              { name: "Tailwind CSS", level: 95 },
              { name: "TypeScript", level: 80 },
              { name: "Node.js", level: 75 },
              { name: "UI/UX Design", level: 85 },
              { name: "Figma", level: 80 },
              { name: "MongoDB", level: 70 }
            ].map((skill, index) => (
              <div key={index} className="bg-zinc-800 p-4 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Me</span>
            </button>
            <button className="bg-zinc-800 hover:bg-zinc-700 transition-colors px-6 py-3 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule a Call</span>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;