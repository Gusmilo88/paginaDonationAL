'use client';

import React from 'react';

interface DonationAmountSelectorProps {
  amount: string;
  onAmountChange: (amount: string) => void;
}

const DonationAmountSelector: React.FC<DonationAmountSelectorProps> = ({ amount, onAmountChange }) => {
  const predefinedAmounts = ['500', '1000', '2000', '5000'];

  return (
    <div className="space-y-4">
      <label htmlFor="amount" className="block text-lg font-medium text-gray-700">
        Monto a donar
      </label>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {predefinedAmounts.map((presetAmount) => (
          <button
            key={presetAmount}
            type="button"
            className={`py-2 px-4 rounded-lg border ${
              amount === presetAmount
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => onAmountChange(presetAmount)}
          >
            ${presetAmount}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-lg">$</span>
          </div>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="block w-full pl-8 pr-12 py-3 text-lg border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Otro monto"
            min="1"
          />
        </div>
      </div>
    </div>
  );
};

export default DonationAmountSelector; 