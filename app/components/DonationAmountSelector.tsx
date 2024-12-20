"use client";
import { User, Mail, DollarSign } from "lucide-react";

interface DonationAmountSelectorProps {
  amount: string;
  onAmountChange: (amount: string) => void;
  name: string;
  email: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
}

export const DonationAmountSelector = ({ 
  amount, 
  onAmountChange,
  name,
  email,
  onNameChange,
  onEmailChange
}: DonationAmountSelectorProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanValue = value.replace(/[^\d.]/g, '');
    const parts = cleanValue.split('.');
    if (parts.length > 2) return;
    if (parts[1]?.length > 2) return;
    
    onAmountChange(cleanValue);
  };

  const formatAmount = (value: string | number) => {
    return `$${Number(value).toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    })}`;
  };

  const inputClasses = "w-full px-3 py-2 text-black border rounded-lg focus:outline-none border-input-lights";
  const labelClasses = "flex items-center gap-2 text-sm font-bold text-white mb-2 text-shadow-dark";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>
            <User className="w-5 h-5 text-white" />
            Ingresa tu nombre *
          </label>
          <input
            type="text"
            placeholder="Nombre"
            className={inputClasses}
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            required
          />
        </div>

        <div>
          <label className={labelClasses}>
            <Mail className="w-5 h-5 text-white" />
            Ingresa tu email *
          </label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            className={inputClasses}
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClasses}>
          <DollarSign className="w-5 h-5 text-white" />
          Monto personalizado *
        </label>
        <input
          type="text"
          value={amount ? formatAmount(amount) : ''}
          onChange={handleInputChange}
          placeholder="Ingresa el monto"
          className={inputClasses}
          required
        />
      </div>
    </div>
  );
};