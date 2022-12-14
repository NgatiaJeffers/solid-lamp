import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import axios from 'axios'

export async function getServerSideProps() {
  // Here we will make the REST request to our APIs
  // const usersReq = await axios.get('https://jsonplaceholder.typicode.com/users')
  const usersReq = await axios.get(`${process.env.API_ENDPOINT}/04/users/`, 
      {
        headers: {
          authorization: process.env.API_TOKEN
        }
      }
  );
  return {
    props: {
      users: usersReq.data
    }
  }
}

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Welcome to REST API calls!</a>
        </h1>

        <div className={styles.description}>
          Click on the button{' '}
          <ul>
            {
              users?.map((user) => {
                return (
                  <li key={user.id}>
                  <Link
                    href={`/users/${user.username}`}
                  >
                    <a>{user.username}</a>
                  </Link>
                </li>
                )
              })
            }
          </ul>
        </div>

        <div className={styles.grid}>
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
