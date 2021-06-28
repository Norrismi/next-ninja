import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <h1 className={styles.title}>Homepage</h1>
      <div className={styles.text}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quis quod nam placeat voluptate dicta, ipsum suscipit ea alias quia aperiam et voluptas impedit minima possimus? Alias iste quo aperiam quae.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quis quod nam placeat voluptate dicta, ipsum suscipit ea alias quia aperiam et voluptas impedit minima possimus? Alias iste quo aperiam quae.</p>
      </div>



      <Link
        href='/ninjas' >
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>



    </div>
  )
}
