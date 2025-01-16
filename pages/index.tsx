import { Hero } from '@/components'
import About from '@/components/About'
import MenuBar from '@/components/MenuBar'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
    </main>
  )
}
