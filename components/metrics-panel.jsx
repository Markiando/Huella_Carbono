import { Share2, Zap, Leaf } from 'lucide-react'

export function MetricsPanel() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-gray-500 text-sm mb-4">Energía Consumida</h3>
        <div className="flex items-center">
          <Zap className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-2xl font-semibold">1,337</span>
          <span className="text-sm text-gray-500 ml-2">kWh</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">Hasta el momento, has consumido:</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-gray-500 text-sm mb-4">Impacto</h3>
        <div className="flex items-center">
          <Leaf className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-2xl font-semibold">2.6</span>
          <span className="text-sm text-gray-500 ml-2">Toneladas de CO2eq.</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-gray-500 text-sm mb-4">Comparte tus Métricas</h3>
        <p className="text-xs text-gray-400 mb-4">¿Comparte en tus redes tu impacto al mundo!</p>
        <button className="w-full bg-[#2a4c43] text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-[#1a3c33] transition-colors">
          <Share2 className="h-4 w-4 mr-2" />
          Compartir
        </button>
      </div>
    </div>
  )
}

