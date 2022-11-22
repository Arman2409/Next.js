import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Main</title>
        <meta name="keywords" content="Main Page" />
      </Head>
      <div className={styles.container}>
      <h1> Main Page </h1>
      </div>
    </>
  )
}
