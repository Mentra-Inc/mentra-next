import { Hero } from '@/components'
import AboutUs from '@/components/AboutUs'
import MenuBar from '@/components/MenuBar'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MenuBar />
      <Hero />
      <AboutUs />
    </main>
  )
}
