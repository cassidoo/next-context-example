import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useAppContext } from '@context/state'

export default function Home() {
  let {
    state, dispatch
  } = useAppContext();

  let toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" })
  }

  return (
    <div className={`container ${state.darkMode ? 'dark' : null}`}>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={`Welcome ${state.name}`} />

        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      
        <input type="text"
               placeholder="Type your name!"
               value={state.name} 
               onChange={(event) => {
                dispatch({ type: "SET_NAME", value: event.target.value })
               }}
        />
      
      </main>

      <Footer />
    </div>
  )
}
