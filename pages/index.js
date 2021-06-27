import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quis quod nam placeat voluptate dicta, ipsum suscipit ea alias quia aperiam et voluptas impedit minima possimus? Alias iste quo aperiam quae.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quis quod nam placeat voluptate dicta, ipsum suscipit ea alias quia aperiam et voluptas impedit minima possimus? Alias iste quo aperiam quae.</p>
      <Link href='/ninjas'>
      <a>See Ninja Listing</a>
      </Link>


      <Footer />
    </div>
  )
}
