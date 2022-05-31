import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TitleProvider } from '../context/title'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TitleProvider>
      <Component {...pageProps} />
    </TitleProvider>
  )
}

export default MyApp
