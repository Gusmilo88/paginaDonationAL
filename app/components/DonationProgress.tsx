"use client";

interface DonationProgressProps {
  currentAmount: number;
  goalAmount: number;
  currency: string;
}

export const DonationProgress = ({ currentAmount, goalAmount, currency }: DonationProgressProps) => {
  const progressPercentage = Math.min(
    (currentAmount / goalAmount) * 100,
    100
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  return (
    <div className="w-full bg-black/30 rounded-lg shadow p-6">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white text-shadow-dark">Meta de Donaciones</h2>
        <p className="text-4xl font-bold mb-2 text-green-600">
          {formatCurrency(currentAmount)}
        </p>
        <p className="text-white text-shadow-dark mb-4">
          recaudado de <span className="font-semibold text-green-600">{formatCurrency(goalAmount)}</span>
        </p>

        <div className="relative flex items-center gap-4">
          <div className="flex-grow h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progressPercentage}%`,
                background: 'linear-gradient(90deg, rgba(244,0,40,1) 0%, rgba(144,11,31,1) 100%)',
              }}
            />
          </div>
          <div className="animate-gift">
            <img 
              src="/regalo.png" 
              alt="Regalo de Navidad" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
        <p className="text-sm text-white text-shadow-dark mt-2">
          {progressPercentage.toFixed(1)}% completado
        </p>
      </div>

      <style jsx global>{`
        .text-shadow-dark {
          text-shadow: 
            1px 1px 0 #000,
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            0 1px 0 #000,
            1px 0 0 #000,
            0 -1px 0 #000,
            -1px 0 0 #000;
        }

        @keyframes christmas-lights {
          0% { color: red; }
          25% { color: green; }
          50% { color: gold; }
          75% { color: blue; }
          100% { color: red; }
        }

        @keyframes twinkle {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }

        @keyframes rotate-stripes {
          0% { background-position: 0 0; }
          100% { background-position: 56.57px 0; }
        }

        @keyframes gift-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .animate-gift {
          animation: gift-bounce 1.5s ease-in-out infinite;
        }

        .font-semibold {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};