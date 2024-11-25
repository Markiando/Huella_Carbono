'use client'

import { BarChart2, Bell, ListTodo, Lightbulb, Target, Award, BookOpen, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { icon: BarChart2, label: 'Mi Huella de Carbono', href: '/' },
    { icon: Bell, label: 'Notificaciones', href: '/notificaciones' },
    { icon: ListTodo, label: 'Actividades', href: '/actividades' },
    { icon: Lightbulb, label: 'Consejos', href: '/consejos' },
    { icon: Target, label: 'Desafíos', href: '/desafios' },
    { icon: Award, label: 'Insignias', href: '/insignias' },
    { icon: BookOpen, label: 'Educación', href: '/educacion' },
    { icon: User, label: 'Mi Cuenta', href: '/mi-cuenta' },
  ]

  return (
    <aside className="w-72 bg-[#faf7f0] border-r border-[#e6e0d5] p-4 flex flex-col">
      <div className="mb-8 flex justify-center">
        <img 
          src="/3.svg" 
          alt="Zeta Logo" 
          className="h-24 w-auto"
        />
      </div>
      <nav className="space-y-3">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-base font-semibold ${
              pathname === item.href
                ? 'text-green-700 bg-green-50' 
                : 'text-gray-600 hover:bg-green-50'
            }`}
          >
            <item.icon className="h-6 w-6 mr-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto mb-4 px-[-16px]">
        <img
          src="/2(1).png"
          alt="Árbol tecnológico"
          className="w-[calc(100%+48px)] h-auto max-h-[480px] object-contain -mx-6"
        />
      </div>
    </aside>
  )
}
