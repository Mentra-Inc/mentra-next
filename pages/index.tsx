import Hero from '@/components/Hero';
import OurProducts from '@/components/OurProducts';
import theme from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ overflow: 'hidden' }}>
        <Hero />
        <OurProducts />
      </main>
    </ThemeProvider>
  )
}
