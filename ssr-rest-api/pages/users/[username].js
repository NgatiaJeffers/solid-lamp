import Link from "next/link";
import axios from "axios";

import styles from '../../styles/Home.module.css'

export async function getServerSideProps(ctx) {
    const { username } = ctx.query;
    const userReq = await axios.get(`${process.env.API_ENDPOINT}/04/users/${username}`, 
      {
        headers: {
          authorization: process.env.API_TOKEN
        }
      }
    );

    if (userReq.status === 404) {
      return {
        notFound: true
      };
    }

    return {
        props: {
            user: userReq.data
        }
    };
}

export default function UserPage({ user }) {
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>User Page!</a>
        </h1>

        <div className={styles.description}>
          <Link href={"/"} passHref>
            Back to home
          </Link>

          <div style={{ display: "flex" }}>
            <div>
              <p>
                <b>Username:</b> {user.username}
              </p>
            </div>
            <div>
              <p>
                <b>Full name:</b> {user.name}
              </p>
            </div>
            <div>
              <p>
                <b>Email:</b> {user.email}
              </p>
            </div>
            <div>
              <p>
                <b>Company:</b> {user.company.name}
              </p>
            </div>
            <div>
              <p>
                <b>Website:</b> {user.website}
              </p>
            </div>
          </div>
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
}