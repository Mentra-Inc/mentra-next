import AboutUs from '@/components/AboutUs'
import MenuBar from '@/components/MenuBar'
import OurProducts from '@/components/OurProducts'
import Hero from '@/components/Hero';

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
