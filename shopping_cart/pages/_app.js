import { useState } from 'react';
import Head from 'next/head';

import ShoppingCartContext from '../components/context/cartContext';
import Navbar from "../components/Navbar";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState({});

  return (
    <>
    <Head>
      {/* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" /> */}
    </Head>
      {/* Wrapping the app with the context API module */}
      <ShoppingCartContext.Provider value={{ items, setItems }}>
        <Navbar />
        <div className='w-9/12 m-auto pt-10'>
          <Component {...pageProps} />
        </div>
      </ShoppingCartContext.Provider>
    </>
  )
}

export default MyApp
