import Head from 'next/head'
import Introduction from '../components/Introduction';

export default function Home() {


  return (
    <div>
      <Head>
        <title>Welcome to my Portfolio!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
    <main >
      <Introduction  />
        </main>
    </div>

  )
}
