import Link from "next/link"
import { useState } from "react"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { text: 'Inicio', href: '/', icon: '🎄', isExternal: false },
    { text: 'Cursos Veganos', href: 'https://cursosveganos.com/', icon: '🎁', isExternal: true },
    { text: 'Investigaciones', href: 'https://traslacarne.com/', icon: '⭐', isExternal: true },
    { text: 'Contacto', href: '/#', icon: '🔔', isExternal: false }
  ]

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center h-32"> 
          <div className="flex-shrink-0"> 
            <Link href="/">
              <img
                src="/logoALNavidad.png"
                alt="Logo"
                className="object-contain w-full max-w-[350px] h-auto"
              />
            </Link>
          </div>
          
          {/* Menú Desktop */}
          <div className="hidden md:block pr-4 ml-auto">
            <div className="flex items-center space-x-3">
              {menuItems.map((item, index) => (
                item.isExternal ? (
                  <a 
                    key={item.text}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      px-2 py-2 rounded-md text-base font-medium text-black
                      relative transition-all duration-300 group
                      hover:scale-110
                      before:content-['']
                      before:absolute before:-inset-2
                      before:bg-gradient-to-r
                      ${index % 2 === 0 ? 'animate-christmas-glow-1' : 'animate-christmas-glow-2'}
                      before:blur-xl before:opacity-0
                      hover:before:opacity-100
                      before:transition-all before:duration-300 before:ease-out
                    `}
                  >
                    {item.text}
                    <div className="garland-container absolute -bottom-4 left-0 w-full h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="garland-lights">
                        {[...Array(8)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`garland-light light-${i % 5}`}
                            style={{
                              left: `${(i * 14.285)}%`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link 
                    key={item.text}
                    href={item.href}
                    className={`
                      px-2 py-2 rounded-md text-base font-medium text-black
                      relative transition-all duration-300 group
                      hover:scale-110
                      before:content-['']
                      before:absolute before:-inset-2
                      before:bg-gradient-to-r
                      ${index % 2 === 0 ? 'animate-christmas-glow-1' : 'animate-christmas-glow-2'}
                      before:blur-xl before:opacity-0
                      hover:before:opacity-100
                      before:transition-all before:duration-300 before:ease-out
                    `}
                  >
                    {item.text}
                    <div className="garland-container absolute -bottom-4 left-0 w-full h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="garland-lights">
                        {[...Array(8)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`garland-light light-${i % 5}`}
                            style={{
                              left: `${(i * 14.285)}%`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Botón Hamburguesa */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto mr-4 relative z-50"
          >
            <div className={`w-8 h-8 relative ${isOpen ? 'santa-hat-open' : 'santa-hat'}`}>
              <div className="absolute inset-0">
                <div className={`w-full h-0.5 bg-red-600 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-3' : ''}`}></div>
                <div className={`w-full h-0.5 bg-red-600 transform transition-all duration-300 mt-2 ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 bg-red-600 transform transition-all duration-300 mt-2 ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
              </div>
            </div>
          </button>
        </div>

        {/* Menú Mobile */}
        <div className={`
          fixed inset-0 
          backdrop-blur-sm
          transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
          flex flex-col items-center justify-center
        `}>
          <div className="absolute top-0 w-full h-8 overflow-hidden">
            <div className="christmas-lights-top"></div>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            {menuItems.map((item) => (
              <div 
                key={item.text} 
                className="relative flex items-center space-x-4 bg-black/30 rounded-xl px-6 py-4 w-80"
              >
                <span className="text-2xl">{item.icon}</span>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    className="mobile-nav-link w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-3xl font-bold text-white w-full">
                      {item.text}
                    </div>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="mobile-nav-link w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-3xl font-bold text-white w-full">
                      {item.text}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes christmasGlow1 {
          0%, 100% { 
            background: radial-gradient(circle at center, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0) 70%);
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          }
          33% { 
            background: radial-gradient(circle at center, rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0) 70%);
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
          }
          66% { 
            background: radial-gradient(circle at center, rgba(0, 0, 255, 0.5), rgba(255, 0, 0, 0) 70%);
            box-shadow: 0 0 20px rgba(0, 0, 255, 0.5);
          }
        }

        @keyframes christmasGlow2 {
          0%, 100% { 
            background: radial-gradient(circle at center, rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0) 70%);
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
          }
          33% { 
            background: radial-gradient(circle at center, rgba(0, 0, 255, 0.5), rgba(255, 0, 0, 0) 70%);
            box-shadow: 0 0 20px rgba(0, 0, 255, 0.5);
          }
          66% { 
            background: radial-gradient(circle at center, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0) 70%);
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          }
        }

        @keyframes lightTwinkle {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1.2);
            filter: brightness(1.2);
          }
          50% { 
            opacity: 0.7; 
            transform: scale(0.8);
            filter: brightness(0.8);
          }
        }

        .garland-lights {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .garland-light {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: lightTwinkle 0.8s ease-in-out infinite;
        }

        .light-0 {
          background: #ff6666;
          box-shadow: 
            0 0 15px #ff9999,
            0 0 25px #ffcccc,
            0 0 35px rgba(255, 204, 204, 0.9);
        }

        .light-1 {
          background: #66ff66;
          box-shadow: 
            0 0 15px #99ff99,
            0 0 25px #ccffcc,
            0 0 35px rgba(204, 255, 204, 0.9);
        }

        .light-2 {
          background: #6666ff;
          box-shadow: 
            0 0 15px #9999ff,
            0 0 25px #ccccff,
            0 0 35px rgba(204, 204, 255, 0.9);
        }

        .light-3 {
          background: #ffff66;
          box-shadow: 
            0 0 15px #ffff99,
            0 0 25px #ffffcc,
            0 0 35px rgba(255, 255, 204, 0.9);
        }

        .light-4 {
          background: #ff66ff;
          box-shadow: 
            0 0 15px #ff99ff,
            0 0 25px #ffccff,
            0 0 35px rgba(255, 204, 255, 0.9);
        }

        /* Estilos del menú mobile */
        @keyframes moveGradient {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .christmas-lights-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            #ff0000 0%,
            #00ff00 20%,
            #0000ff 40%,
            #ffff00 60%,
            #ff00ff 80%,
            #ff0000 100%
          );
          background-size: 200% 100%;
          animation: lightsMovement 2s linear infinite;
          box-shadow: 0 0 10px rgba(255,255,255,0.8);
        }

        @keyframes lightsMovement {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .santa-hat::before {
          content: '';
          position: absolute;
          top: -10px;
          right: -5px;
          width: 15px;
          height: 15px;
          background-color: white;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(255,255,255,0.8);
          transition: all 0.3s;
        }

        .santa-hat-open::before {
          top: -5px;
          right: -8px;
        }
      `}</style>
    </nav>
  )
}

export default Nav