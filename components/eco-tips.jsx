import React from 'react';
import { Bus, ShoppingBag, Beef, Lightbulb, Shirt } from 'lucide-react';

export default function EcoTips() {
  return (
    <div className="p-6 bg-[#FAF9F6] flex flex-col items-center">
      <div className="grid grid-cols-3 gap-5 max-w-2xl mx-auto">
        {/* Public Transport Card */}
        <div className="bg-[#D4B7C0] aspect-square p-4 flex flex-col items-center justify-center rounded-lg hover:shadow-md transition-shadow">
          <Bus className="w-10 h-10 mb-3 text-black" strokeWidth={1.5} />
          <p className="text-center font-medium text-sm text-black">
            Usa el transporte público
          </p>
        </div>

        {/* Local Products Card */}
        <div className="bg-[#B8C2CC] aspect-square p-4 flex flex-col items-center justify-center rounded-lg hover:shadow-md transition-shadow">
          <ShoppingBag className="w-10 h-10 mb-3 text-black" strokeWidth={1.5} />
          <p className="text-center font-medium text-sm text-black">
            Compra productos locales
          </p>
        </div>

        {/* Empty space to match layout */}
        <div className="aspect-square"></div>

        {/* Red Meat Card */}
        <div className="bg-[#F5D0D0] aspect-square p-4 flex flex-col items-center justify-center rounded-lg hover:shadow-md transition-shadow">
          <Beef className="w-10 h-10 mb-3 text-black" strokeWidth={1.5} />
          <p className="text-center font-medium text-sm text-black">
            Consume menos carne roja
          </p>
        </div>

        {/* Energy Saving Card */}
        <div className="bg-[#BFD7F9] aspect-square p-4 flex flex-col items-center justify-center rounded-lg hover:shadow-md transition-shadow">
          <Lightbulb className="w-10 h-10 mb-3 text-black" strokeWidth={1.5} />
          <p className="text-center font-medium text-sm text-black">
            Implementa focos y luces ahorradores
          </p>
        </div>

        {/* Second Hand Clothes Card */}
        <div className="bg-[#9AA5B1] aspect-square p-4 flex flex-col items-center justify-center rounded-lg hover:shadow-md transition-shadow">
          <Shirt className="w-10 h-10 mb-3 text-black" strokeWidth={1.5} />
          <p className="text-center font-medium text-sm text-black">
            Compra ropa de segunda mano
          </p>
        </div>
      </div>
    </div>
  );
}
