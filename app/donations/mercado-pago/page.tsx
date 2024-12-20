'use client'

import React, { useState } from 'react';
import Nav from '@/components/Nav';
import { Heart } from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MercadoPago() {
  const [showThanks, setShowThanks] = useState(false);
  
  const handleDonationClick = (amount) => {
    setShowThanks(true);
    setTimeout(() => setShowThanks(false), 3000);
  };

  const donations = [
    { amount: 2000, label: "🎁 $2000 CLP", link: "https://mpago.la/2tFVwVC" },
    { amount: 5000, label: "💵 $5000 CLP", link: "https://mpago.la/1RaTVRC" },
    { amount: 10000, label: "❤️ $10.000 CLP", popular: true, link: "https://mpago.la/2mJNUB3" },
    { amount: 20000, label: "💰 $20.000 CLP", link: "https://mpago.la/2xz7sdi" },
    { amount: 50000, label: "⭐ $50.000 CLP", link: "https://mpago.la/2ZnLFU9" },
    { amount: 100000, label: "💎 $100.000 CLP", link: "https://mpago.la/2P3z8W3" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Nav />
      
      <div className="container mx-auto px-4 py-12 font-sans">
        {/* Banner Image */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <Heart className="w-12 h-12 text-red-500" />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 font-montserrat">
          Dona con MercadoPago
        </h1>

        <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 mb-4 font-roboto">
              Tu donación nos ayuda a seguir adelante con nuestra misión.
              Elige el monto que desees donar a través de MercadoPago.
            </p>
            <p className="text-lg text-gray-600 font-roboto">
              <span className="flex items-center justify-center gap-2">
                 🔒 Al hacer clic en cualquiera de los botones, serás redirigido a una página segura de MercadoPago 
                para completar tu donación.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {donations.map((donation) => (
              <Link 
                key={donation.amount}
                href={donation.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleDonationClick(donation.amount)}
                className={`
                  relative group flex items-center justify-center gap-3 py-4 px-6 rounded-xl
                  ${donation.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                    : 'bg-gradient-to-r from-blue-400 to-blue-500 text-white'}
                  font-semibold shadow-md hover:shadow-lg transition-all duration-300
                  hover:scale-105 hover:from-blue-600 hover:to-blue-700
                `}
              >
                <span className="flex items-center gap-2">
                  {donation.label}
                </span>
                {donation.popular && (
                  <span className="absolute sm:-top-6 -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 text-xs py-1 px-2 rounded-full">
                    Opción recomendada
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Thank you message */}
        {showThanks && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-lg shadow-lg transition-opacity duration-500">
            <span className="flex items-center gap-2">
              ¡Gracias por apoyar nuestra misión! 🙏❤️
            </span>
          </div>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
}