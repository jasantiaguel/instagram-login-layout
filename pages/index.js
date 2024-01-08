import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Input from '@/components/Input'
import React from 'react'
import Panel from '@/components/Panel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Class 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.containerPhoto}>
        <Image src={`/images/instagram-login-photo.png`} alt="instagram login photo" width={420} height={620}/>
      </div>
        <Panel/>
      </main>

      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </>
  )
}