import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Homebanner from '@/components/Homebanner'
import Aboutteam from '@/components/Aboutteam'
import Cover from '@/components/Cover'
import City from '@/components/City'
import Covertwo from '@/components/Covertwo'
import Studiobedroom from '@/components/Studiobedroom'
import Revealarea from '@/components/Revealarea'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Reveal</title>
        <meta name="description" content="Official Reveal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homebanner/>
      <Revealarea/>
      <Studiobedroom/>
      <Covertwo/>
      <City/>
      <Cover/>
      <Aboutteam/>
    </>
  )
}
