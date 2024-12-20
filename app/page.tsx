"use client";
import { useState } from 'react';
import { DonationProgress } from './components/DonationProgress';
import { PaymentMethodSelector } from './components/PaymentMethodSelector';
import { DonationAmountSelector } from './components/DonationAmountSelector';
import { SecurityInfo } from './components/SecurityInfo';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useRouter } from 'next/navigation';

export default function DonationPage() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  
  const campaignData = {
    goalAmount: 1000,
    currentAmount: 500,
    currency: 'USD'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === 'paypal') {
      // Remove any non-numeric characters and convert to number
      const numericAmount = amount.replace(/[^0-9.]/g, '');
      const cleanAmount = parseFloat(numericAmount);
      
      console.log('Monto antes de redirección:', cleanAmount); // Para debug
      
      if (cleanAmount && cleanAmount > 0) {
        router.push(`/donations/paypal?amount=${cleanAmount.toFixed(2)}`);
      } else {
        alert('Por favor ingresa un monto válido mayor a 0');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[url('/fondo4.jpg')] bg-cover bg-center bg-fixed">
      <Nav />
      <div className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-full">
            <DonationProgress 
              currentAmount={campaignData.currentAmount}
              goalAmount={campaignData.goalAmount}
              currency={campaignData.currency}
            />
            <div className="w-full mt-6 bg-black/30 backdrop-blur-none rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white text-center mb-4">Realizar una Donación</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <DonationAmountSelector 
                    amount={amount} 
                    onAmountChange={setAmount}
                    name={name}
                    email={email}
                    onNameChange={setName}
                    onEmailChange={setEmail}
                  />
                  
                  <PaymentMethodSelector 
                    selectedMethod={paymentMethod}
                    onMethodChange={setPaymentMethod}
                    name={name}
                    email={email}
                    amount={amount}
                  />
  
                  <SecurityInfo />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}