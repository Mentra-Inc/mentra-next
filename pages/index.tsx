import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
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
      </main>
    </ThemeProvider>
  )
}
