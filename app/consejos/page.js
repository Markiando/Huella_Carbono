import { Sidebar } from '@/components/sidebar'
import { MetricsPanel } from '@/components/metrics-panel'
import { SupportButton } from '@/components/support-button'
import EcoTips from '@/components/eco-tips'

export default function Tips() {
  return (
    <div className="flex h-screen bg-[#F5F5DC]">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
      <h1 className="text-3xl font-semibold text-[#2C7A7B] mb-6">Consejos</h1>
        <EcoTips/>
        <MetricsPanel />
        <SupportButton />
      </main>
    </div>
  )
}
