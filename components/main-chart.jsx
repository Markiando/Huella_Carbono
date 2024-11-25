'use client'

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const lineData = [
  { mes: 'Dic', usuario: 0.5, promedio: 0.8 },
  { mes: 'Ene', usuario: 1.0, promedio: 1.2 },
  { mes: 'Feb', usuario: 1.3, promedio: 1.4 },
  { mes: 'Mar', usuario: 1.5, promedio: 1.5 },
  { mes: 'Abr', usuario: 1.5, promedio: 1.6 },
  { mes: 'May', usuario: 1.6, promedio: 1.7 },
  { mes: 'Jun', usuario: 1.8, promedio: 1.8 },
  { mes: 'Jul', usuario: 2.0, promedio: 1.9 },
  { mes: 'Ago', usuario: 2.2, promedio: 2.0 },
  { mes: 'Sept', usuario: 2.4, promedio: 2.1 },
  { mes: 'Oct', usuario: 2.6, promedio: 2.2 },
]

const pieData = [
  { name: 'Energía', value: 45 },
  { name: 'Transporte', value: 25 },
  { name: 'Alimentos', value: 20 },
  { name: 'Hábitos', value: 10 },
]

const COLORS = ['#FF7E67', '#4ECDC4', '#FFD93D', '#95E1D3']

export function MainChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="usuario" 
              stroke="#FF7E67" 
              strokeWidth={2} 
              name="Tus emisiones"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="promedio" 
              stroke="#4ECDC4" 
              strokeWidth={2} 
              name="Emisiones Promedio"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute top-40 right-20 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
        <div className="mb-2">
          <h3 className="text-sm text-gray-500">Octubre 2024</h3>
          <p className="text-xl font-semibold">2.6 tnCO2eq</p>
        </div>
        <div className="w-[150px] h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {pieData.map((item, index) => (
            <div key={index} className="flex items-center text-xs">
              <div 
                className="w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: COLORS[index] }}
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


