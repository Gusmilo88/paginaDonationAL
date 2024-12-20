"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CreditCard } from 'lucide-react';

interface PaymentMethodSelectorProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
  name: string;
  email: string;
  amount: string;
}

export const PaymentMethodSelector = ({ 
  selectedMethod, 
  onMethodChange,
  name,
  email,
  amount
}: PaymentMethodSelectorProps) => {
  const router = useRouter();
  
  const paymentMethods = [
    { id: 'mercadopago', label: <div className="h-32 w-32 relative"><Image src="/mercadoPagoLogo.svg" alt="MercadoPago" fill className="object-contain" /></div> },
    { id: 'paypal', label: <div className="h-32 w-32 relative"><Image src="/paypal.png" alt="PayPal" fill className="object-contain" /></div> },
    { id: 'transferencia', label: <div className="h-12 w-12 relative"><Image src="/transferenciaBancaria.png" alt="Transferencia Bancaria" fill className="object-contain" /></div> },
    { id: 'webpay', label: <div className="h-24 w-24 relative"><Image src="/webPay.png" alt="WebPay" fill className="object-contain" /></div> }
  ];

  const isFormValid = name.trim() !== '' && email.trim() !== '' && amount.trim() !== '';

  const handleMethodChange = (methodId: string) => {
    if (!isFormValid) {
      return;
    }

    // Limpiar y validar el monto
    const numericAmount = amount.replace(/[^0-9.]/g, '');
    const cleanAmount = parseFloat(numericAmount);

    if (!cleanAmount || cleanAmount <= 0) {
      alert('Por favor ingresa un monto válido mayor a 0');
      return;
    }

    if (methodId === 'paypal') {
      router.push(`/donations/paypal?amount=${cleanAmount.toFixed(2)}`);
    } else if (methodId === 'transferencia') {
      router.push('/donations/bank-transfer');
    } else if (methodId === 'mercadopago') {
      router.push('/donations/mercado-pago');
    } else if (methodId === 'webpay') {
      window.open('https://www.darcontarjeta.cl/portalpagodirecto/pages/institucion.jsf?idEstablecimiento=27434105', '_blank');
    }
    
    onMethodChange(methodId);
  };

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2 text-sm font-bold text-white mb-2 text-shadow-dark">
        <CreditCard className="w-5 h-5 text-white" />
        Método de pago
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            type="button"
            className={`flex items-center justify-center px-4 py-2 rounded-lg border transition-colors h-12
              ${!isFormValid 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300' 
                : selectedMethod === method.id 
                  ? 'bg-gradient-to-r from-[#f40028] to-[#900b1f] text-white border-[#f40028]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#f40028]'}`}
            onClick={() => handleMethodChange(method.id)}
            disabled={!isFormValid}
          >
            {method.label}
          </button>
        ))}
      </div>

      {!isFormValid && (
        <p className="text-red-500 text-sm font-bold text-shadow-dark">
          Por favor, complete todos los campos requeridos antes de seleccionar un método de pago
        </p>
      )}
    </div>
  );
};