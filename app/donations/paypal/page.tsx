'use client'

import React, { Suspense } from 'react'
import Nav from '@/components/Nav'
import { useSearchParams } from 'next/navigation'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButtonsWrapper = ({ monto }: { monto: string | null }) => {
  if (!monto) {
    return (
      <div className="text-red-500 p-4 border border-red-500 rounded">
        No se ha especificado un monto para la donación
      </div>
    );
  }

  const montoNumerico = parseFloat(monto);

  if (isNaN(montoNumerico) || montoNumerico <= 0) {
    return (
      <div className="text-red-500 p-4 border border-red-500 rounded">
        El monto especificado no es válido
      </div>
    );
  }

  return (
    <PayPalButtons
      style={{
        layout: "vertical",
        color: "blue",
        shape: "rect",
        label: "donate",
        height: 55
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [{
            amount: {
              currency_code: "USD",
              value: montoNumerico.toFixed(2)
            },
            description: "Donación"
          }],
          application_context: {
            shipping_preference: "NO_SHIPPING"
          }
        });
      }}
      onApprove={async (data, actions) => {
        if (!actions.order) {
          console.error('Order object is undefined');
          return;
        }

        try {
          const order = await actions.order.capture();
          console.log('Donación exitosa:', order);
          localStorage.setItem('donacionExitosa', 'true');
          localStorage.setItem('orderID', order.id);
          alert('¡Gracias por tu donación!');
          window.location.href = '/gracias';
        } catch (error) {
          console.error('Error al capturar la orden:', error);
          alert('Hubo un error al procesar la donación');
        }
      }}
      onError={(err) => {
        console.error('Error en PayPal:', err);
        alert('Hubo un error al procesar el pago. Por favor, intenta nuevamente.');
      }}
      onCancel={() => {
        console.log('Operación cancelada por el usuario');
        alert('Has cancelado la operación');
      }}
    />
  );
};

const ContenidoPaypal = () => {
  const searchParams = useSearchParams();
  const monto = searchParams.get('amount');

  const paypalConfig = {
    "client-id": "AXnom8CYer47l5of4TqSjyMGL50zQgG-FzaF6qGe_n6xBWFmpEZQyCLjdO6AD0S-vdFVYdnrh7Z8ahrd",
    currency: "USD",
    intent: "capture"
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
          Realiza tu donación de forma segura con PayPal
        </h1>
        
        {monto && (
          <p className="text-lg text-gray-600">
            Monto a donar: ${parseFloat(monto).toFixed(2)} USD
          </p>
        )}
        
        <div className="max-w-md mx-auto w-full">
          <PayPalScriptProvider options={paypalConfig}>
            <PayPalButtonsWrapper monto={monto} />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default function Paypal() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#f40028] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <ContenidoPaypal />
      </Suspense>
    </div>
  );
}