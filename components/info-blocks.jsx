import { Leaf, Share2 } from 'lucide-react'

export function InfoBlocks() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">Energía Consumida</h3>
        <p className="text-3xl font-bold">450 kWh</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">Impacto</h3>
        <div className="flex items-center">
          <p className="text-3xl font-bold mr-2">2.5</p>
          <p className="text-xl">toneladas CO2eq</p>
          <Leaf className="ml-auto text-green-500" size={32} />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">Comparte tus Métricas</h3>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center">
          <Share2 className="mr-2 h-4 w-4" /> Compartir
        </button>
      </div>
    </div>
  )
}