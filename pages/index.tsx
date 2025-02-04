import { Hero } from '@/components'
import AboutUs from '@/components/AboutUs'
import MenuBar from '@/components/MenuBar'
import OurProducts from '@/components/OurProducts'

export default function Home() {
  return (
    <main className='bg-white'>
      <MenuBar />
      <Hero />
      <AboutUs />
      <OurProducts />
    </main>
  )
}
