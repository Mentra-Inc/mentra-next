import '@/styles/globals.css'
import { Roboto_Flex } from 'next/font/google'

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex', // Optional: for custom properties
})

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={robotoFlex.variable}>
      <Component {...pageProps} />
    </main>
  )
}
