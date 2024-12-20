'use client';

import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"

interface MenuItem {
  text: string;
  href: string;
  icon: string;
  isExternal: boolean;
}

interface SocialLink {
  Icon: typeof Facebook;
  href: string;
  color: string;
}

const Footer = (): JSX.Element => {
  const menuItems: MenuItem[] = [
    { text: 'Inicio', href: '/', icon: '🎄', isExternal: false },
    { text: 'Cursos Veganos', href: 'https://cursosveganos.com/', icon: '🎁', isExternal: true },
    { text: 'Investigaciones', href: 'https://traslacarne.com/', icon: '⭐', isExternal: true },
    { text: 'Contacto', href: '/#', icon: '🔔', isExternal: true }
  ]

  const socialLinks: SocialLink[] = [
    { Icon: Facebook, href: 'https://www.facebook.com/AnimalLibre/', color: 'white' },
    { Icon: Instagram, href: 'https://www.instagram.com/animallibre/', color: 'white' },
    { Icon: Youtube, href: 'https://www.youtube.com/channel/UCWNN7mfiorgQQiF7KjXLCRA', color: 'white' },
    { Icon: Mail, href: 'mailto:info@animallibre.org', color: 'white' },
  ]

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <img
                src="/logoALNavidad.png"
                alt="Logo"
                className="object-contain w-full max-w-[200px] h-auto mb-4"
              />
            </Link>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-black">Enlaces</h3>
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="relative transition-all duration-300 group hover:scale-110 text-black"
                  {...(item.isExternal ? { 
                    target: "_blank",
                    rel: "noopener noreferrer"
                  } : {})}
                >
                  <span>{item.icon} {item.text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-black">Síguenos</h3>
            <div className="flex space-x-8">
              {socialLinks.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="relative group pt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-[linear-gradient(90deg,rgba(244,0,40,1)_0%,rgba(144,11,31,1)_100%)] shadow-lg hover:shadow-xl border border-white/20">
                    {/* Brillo principal */}
                    <div className="absolute top-2 left-3 w-4 h-4 bg-white rounded-full opacity-40 blur-[2px]" />
                    <div className="absolute top-3 left-4 w-2 h-2 bg-white rounded-full opacity-60" />
                    
                    {/* Brillos adicionales */}
                    <div className="absolute bottom-2 right-3 w-3 h-3 bg-white rounded-full opacity-20 blur-[1px]" />
                    <div className="absolute top-1/2 right-2 w-1 h-1 bg-white rounded-full opacity-40" />
                    
                    {/* Base dorada más pequeña */}
                    <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-6 h-2">
                      <div className="w-full h-full bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-t-full" />
                      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-b-full" />
                      {/* Brillo metálico */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-white opacity-30 rounded-full" />
                    </div>

                    {/* Anilla dorada más pequeña */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 rounded-full border-2 border-yellow-600 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400" />
                    </div>

                    {/* Icono */}
                    <Icon className="w-7 h-7 transform translate-y-0.5 drop-shadow-lg" style={{ color: 'white' }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer