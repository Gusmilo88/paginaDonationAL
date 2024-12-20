import React from 'react';

export const BankTransferInfo = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Información de Transferencia Bancaria</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Banco:</p>
          <p>Nombre del Banco</p>
        </div>
        <div>
          <p className="font-semibold">Número de Cuenta:</p>
          <p>XXXX-XXXX-XXXX-XXXX</p>
        </div>
        <div>
          <p className="font-semibold">Titular de la Cuenta:</p>
          <p>Nombre del Titular</p>
        </div>
        <div>
          <p className="font-semibold">CBU:</p>
          <p>XXXXXXXXXXXXXXXXXX</p>
        </div>
        <div>
          <p className="font-semibold">Alias:</p>
          <p>ALIAS.DE.LA.CUENTA</p>
        </div>
      </div>
    </div>
  );
}; 