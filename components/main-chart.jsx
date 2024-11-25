'use client'

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const lineData = [
  { month: 'Ene', user: 4, average: 5 },
  { month: 'Feb', user: 3, average: 5 },
  { month: 'Mar', user: 2, average: 4 },
  { month: 'Abr', user: 3, average: 4 },
  { month: 'May', user: 4, average: 5 },
  { month: 'Jun', user: 3, average: 5 },
  { month: 'Jul', user: 5, average: 6 },
  { month: 'Ago', user: 4, average: 5 },
  { month: 'Sep', user: 3, average: 5 },
  { month: 'Oct', user: 2, average: 4 },
  { month: 'Nov', user: 4, average: 5 },
  { month: 'Dic', user: 3, average: 5 },
]

const pieData = [
  { name: 'Energía', value: 35 },
  { name: 'Transporte', value: 30 },
  { name: 'Alimentos', value: 20 },
  { name: 'Hábitos', value: 15 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function MainChart() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Emisiones a lo largo del tiempo</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="user" stroke="#FFA500" strokeWidth={2} />
            <Line type="monotone" dataKey="average" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Octubre 2024</h3>
          <p className="text-2xl font-bold">2.5 toneladas CO2eq</p>
        </div>
        <div className="w-[200px] h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
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
      </div>
    </div>
  )
}

