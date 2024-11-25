import { Home, Lightbulb, Award, Book, UserCircle } from 'lucide-react'

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Actividades' },
    { icon: Lightbulb, label: 'Consejos' },
    { icon: Award, label: 'Desafíos' },
    { icon: Award, label: 'Insignias' },
    { icon: Book, label: 'Educación' },
    { icon: UserCircle, label: 'Mi Cuenta' },
  ]

  return (
    <aside className="w-64 bg-[#E0F2F1] p-4 flex flex-col">
      {menuItems.map((item, index) => (
        <button key={index} className="flex items-center text-left px-4 py-2 mb-2 hover:bg-[#B2DFDB] rounded-md transition-colors">
          <item.icon className="mr-2 h-4 w-4" />
          {item.label}
        </button>
      ))}
      <div className="mt-auto">
        <img src="/placeholder.svg?height=100&width=100" alt="Árbol tecnológico" className="mx-auto" />
      </div>
    </aside>
  )
}

