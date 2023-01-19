import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar';
import { AppProvider } from '../AppContext';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AppProvider>
    <Sidebar />
  <Component {...pageProps} />
   </AppProvider>
  )
}
