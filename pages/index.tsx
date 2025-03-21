import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
import OurProducts from '@/components/OurProducts';
import MenuBar from '@/components/MenuBar';
import theme from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ overflow: 'hidden' }}>
        <MenuBar />
        <Hero />
        <AboutUs />
        <OurProducts />
      </main>
    </ThemeProvider>
  )
}
