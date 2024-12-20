'use client'
import React, { Suspense } from 'react'
import Nav from '@/components/Nav'
import { useRouter, useSearchParams } from 'next/navigation'
import Footer from '@/components/Footer'

const InfoItem = ({ icon, label, value, copyable = false }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    // Mostrar notificación usando una alerta temporal
    const notification = document.createElement('div')
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300'
    notification.textContent = '¡Copiado al portapapeles!✅'
    document.body.appendChild(notification)
    setTimeout(() => {
      notification.style.opacity = '0'
      setTimeout(() => document.body.removeChild(notification), 300)
    }, 2000)
  }

  return (
    <div className="group transition-all duration-200 ease-in-out hover:bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <p className="font-medium text-gray-900">{label}</p>
        </div>
        {copyable && (
          <button
            className="transition-colors p-2 rounded-lg hover:bg-gray-100"
            onClick={handleCopy}
          >
            📋
          </button>
        )}
      </div>
      <p className="mt-2 text-lg font-mono pl-8 text-gray-700 hover:text-blue-700 transition-colors">
        {value}
      </p>
    </div>
  )
}

const DonationContent = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const amount = searchParams.get('amount')

  React.useEffect(() => {
    return () => {
      localStorage.removeItem('donationFlow')
    }
  }, [router])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12 font-sans flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Información de Transferencia Bancaria
        </h1>
        
        {amount && (
          <div className="text-center mb-8">
            <div className="inline-block bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6">
                <p className="text-xl text-gray-700">
                  Monto a transferir: <span className="font-semibold text-blue-600">${amount}</span>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-8 space-y-6">
            <InfoItem 
              icon="🏦" 
              label="Banco" 
              value="Banco Santander" 
            />
            <div className="h-px bg-gray-100" />
            <InfoItem 
              icon="🔢" 
              label="Número de Cuenta" 
              value="000069708625" 
              copyable={true}
            />
            <div className="h-px bg-gray-100" />
            <InfoItem 
              icon="👤" 
              label="Titular de la Cuenta" 
              value="ONG Animal Libre" 
            />
            <div className="h-px bg-gray-100" />
            <InfoItem 
              icon="✉️" 
              label="SWIFT" 
              value="BSCHCLRM" 
              copyable={true}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            ¡Gracias por tu apoyo! Cada aporte nos ayuda a seguir adelante con nuestra misión.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

const DonationsPage = () => {
  return (
    <div className="bg-gray-50">
      <Nav />
      <Suspense fallback={
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-lg text-gray-600">Cargando...</p>
        </div>
      }>
        <DonationContent />
      </Suspense>
    </div>
  )
}

export default DonationsPage