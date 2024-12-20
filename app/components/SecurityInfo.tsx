import React from 'react';
import { Lock } from 'lucide-react';

export const SecurityInfo = () => (
  <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-center space-x-3">
    <Lock className="h-5 w-5 text-blue-700 flex-shrink-0" />
    <div className="text-sm text-blue-700 text-center">
      Todas las transacciones son procesadas de forma segura y encriptada.
    </div>
  </div>
);

export default SecurityInfo;
