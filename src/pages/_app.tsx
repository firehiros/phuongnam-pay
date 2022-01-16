// Next + React import
import React, { useEffect } from 'react'

// Third party import
import Script from 'next/script'
import Head from "next/head";
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router';

// App import
import '../i18n'
import "../services/firebase"

// Style Import

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* <NextSeo
        title="S-Wallet - The new wallet"
        description="UNOUN is a company to leading the internet in the world"
        openGraph={{
          type: 'website',
          locale: 'jp_IE',
          // url: 'https://nextland-react.envytheme.com/',
          site_name: 'UNOUN - Give value to the world'
        }}
      /> */}

      <Component {...pageProps} />
    </>
  )
}

export default MyApp