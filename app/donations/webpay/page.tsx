'use client'

import React, { useEffect, Suspense } from 'react'
import Nav from '@/components/Nav'
import { useSearchParams } from 'next/navigation'
/* eslint-disable @typescript-eslint/no-unused-vars */

// Content component that uses useSearchParams
const WebPayContent = () => {
  const searchParams = useSearchParams()
  const amount = searchParams.get('amount')

  useEffect(() => {
    // Clear the flag after successful navigation
    const timer = setTimeout(() => {
      // Replace with actual WebPay redirect URL
      window.location.href = 'https://www.webpay.cl';
      localStorage.removeItem('donationFlow');
    }, 3000);

    return () => {
      clearTimeout(timer);
      localStorage.removeItem('donationFlow');
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
          En instantes serás redireccionado a WebPay para realizar la donación de una forma segura :)
        </h1>
        
        {amount && (
          <p className="text-lg text-gray-600">
            Monto a donar: ${amount}
          </p>
        )}
        
        {/* Spinner */}
        <div className="inline-block">
          <div className="w-12 h-12 border-4 border-[#f40028] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function WebPay() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#f40028] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <WebPayContent />
      </Suspense>
    </div>
  );
}