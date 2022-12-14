import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

function List({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Users List!
        </h1>

        <p className={styles.description}>
        Jump to home mate.{' '}
        </p>

        <div className={styles.grid}>
          <ul>
            {
              users.map((user) => {
                return (
                  <li key={user.id}>
                    <Link 
                      href={`/users/${user.username}`}
                      passHref>
                      <a>{user.username}</a>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
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

function Users() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = process.env.API_ENDPOINT || "https://jsonplaceholder.typicode.com"
      const req = await fetch(`${apiUrl}/users/`);
      const users = await req.json();

      setLoading(false);
      setData(users);
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading users...</div>}
      {data && <List users={data} />}
    </div>
  )
}

export default Users;
