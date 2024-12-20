'use client';

import React from 'react';

interface PaymentMethodSelectorProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({ selectedMethod, onMethodChange }) => {
  const handleMethodSelect = (method: string) => {
    onMethodChange(method);
  };

  const paymentMethods = [
    {
      id: 'bank-transfer',
      name: 'Transferencia Bancaria',
      description: 'Transferí directamente a nuestra cuenta bancaria',
      icon: '🏦'
    },
    {
      id: 'mercadopago',
      name: 'MercadoPago',
      description: 'Pagá con tarjeta de crédito, débito o dinero en cuenta',
      icon: '💳'
    },
    {
      id: 'webpay',
      name: 'WebPay',
      description: 'Sistema de pago electrónico chileno',
      icon: '🇨🇱'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Paga de forma segura con PayPal',
      icon: '🌐'
    }
  ];

  return (
    <div className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">
        Método de pago
      </label>
      
      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            type="button"
            className={`flex items-center p-4 border rounded-lg transition-colors ${
              selectedMethod === method.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => handleMethodSelect(method.id)}
          >
            <span className="text-2xl mr-3">{method.icon}</span>
            <div className="text-left">
              <div className="font-medium">{method.name}</div>
              <div className="text-sm text-gray-500">{method.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelector; 