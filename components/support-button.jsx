import { LifeBuoy } from 'lucide-react'

export function SupportButton() {
  return (
    <button 
      className="fixed bottom-6 right-6 bg-[#2a4c43] text-white p-3 rounded-full hover:bg-[#1a3c33] transition-colors shadow-lg"
      aria-label="Soporte"
    >
      <LifeBuoy className="h-6 w-6" />
    </button>
  )
}

