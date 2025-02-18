import Hero from '@/components/Hero';
import MenuBar from '@/components/MenuBar'
import theme from '@/lib/theme';
import { ThemeProvider } from '@mui/material';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className="overflow-hidden">
        <MenuBar />
        <Hero />
      </main>
    </ThemeProvider>
  )
}
