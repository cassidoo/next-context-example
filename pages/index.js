import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useAppContext } from '@context/state'

export default function Home() {
  let contextObj = useAppContext();

  console.log(contextObj)

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Context object: {JSON.stringify(contextObj)}
        </p>
      </main>

      <Footer />
    </div>
  )
}
