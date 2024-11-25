import { Share2, Zap, Leaf } from 'lucide-react'

export function MetricsPanel() {
  return (
    <div className="grid grid-cols-3 gap-12 bg-[#e8f5f3] p-12 rounded-2xl min-h-[200px]">
      <div className="flex flex-col justify-center">
        <h3 className="text-black text-xl font-medium">Energía Consumida</h3>
        <p className="text-gray-600 text-xl mt-2">hasta el momento, has consumido</p>
        <div className="flex items-center mt-4">
          <Zap className="h-6 w-6 text-[#4CAF50] mr-2" strokeWidth={2} />
          <span className="text-3xl font-semibold text-black">1,337</span>
          <span className="text-lg text-gray-700 ml-1">kWh</span>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-black text-xl font-medium">Impacto</h3>
        <p className="text-gray-600 text-xl mt-2">Toneladas de CO2eq</p>
        <div className="flex items-center mt-4">
          <Leaf className="h-6 w-6 text-[#4CAF50] mr-2" strokeWidth={2} />
          <span className="text-3xl font-semibold text-black">2.6</span>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-black text-xl font-medium">Comparte tus Métricas</h3>
        <p className="text-gray-600 text-xl mt-2">¡Comparte en tus redes tu impacto al mundo!</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-[#1a2e4a] text-white text-lg py-2 px-5 rounded-md">
            Comparte
          </button>
          <button className="bg-[#4CAF50] text-white text-lg py-2 px-5 rounded-md flex items-center">
            <span className="mr-1">•</span>
            Soporte
          </button>
        </div>
      </div>
    </div>
  )
}

