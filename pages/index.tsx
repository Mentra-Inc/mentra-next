import { Hero } from '@/components'
import MenuBar from '@/components/MenuBar'
import OurProducts from '@/components/OurProducts'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MenuBar />
      <Hero />
      <OurProducts />
    </main>
  )
}
