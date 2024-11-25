import { Sidebar } from '@/components/sidebar'
import { MainChart } from '@/components/main-chart'
import { InfoBlocks } from '@/components/info-blocks'
import { SupportButton } from '@/components/support-button'

export default function CarbonFootprintDashboard() {
  return (
    <div className="flex h-screen bg-[#F5F5DC]">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-semibold text-[#2C7A7B] mb-6">Tu Huella de Carbono</h1>
        <MainChart />
        <InfoBlocks />
        <SupportButton />
      </main>
    </div>
  )
}

