import { LifeBuoy } from 'lucide-react'

export function SupportButton() {
  return (
    <button className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
      <LifeBuoy className="h-6 w-6" />
    </button>
  )
}

