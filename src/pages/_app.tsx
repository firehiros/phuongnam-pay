// Next + React import
import React, { useEffect } from 'react'

// Third party import
import Script from 'next/script'
import Head from "next/head";
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router';
// import NProgress from 'nprogress'
// import { Preloader, Placeholder } from 'react-preloading-screen'

// App import
import '../i18n'

// Style Import
// import '../styles/vendors.scss'
// import '../styles/style.scss'
// import '../styles/wizard.scss'
// import '../styles/blog.scss'

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      // NProgress.start()
    }
    const handleStop = () => {
      // NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* <NextSeo
        title="Simvang - The new way using internet"
        description="Kachigo is a company to leading the internet in the world"
        openGraph={{
          type: 'website',
          locale: 'vn_IE',
          // url: 'https://nextland-react.envytheme.com/',
          site_name: 'Kachigo - Give value to the world'
        }}
      /> */}

      <Component {...pageProps} />
    </>
  )
}

export default MyApp