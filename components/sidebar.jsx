import { BarChart2, Bell, ListTodo, Lightbulb, Target, Award, BookOpen, User } from 'lucide-react'

export function Sidebar() {
  const menuItems = [
    { icon: BarChart2, label: 'Mi Huella de Carbono', active: true },
    { icon: Bell, label: 'Notificaciones' },
    { icon: ListTodo, label: 'Actividades' },
    { icon: Lightbulb, label: 'Consejos' },
    { icon: Target, label: 'Desafíos' },
    { icon: Award, label: 'Insignias' },
    { icon: BookOpen, label: 'Educación' },
    { icon: User, label: 'Mi Cuenta' },
  ]

  return (
    <aside className="w-64 bg-[#faf7f0] border-r border-[#e6e0d5] p-4 flex flex-col">
      <div className="text-4xl font-mono text-green-700 mb-8 pl-2">Z</div>
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center px-2 py-2 rounded-lg text-sm ${
              item.active 
                ? 'text-green-700 bg-green-50' 
                : 'text-gray-600 hover:bg-green-50'
            }`}
          >
            <item.icon className="h-4 w-4 mr-3" />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto">
        <img
          src="/placeholder.svg?height=200&width=200"
          alt="Árbol tecnológico"
          className="w-full"
        />
      </div>
    </aside>
  )
}



